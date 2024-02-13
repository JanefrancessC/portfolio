import React from "react";
import "./projects.css";
import deskeando from "../assets/images/deskeando.png";
import feedback from "../assets/images/feedback-tracker.png";
import coffeeStore from "../assets/images/coffeeStore2.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: deskeando,
      demoLink: "https://deskeando.onrender.com/",
      gitHubLink: "https://github.com/JanefrancessC/deskeando",
    },
    {
      id: 2,
      src: feedback,
      demoLink: "https://cyf-feedback-tracker.onrender.com/",
      gitHubLink:
        "https://github.com/JanefrancessC/wm4-1-techieelites-feedbacktracker",
    },
    {
      id: 3,
      src: coffeeStore,
      demoLink: "",
      gitHubLink: "https://github.com/JanefrancessC/coffeeShop",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0">
          {projects.map(({ id, src, demoLink, gitHubLink }) => (
            <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
              {typeof src === "string" ? (
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 project-image"
                />
              ) : (
                <video
                  src={src}
                  controls
                  className="rounded-md duration-200 hover:scale-105 project-video"
                />
              )}
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={gitHubLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
