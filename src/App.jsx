import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CPStats from './components/CPStats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Console from './components/Console';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brandBg text-gray-100 selection:bg-brandPurple/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CPStats />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Console />
      </main>
      
      {/* Footer */}
      <footer className="bg-black/40 border-t border-brandBorder py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; 2026 Shivam Srivastava. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="mailto:shivamprataphcs@gmail.com" className="hover:text-white"><i className="fa-solid fa-envelope mr-1"></i> Email</a>
            <a href="https://linkedin.com/in/shivam-pratap-srivastava" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fa-brands fa-linkedin mr-1"></i> LinkedIn</a>
            <a href="https://github.com/ShivamJNU" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fa-brands fa-github mr-1"></i> GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
