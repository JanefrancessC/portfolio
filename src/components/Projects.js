import React from "react";
import "./projects.css";
import deskeando from "../assets/images/deskeando.png";
import feedback from "../assets/images/feedback-tracker.png";
import coffeeStore from "../assets/images/coffeeStore2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: deskeando,
      demoLink: "https://deskeando.onrender.com/",
      gitHubLink: "https://github.com/JanefrancessC/deskeando",
      title: "Deskeando",
      description:
        "An application to manage desk booking and spaces, a way to book desks in advance so everyone can be sure they have space to work ",
    },
    {
      id: 2,
      src: feedback,
      demoLink: "https://cyf-feedback-tracker.onrender.com/",
      gitHubLink:
        "https://github.com/JanefrancessC/wm4-1-techieelites-feedbacktracker",
      title: "Feedback Tracker",
      description:
        "Application to enable students to send feedback about their progress on a course. And for mentor to add their feedback about students progress.",
    },
    {
      id: 3,
      src: coffeeStore,
      demoLink: "https://player.vimeo.com/video/912692202?h=099ba87236",
      gitHubLink: "https://github.com/JanefrancessC/coffeeShop",
      title: "Coffee Shop Invoice",
      description: "Python console application that allows clients to manage their orders, put in a delivery address and then writes and reads the receipt to a .txt file.",
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
          {projects.map(
            ({ id, src, title, description, demoLink, gitHubLink }) => (
              <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
                {typeof src === "string" ? (
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 project-image"
                  />
                ) : (
                  <iframe
                    title="vimeo-player"
                    src={demoLink}
                    width="640"
                    height="360"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  // <iframe src={src} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="coffeeVideo"></iframe>
                )}
                <div className="pt-4 mx-8">
                  <p className="text-2xl text-center font-bold text-gray-300">
                    {title}
                  </p>
                  <p className="pt-4 text-justify text-gray-500">{description}</p>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={demoLink}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-yellow-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={gitHubLink}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-yellow-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
