import React from "react";
import WhoIM from "../components/WhoIM";
import Techstack from "../components/Techstack";
import Toolstack from "../components/Toolstack";
import GitHubActivity from "../components/GitHubActivity";

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
        {/* GitHub Calendar Section */}
        <h1 className="m-auto flex items-center w-full justify-center gap-2 text-gray-200 font-medium text-4xl my-6">
          Days I <p className="text-[#ad50eb]">Code</p>
        </h1>

        <div className="flex justify-center mb-10">
          <GitHubActivity />
        </div>
      </div>
    );
}

export default About;
