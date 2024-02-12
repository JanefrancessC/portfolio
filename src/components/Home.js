import React from "react";
import hero from "../assets/images/hero2.JPG";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-lime-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRightLong className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={hero}
            alt="portrait"
            className="rounded-2xl mx-auto w-1/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
