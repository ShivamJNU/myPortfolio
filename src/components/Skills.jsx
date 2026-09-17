import React from 'react';

const skills = {
    technologies: [
        "C/C++", "Python", "HTML/CSS", "TailwindCSS", "JavaScript", "TypeScript",
        "React.js", "Next.js", "Node.js", "Nest.js", "Express.js", "Java",
        "Spring Boot", "AWS", "AI Engineering", "Agentic AI", "AI Automation"
    ],
    aiMl: [
        "Generative AI", "Large Language Models (LLMs)", "Prompt Engineering",
        "Machine Learning", "Google AI Studio"
    ],
    databases: [
        "PostgreSQL", "Supabase (Prisma)", "MongoDB", "MySQL"
    ],
    tools: [
        "Git", "GitHub", "Vercel", "Render", "Google Cloud Console",
        "Google AI Studio", "Linux", "VS Code", "IntelliJ IDEA"
    ]
};

export default function Skills() {
    return (
        <section id="skills" className="border-t border-brandBorder py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white mb-3">Skills & Toolkit</h2>
                    <p className="text-gray-400 text-sm">Comprehensive stack spanning core technologies, AI/ML engineering, databases, and developer environments.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Technologies & Frameworks */}
                    <div className="glass-effect p-6 rounded-xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-brandPurple text-sm uppercase tracking-wider flex items-center gap-2">
                                    <i className="fa-solid fa-code text-brandPurple"></i> Technologies & Frameworks
                                </h3>
                                <span className="text-xs text-gray-500 font-mono">{skills.technologies.length} skills</span>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {skills.technologies.map((skill, idx) => (
                                    <span key={idx} className="bg-brandPurple/10 border border-brandPurple/20 text-purple-200 text-sm px-3.5 py-1.5 rounded-lg font-medium transition-colors hover:bg-brandPurple/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* AI / ML, Databases, Developer Tools */}
                    <div className="flex flex-col gap-6">
                        {/* AI / ML */}
                        <div className="glass-effect p-6 rounded-xl border border-brandPink/30 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brandPink/10 rounded-full blur-2xl pointer-events-none"></div>
                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <h3 className="font-bold text-brandPink text-sm uppercase tracking-wider flex items-center gap-2">
                                    <i className="fa-solid fa-wand-magic-sparkles text-brandPink"></i> AI / ML & Agentic Systems
                                </h3>
                                <span className="text-xs bg-brandPink/20 border border-brandPink/30 text-pink-300 px-2.5 py-0.5 rounded-full font-medium">Specialized</span>
                            </div>
                            <div className="flex flex-wrap gap-2.5 relative z-10">
                                {skills.aiMl.map((skill, idx) => (
                                    <span key={idx} className="bg-brandPink/10 border border-brandPink/20 text-pink-200 text-sm px-3.5 py-1.5 rounded-lg font-medium transition-colors hover:bg-brandPink/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="glass-effect p-6 rounded-xl">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-brandCyan text-sm uppercase tracking-wider flex items-center gap-2">
                                    <i className="fa-solid fa-database text-brandCyan"></i> Databases
                                </h3>
                                <span className="text-xs text-gray-500 font-mono">{skills.databases.length} databases</span>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {skills.databases.map((skill, idx) => (
                                    <span key={idx} className="bg-brandCyan/10 border border-brandCyan/20 text-cyan-200 text-sm px-3.5 py-1.5 rounded-lg font-medium transition-colors hover:bg-brandCyan/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Developer Tools */}
                        <div className="glass-effect p-6 rounded-xl">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-300 text-sm uppercase tracking-wider flex items-center gap-2">
                                    <i className="fa-solid fa-screwdriver-wrench text-brandCyan"></i> Developer Tools & Cloud
                                </h3>
                                <span className="text-xs text-gray-500 font-mono">{skills.tools.length} tools</span>
                            </div>
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
