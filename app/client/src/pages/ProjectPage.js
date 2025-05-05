import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "IRIS",
    description: "A React and Python, insurance document review system designed for BFL Canada",
    gifRef: "/gifs/iris.gif",
    alt: "Iris",
    link: "https://github.com/COSC-499-W2024/capstone-project-team-1-003",
  },
  {
    title: "Cancer Pathology Report Annotation",
    gifRef: "/gifs/annotation.gif",
    alt: "Cancer Annotation",
    description: "Annotating Breast Cancer Pathology Reports from BC Cancer data",
    link: "https://weather-app.com",
  },
  {
    title: "On-Body Scrolling in VR",
    gifRef: "/gifs/onbody.gif",
    alt: "On-Body Scrolling",
    description: "A Unity application developed to use On-Body Scrolling in VR",
    link: "https://memory-game.com",
  },
  {
    title: "eduQuest",
    description: "An e-learning platform to make learning more exciting",
    gifRef: "/gifs/eduQuest.gif",
    alt: "eduQuest",
    link: "https://your-portfolio.com",
  },
 
];

const ProjectPage = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header />
      <SideNavBar />
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center px-4"
        style={{
          backgroundImage: "url('/images/background.svg')",
        }}
      >
      <h1 className="text-4xl font-bold text-indigo-600 mt-24 mb-12 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-2/3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <img
            src = {project.gifRef}
            alt = {project.alt}
            className = ""
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectPage;
