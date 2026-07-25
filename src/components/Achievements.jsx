import React from 'react';

const achievements = [
    { 
        title: "2x ICPC Regionalist", 
        desc: "Qualified for the Kanpur and Amritapuri onsite regionals in ICPC Asia West 2024.",
        logo: "/icpc_logo.png"
    },
    { 
        title: "AIR 306 @ IICPC 2024", 
        desc: "Qualified for and participated in the IICPC regionals hosted at the IIT Bombay campus.",
        logo: "https://codefest.iicpc.com/IICPC2.png"
    },
    { 
        title: "4 Star @ CodeChef", 
        desc: "Achieved maximum rating of 1915 on CodeChef, placing in the top division coders.",
        logo: "https://cdn.simpleicons.org/codechef/5B4638"
    },
    { 
        title: "Knight @ LeetCode", 
        desc: "Ranked among the top 5% of global contest participants with 500+ solved DSA problems.",
        logo: "https://cdn.simpleicons.org/leetcode/FFA116"
    },
    { 
        title: "Codeforces Specialist", 
        desc: "Reached a peak rating of 1526, solving complex mathematical and logical algorithms.",
        logo: "https://cdn.simpleicons.org/codeforces/1F8ACB"
    },
    { 
        title: "1000+ Problems Solved", 
        desc: "Solved over 1000+ data structures and algorithmic problems across major coding platforms.",
        logo: "/dsa_logo.png"
    },
    { 
        title: "GATE CS 2024 Qualified", 
        desc: "Successfully qualified the national engineering exam conducted by the IISc Bengaluru.",
        logo: "https://contentstatic.techgig.com/thumb/msid-104428796,width-800,height-600,resizemode-4/104428796.jpg"
    },
    { 
        title: "Amazon ML Summer School", 
        desc: "Selected for the machine learning Summer Mentorship program run by Amazon.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="border-t border-brandBorder bg-black/10 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white mb-3">Key Achievements</h2>
                    <p className="text-gray-400 text-sm">Competitive programming benchmarks, national exams, and programming milestones.</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((ach, idx) => (
                        <div key={idx} className="glass-effect p-6 rounded-xl border-l-4 border-l-brandCyan hover:border-l-brandPurple transition-colors duration-300 flex flex-col justify-between">
                            <div>
                                <div className="flex items-start justify-between mb-4 gap-3">
                                    <h3 className="text-white font-bold text-base leading-snug">{ach.title}</h3>
                                    {ach.logo && (
                                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1.5 flex-shrink-0 shadow-md">
                                            <img src={ach.logo} alt="" className="w-full h-full object-contain" />
                                        </div>
                                    )}
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed">{ach.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
