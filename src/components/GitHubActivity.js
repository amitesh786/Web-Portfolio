import React, { useEffect, useState } from "react";
// import ActivityCalendar from "react-activity-calendar";
import ActivityCalendar from "./ActivityCalendar";

const GitHubActivity = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/amitesh786")
      .then((res) => res.json())
      .then((json) => {
        const validData = json.contributions.map((entry) => ({
          date: entry.date,
          count: entry.count,
          level: entry.level ?? 0,
        }));
        setData(validData);
      })
      .catch((err) => console.error("Failed to load calendar:", err));
  }, []);

  return (
    <div className="flex justify-center mb-10">
      {data.length > 0 ? (
        <ActivityCalendar data={data} blockSize={15} blockMargin={5} fontSize={14} />
      ) : (
        <p className="text-gray-400">Loading GitHub activity...</p>
      )}
    </div>
  );
};

export default GitHubActivity;
