import React from 'react';

const skills = {
    languages: ["C/C++", "Python", "HTML/CSS", "JavaScript", "TypeScript", "Java"],
    frameworks: ["TailwindCSS", "React.js", "Next.js", "Node.js", "Nest.js", "Express.js", "Spring Boot"],
    databases: ["PostgreSQL", "Supabase (Prisma)", "MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Vercel", "Render", "Google Cloud Console", "Linux", "VS Code", "IntelliJ IDEA"]
};

export default function Skills() {
    return (
        <section id="skills" className="border-t border-brandBorder py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white mb-3">Skills & Toolkit</h2>
                    <p className="text-gray-400 text-sm">Programming languages, frameworks, databases, and developer environments.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-effect p-6 rounded-xl">
                        <h3 className="font-bold text-brandCyan text-sm mb-4 uppercase tracking-wider"><i className="fa-solid fa-code mr-2"></i> Languages & Frameworks</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {[...skills.languages, ...skills.frameworks].map((skill, idx) => (
                                <span key={idx} className="bg-brandPurple/10 border border-brandPurple/20 text-purple-200 text-sm px-3.5 py-1.5 rounded-lg font-medium transition-colors hover:bg-brandPurple/20">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="glass-effect p-6 rounded-xl">
                            <h3 className="font-bold text-brandCyan text-sm mb-4 uppercase tracking-wider"><i className="fa-solid fa-database mr-2"></i> Databases</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {skills.databases.map((skill, idx) => (
                                    <span key={idx} className="bg-brandCyan/10 border border-brandCyan/20 text-cyan-200 text-sm px-3.5 py-1.5 rounded-lg font-medium transition-colors hover:bg-brandCyan/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="glass-effect p-6 rounded-xl">
                            <h3 className="font-bold text-brandCyan text-sm mb-4 uppercase tracking-wider"><i className="fa-solid fa-screwdriver-wrench mr-2"></i> Developer Tools</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {skills.tools.map((skill, idx) => (
                                    <span key={idx} className="bg-white/5 border border-brandBorder text-gray-300 text-sm px-3.5 py-1.5 rounded-lg font-medium transition-colors hover:bg-white/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
