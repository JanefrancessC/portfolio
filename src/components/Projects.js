import React from "react";
import deskeando from "../assets/images/deskeando.png";
import feedback from "../assets/images/feedback-tracker.png";
import coffeeShop from "../assets/images/coffeeShop.mov";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: deskeando,
    },
    {
      id: 2,
      src: feedback,
    },
    {
      id: 3,
      src: coffeeShop,
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out my projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0">
          {projects.map(({ id, src }) => (
             <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
               <img
                 src={src}
                 alt=""
                 className="rounded-md duration-200 hover:scale-105"
               />
               <div className="flex items-center justify-center">
                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   Demo
                 </button>
                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   GitHub
                 </button>
               </div>
             </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Projects;
