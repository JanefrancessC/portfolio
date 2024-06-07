import React from "react";
import "./skill.css";

const skillsData = [
  {
    skill: "HTML + CSS",
    level: "advanced",
  },
  {
    skill: "JavaScript",
    level: "advanced",
  },
  {
    skill: "React",
    level: "advanced",
  },
  {
    skill: "Node.js",
    level: "intermediate",
  },
  {
    skill: "Express.js",
    level: "intermediate",
  },
  {
    skill: "Python",
    level: "beginner",
  },
  {
    skill: "Web Design",
    level: "advanced",
  },
  {
    skill: "PostgreSQL",
    level: "intermediate",
  },
  {
    skill: "MongoDB",
    level: "intermediate",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
  },
  {
    skill: "Bash",
    level: "intermediate",
  },
  {
    skill: "Linux",
    level: "intermediate",
  },
];

const SkillList = () => {
  const skills = skillsData;
  const numSkills = skills.length;

  return (
    <>
      {numSkills > 0 ? (
        <ul className="skill-list">
          {skills.map((skill) => (
            <Skill skill={skill} key={skill.skill} />
          ))}
        </ul>
      ) : (
        "No skills yet"
      )}
    </>
  );
};

const Skill = ({ skill }) => {
  return (
    <li
      className="skill shadow-lg shadow-yellow-800/50 bg-black"
      style={
        {
          // backgroundColor: "hwb(55 11% 70% / 0.738)",
          // background: "#dad126",
          // color: "#ffffff",
        }
      }
    >
      <span className="font-medium text-lg text-gray-500">{skill.skill}</span>
      <span>
        {skill.level === "advanced"
          ? "💪🏼"
          : skill.level === "intermediate"
          ? "🤞🏻"
          : "👶🏻"}
      </span>
    </li>
  );
};

export default SkillList;
