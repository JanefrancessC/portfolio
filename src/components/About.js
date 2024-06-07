import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Education</p>
        </div>

        <p className="text-xl text-justify">
          Full-stack web developer adept at API development, unit testing, and
          collaborating in a scaling-up environment and a Cybersecurity
          enthusiast. Interested in anything Software Engineering and
          information security. I like to play puzzles and discuss science, or
          just listen to Physicist explain their research. I am also interested
          in Modelling as different people have told me to consider it as a
          career.
        </p>
      </div>
    </div>
  );
};

export default About;
