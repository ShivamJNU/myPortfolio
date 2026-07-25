import React from 'react';

const cpStats = [
    { 
        name: "Codeforces", 
        role: "Specialist", 
        rating: "1526 max", 
        logo: "https://cdn.simpleicons.org/codeforces/1F8ACB", 
        link: "https://codeforces.com/profile/ShivamJNU" 
    },
    { 
        name: "LeetCode", 
        role: "Knight", 
        rating: "Top 5% globally", 
        logo: "https://cdn.simpleicons.org/leetcode/FFA116", 
        link: "https://leetcode.com/u/shivamprataphcs/" 
    },
    { 
        name: "CodeChef", 
        role: "4 Star", 
        rating: "1915 max", 
        logo: "https://cdn.simpleicons.org/codechef/5B4638", 
        link: "https://www.codechef.com/users/shivam_jnu" 
    },
    { 
        name: "ICPC", 
        role: "2x Regionalist", 
        rating: "Kanpur & Amritapuri", 
        logo: "/icpc_logo.png", 
        link: "https://icpc.global/ICPCID/NE7Z1YLO2BN4" 
    }
];

export default function CPStats() {
    return (
        <section id="stats" className="border-t border-brandBorder bg-black/10 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white mb-3">Competitive Programming</h2>
                    <p className="text-gray-400 text-sm">Strong algorithms foundation and problem solving background.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {cpStats.map((stat, i) => (
                        <a key={i} href={stat.link} target="_blank" rel="noopener noreferrer" className="glass-effect glass-effect-hover p-6 rounded-xl flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 p-2 shadow-lg shadow-black/20">
                                <img src={stat.logo} alt={stat.name} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-extrabold text-white text-lg">{stat.name}</h3>
                            <p className="text-brandCyan font-semibold text-sm mb-1">{stat.role}</p>
                            <p className="text-gray-400 text-xs">{stat.rating}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
