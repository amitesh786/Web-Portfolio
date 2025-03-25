import React from "react";
import WhoIM from "../components/WhoIM";
import Techstack from "../components/Techstack";
import Toolstack from "../components/Toolstack";

const About = () => {
    return (
      <div>
        <WhoIM />
        <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-3">
          Professional <p className="text-[#ad50eb]">Skillset </p>
        </h1>

        <Techstack />
        <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-3">
          <p className="text-[#ad50eb]">Tools </p> I Use
        </h1>

        <Toolstack />
      </div>
    );
}

export default About;
