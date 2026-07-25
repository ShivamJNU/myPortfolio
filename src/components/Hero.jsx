import React from 'react';

export default function Hero() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-2 bg-brandPurple/10 border border-brandPurple/30 text-purple-300 px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
                    <i className="fa-solid fa-code-commit animate-pulse"></i> Now Open to Opportunities
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                    Hi, I'm <span className="bg-gradient-to-r from-brandCyan via-brandPurple to-brandPink bg-clip-text text-transparent">Shivam Srivastava</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-gray-300 mb-4">Software Development Engineer</h2>
                <p className="text-gray-400 mb-8 leading-relaxed max-w-lg font-normal">
                    Engineering graduate currently working as a Software Development Engineer. 2x ICPC Regionalist and passionate about designing scalable, high-performance backends, writing secure APIs, and building interactive, algorithm-driven applications.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                    <a href="#projects" className="bg-brandPurple hover:bg-brandPurple/90 text-white font-semibold px-6 py-3 rounded-lg text-sm flex items-center gap-2 shadow-lg shadow-brandPurple/30 transition-all hover:-translate-y-0.5">
                        View Projects <i className="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <a href="https://linkedin.com/in/shivam-pratap-srivastava" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-brandBorder text-white font-semibold px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5">
                        <i className="fa-brands fa-linkedin text-base"></i> LinkedIn
                    </a>
                    <a href="https://github.com/ShivamJNU" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-brandBorder text-white font-semibold px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5">
                        <i className="fa-brands fa-github text-base"></i> GitHub
                    </a>
                </div>
            </div>

            <div className="relative flex justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-effect p-2 shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brandCyan/20 to-brandPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img src="/shivam.png" alt="Shivam Srivastava" className="w-full h-full object-cover rounded-xl border border-white/5" />
                </div>
            </div>
        </section>
    );
}
