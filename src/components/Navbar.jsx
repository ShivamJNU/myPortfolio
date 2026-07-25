import React from 'react';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-brandBg/80 backdrop-blur-md border-b border-brandBorder">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-xl font-extrabold text-white">
                    <div className="w-8 h-8 bg-gradient-to-br from-brandCyan to-brandPurple rounded-lg flex items-center justify-center shadow-lg shadow-brandCyan/20">
                        <i className="fa-solid fa-code text-sm"></i>
                    </div>
                    <span>Shivam<span className="bg-gradient-to-r from-brandCyan to-brandPurple bg-clip-text text-transparent">.dev</span></span>
                </a>
                
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#stats" className="hover:text-white transition-colors">CP Stats</a>
                    <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                    <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
                </nav>

                <a href="#console" className="bg-gradient-to-r from-brandPurple to-brandPurple/80 hover:from-brandPurple/90 hover:to-brandPurple text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-brandPurple/20 transition-all hover:-translate-y-[1px] active:translate-y-0">
                    Let's Talk
                </a>
            </div>
        </header>
    );
}
