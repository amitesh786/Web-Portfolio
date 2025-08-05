import React from "react";
import {
  format,
  eachDayOfInterval,
  startOfYear,
  endOfYear,
  getMonth,
  isSunday,
} from "date-fns";

import { levelColors, dayLabels } from "../utils/utils";

const ActivityCalendar = ({ data, blockSize = 12, blockMargin = 2, fontSize = 12 }) => {
  const year = new Date().getFullYear();

  const days = eachDayOfInterval({
    start: startOfYear(new Date(year, 0, 1)),
    end: endOfYear(new Date(year, 11, 31)),
  });

  const contributionMap = {};
  data.forEach((item) => {
    contributionMap[item.date] = item;
  });

  const weeks = [];
  let week = [];

  days.forEach((day, idx) => {
    const dateStr = format(day, "yyyy-MM-dd");
    const contribution = contributionMap[dateStr];
    const level = contribution?.level ?? 0;

    week.push({ date: dateStr, level, dateObj: day });

    // Start a new column every Sunday
    if (isSunday(day) || idx === days.length - 1) {
      weeks.push(week);
      week = [];
    }
  });

  // Get month labels
  const monthLabels = weeks.map((week, idx) => {
    const firstDay = week[0]?.dateObj;
    const month = firstDay ? getMonth(firstDay) : null;
    return { index: idx, monthName: firstDay ? format(firstDay, "MMM") : "" };
  });

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {/* Day labels */}
      <div style={{ display: "flex", flexDirection: "column", gap: blockMargin, fontSize, color: "#ffffff" }}>
        {Array.from({ length: 7 }).map((_, i) => {
          const label = dayLabels.includes(format(new Date(2023, 0, i + 1), "EEE"))
            ? format(new Date(2023, 0, i + 1), "EEE")
            : " ";
          return (
            <div key={i} style={{ height: blockSize, lineHeight: `${blockSize}px` }}>
              {label}
            </div>
          );
        })}
      </div>

      <div>
        {/* Month labels */}
        <div style={{ display: "flex", marginLeft: blockSize, gap: blockMargin, fontSize, color: "#ffffff" }}>
          {weeks.map((week, i) => {
            const currentMonth = format(week[0]?.dateObj, "MMM");
            const previousMonth = i > 0 ? format(weeks[i - 1][0]?.dateObj, "MMM") : null;
            const showLabel = currentMonth !== previousMonth;

            return (
              <div key={i} style={{ width: blockSize, textAlign: "center" }}>
                {showLabel ? currentMonth : ""}
              </div>
            );
          })}
        </div>


        {/* Calendar blocks */}
        <div style={{ display: "flex", gap: blockMargin }}>
          {weeks.map((week, wIdx) => (
            <div key={wIdx} style={{ display: "flex", flexDirection: "column", gap: blockMargin }}>
              {Array.from({ length: 7 }).map((_, dIdx) => {
                const day = week[dIdx];
                return (
                  <div
                    key={dIdx}
                    title={day ? `${day.date} - ${day.level} contributions` : ""}
                    style={{
                      width: blockSize,
                      height: blockSize,
                      backgroundColor: day ? levelColors[day.level] : "transparent",
                      borderRadius: 2,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCalendar;
