import React from 'react';

const experiences = [
    {
        role: "Software Development Engineer",
        company: "Upgrad",
        period: "Jun 2025 – Present",
        location: "Delhi NCR, India",
        tech: ["C++", "Javascript", "Node.js", "Express.js", "MySQL", "MongoDB"],
        bullets: [
            "Implemented backend admin scripts for 500+ problems, supporting evaluation across multiple valid solution paths.",
            "Developed model and admin solution logic for 500+ coding problems to power automated assessment workflows.",
            "Built 100+ coding AI questions, mapping responses to expected outputs via solution keywords.",
            "Built secure authentication and authorization APIs for the Rishiverse platform, supporting core backend workflows."
        ]
    },
    {
        role: "Software Engineer Intern",
        company: "Newton School",
        period: "Feb 2025 – May 2025",
        location: "Pune, India",
        tech: ["Java", "Spring Boot", "MySQL", "Hibernate", "JWT/OAuth2"],
        bullets: [
            "Developed the backend component of a wealth management platform using Java and Spring Boot.",
            "Built microservices for KYC verification, client onboarding, registration, and profile management in Java.",
            "Designed secure authentication mechanisms with Spring Security (JWT/OAuth2) and implemented RBAC.",
            "Utilised MySQL database and Hibernate for storing client details, KYC data, and audit logs."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="border-t border-brandBorder py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white mb-3">Work Experience</h2>
                    <p className="text-gray-400 text-sm">Professional software engineering positions.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="glass-effect p-8 rounded-xl relative flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <span className="text-xs font-semibold text-brandCyan bg-brandCyan/10 border border-brandCyan/20 px-2.5 py-1 rounded w-fit">
                                        {exp.period}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        <i className="fa-solid fa-location-dot mr-1"></i>{exp.location}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-sm font-semibold text-brandPurple mb-4">{exp.company}</h4>
                                
                                <ul className="list-none space-y-3 mb-6 text-sm text-gray-300">
                                    {exp.bullets.map((bullet, k) => (
                                        <li key={k} className="flex items-start gap-2.5">
                                            <i className="fa-solid fa-circle-check text-brandCyan mt-1 text-xs flex-shrink-0"></i>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-brandBorder">
                                {exp.tech.map((t, idxTech) => (
                                    <span key={idxTech} className="bg-white/5 border border-brandBorder text-gray-300 text-xs px-2.5 py-1 rounded">
                                        {t}
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
