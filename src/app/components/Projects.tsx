"use client"

import React from 'react';
import Stars from '../helpers/Stars';
import Image from 'next/image';

export default function Projects() {

  const projects = [
    {
        title: 'Tirth Sthal - Portfolio',
        description: 'I developed a website for a non-profit organization using the MERN stack, ensuring robust and scalable functionality. The site was strategically designed to amplify outreach and engage with thousands of individuals, incorporating responsive design and efficient user experience principles. Additionally, I implemented features to facilitate donations, aiming to increase contributions fivefold and drive sustainable impact for the organization.',
        techStack: ['NodeJS', 'JavaScript', 'React', 'Bootstrap', 'Express'],
        githubLink: 'https://github.com/ishanbhat2004/hindu_project',

    },
    {
        title: 'Dodge',
        description: 'In my 2D Java project, I developed a game featuring advanced audio and graphic capabilities, utilizing Java\'s AWT and Swing libraries for rendering and event handling. The game involves dodging increasingly difficult enemy stripes, with difficulty scaling over time and through levels, incorporating complex collision detection and game state management. Additionally, I implemented a robust audio system for sound effects and background music, enhancing the immersive experience of the game.',
        techStack: ['Java', 'Abstract Window Toolkit (AWT)', 'Swing'],
        githubLink: 'https://github.com/ishanbhat2004/Dodge',
    },
    {
        title: 'Shell Emulator',
        description: 'In this project, I developed a custom shell featuring advanced command parsing and execution capabilities using Lex and Yacc for handling complex commands. The shell supports features such as file redirection, pipes, signal handling, environment variable expansion, and built-in functions, demonstrating robust process management and signal handling techniques in C. Additionally, it includes line editing, history, and wildcarding functionalities, providing a comprehensive command-line interface experience.',
        techStack: ['C', 'C++', 'X-86 Assembly'],
        githubLink: '#',
    },
    {
        title: 'Vaccine Sentiment Analyzer',
        description: 'In this supervised ML project, I developed a model to analyze public sentiment regarding the COVID-19 vaccine, aiming to help hospitals optimize vaccine demand and supply. Using NLP techniques and libraries like TF-IDF vectorizer and Logistic Regression, I achieved an accuracy of approximately 90%, converting text reviews into numerical data for sentiment analysis. I hosted the final model on Pywebio, allowing it to discern positive and negative sentiments while incorporating user age and vaccine type to provide actionable insights for resource management.',
        techStack: ['Python', 'TF-IDF Vectorizer', 'Logistic Regression', 'Pywebio', 'Pickle'],
        githubLink: 'https://github.com/ishanbhat2004/CovidVaccineSentimentAnalyser',
    },
  ];

  const ProjectCard = ({ title, description, techStack, githubLink }: { 
    title: string; 
    description: string; 
    techStack: string[]; 
    githubLink: string; 
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <p className="text-gray-700 mb-4">
                {description}
            </p>
            <div className="flex space-x-4 mb-4">
    {githubLink !== '#' && 
        <a href={githubLink} className="bg-gray-800 text-white px-4 py-2 rounded font-silkscreen">GitHub</a>
    }
</div>
            <div className="flex flex-wrap space-x-2 relative">
              <Stars/>
                {techStack.map((tech, index) => (
                        <div key={index} className="bg-black text-white px-4 py-2 rounded mb-2 font-silkscreen">{tech}</div>
                ))}
            </div>
        </div>
    );
};

return (
    <div className="container mx-auto py-12 px-6 overflow-x-hidden mt-12">
        <h1 className="text-3xl text-black mb-8 font-silkscreen text-center">My Projects</h1>
        <div className="flex flex-col items-center max-h-screen overflow-y-auto md:max-h-full md:overflow-y-visible"> {/* Modify this line */}
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    githubLink={project.githubLink}
                />
            ))}
        </div>
    </div>
);
}
