import React, { useState } from 'react';

const projects = [
    {
        title: "CodeRudra",
        tags: ["React", "Next.js", "Zustand", "NestJS", "PostgreSQL", "Supabase", "Docker", "OAuth"],
        category: "Web Apps",
        description: "A premium, high-performance online judge and DSA practice platform supporting secure sandboxed execution.",
        bullets: [
            "Architected a full-stack monorepo with NestJS and Next.js, integrating isolated Docker environments for C++ and Python runner validation.",
            "Designed PostgreSQL schemas on Supabase and implemented dynamic math typesetting via local KaTeX bundler imports, optimizing render latency to 0ms."
        ],
        github: "https://github.com/ShivamJNU/CodeRudra",
        live: "https://coderudra.vercel.app"
    },
    {
        title: "AlgoSimulator",
        tags: ["Node.js", "JavaScript", "CSS", "HTML", "Bootstrap"],
        category: "Web Apps",
        description: "A responsive graph algorithm visualizer to simulate paths and execution flow in real-time.",
        bullets: [
            "Designed and integrated path-finding algorithms such as BFS, DFS, Dijkstra's, and A*.",
            "Features real-time grid simulation using an interactive maze generator to increase user engagement."
        ],
        github: "https://github.com/ShivamJNU/AlgoSimulator",
        live: "https://algosimulator.onrender.com/"
    },
    {
        title: "TheFoodApp",
        tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
        category: "Web Apps",
        description: "A full-featured restaurant management system built with robust RESTful routing.",
        bullets: [
            "Implemented MVC Architecture for scalable, secure, and clean codebases.",
            "Integrated MongoDB for CRUD operations and efficient data modeling, resulting in a reduction in response times."
        ],
        github: "https://github.com/ShivamJNU/TheFoodApp",
        live: ""
    },
    {
        title: "MetroPathFinder",
        tags: ["C++", "Dijkstra's Algorithm", "Command Line"],
        category: "C++/Systems",
        description: "A high-performance C++ backend solver designed for public transit routes.",
        bullets: [
            "Determines the shortest path between any two of the 240+ Delhi Metro stations across 8 Metro lines.",
            "Calculates paths based on the Minimum Commute Time using Dijkstra's shortest path algorithm."
        ],
        github: "https://github.com/ShivamJNU/MetroPathFinder",
        live: ""
    }
];

export default function Projects() {
    const [projectFilter, setProjectFilter] = useState("All");

    const filteredProjects = projectFilter === "All"
        ? projects
        : projects.filter(p => p.category === projectFilter);

    return (
        <section id="projects" className="border-t border-brandBorder bg-black/10 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white mb-2">Projects</h2>
                        <p className="text-gray-400 text-sm">A display of key engineering solutions.</p>
                    </div>
                    {/* Filter Buttons */}
                    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-brandBorder self-start">
                        {["All", "Web Apps", "C++/Systems"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setProjectFilter(filter)}
                                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                                    projectFilter === filter
                                        ? "bg-brandPurple text-white"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {filteredProjects.map((project, i) => (
                        <div key={i} className="glass-effect glass-effect-hover p-6 rounded-xl flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-extrabold tracking-wider uppercase bg-brandPurple/20 border border-brandPurple/30 text-purple-300 px-2 py-0.5 rounded">
                                        {project.category}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        )}
                                        {project.live && project.live !== "#" && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg">
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                
                                <ul className="space-y-2 mb-6">
                                    {project.bullets.map((b, idx) => (
                                        <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                                            <span className="text-brandCyan">•</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brandBorder">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-white/5 text-gray-400 text-[10px] px-2 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
