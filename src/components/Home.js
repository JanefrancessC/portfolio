import React from "react";
import hero from "../assets/images/hero.jpeg";
import SkillList from "./Skill";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-row">
        <div className="mr-8">
          <div className="rounded-full overflow-hidden w-32 h-32 md:w-60 md:h-60">
            <img
              src={hero}
              alt="portrait"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-7xl font-bold text-yellow-500">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-500 py-4 w-full text-justify">
            Full-stack web developer adept at API development, unit testing, and
            collaborating in a scaling-up environment and a Cybersecurity
            enthusiast. Interested in anything Software Engineering and
            information security. I like to play puzzles and discuss science, or
            just listen to Physicist explain their research. I am also
            interested in Modelling as different people have told me to consider
            it as a career.
          </p>

          <div className="flex flex-wrap justify-center">
            <SkillList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
