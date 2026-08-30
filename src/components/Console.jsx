import React, { useState, useEffect, useRef } from 'react';

// ==========================================================================
// Resume Knowledge Base (RAG Passages)
// ==========================================================================
const resumePassages = [
    { 
        text: "I completed my Bachelor of Technology (B.Tech) in Electronics and Communication at the School Of Engineering, Jawaharlal Nehru University (JNU), New Delhi (Dec 2021 - May 2025), graduating with a GPA of 7.89/10.", 
        tags: ["education", "jnu", "gpa", "btech", "electronics", "communication", "jawaharlal", "nehru", "university", "delhi", "college", "study", "studied", "graduated", "degree"] 
    },
    { 
        text: "I attended Holy Cross School for Class XII (PCM) under the Indian Certificate of Secondary Education (ICSE), graduating in May 2021 with a score of 95.20%.", 
        tags: ["education", "school", "pcm", "icse", "percentage", "hcs", "class", "12", "twelfth", "marks", "grade", "board"] 
    },
    { 
        text: "Currently, I work as a Software Development Engineer (SDE) at Upgrad (Jun 2025 - Present), working with C++, JavaScript, Node.js, Express.js, MySQL, and MongoDB.", 
        tags: ["experience", "job", "work", "upgrad", "sde", "role", "position", "current", "present", "now", "company"] 
    },
    { 
        text: "At Upgrad, I implemented backend admin scripts and developed model/solution logic for over 500+ problems, supporting evaluation across multiple valid solution paths and powering automated assessment workflows.", 
        tags: ["experience", "upgrad", "problems", "scripts", "backend", "logic", "assessment", "workflows", "database", "admin"] 
    },
    { 
        text: "At Upgrad, I built over 100+ coding AI questions, mapping responses to expected outputs via solution keywords.", 
        tags: ["experience", "upgrad", "ai", "questions", "coding", "keywords", "outputs", "llm", "model"] 
    },
    { 
        text: "At Upgrad, I designed and built secure authentication and authorization APIs for the Rishiverse platform, supporting core backend workflows.", 
        tags: ["experience", "upgrad", "auth", "security", "api", "rishiverse", "backend", "jwt", "login"] 
    },
    { 
        text: "I worked as a Software Engineer Intern at Newton School (Feb 2025 - May 2025), utilizing Java, Spring Boot, MySQL, and Hibernate.", 
        tags: ["experience", "job", "work", "newton", "school", "intern", "role", "position", "technologies", "java", "spring", "boot", "hibernate"] 
    },
    { 
        text: "At Newton School, I developed the backend component of a wealth management platform using Java and Spring Boot, and built microservices for KYC verification, client onboarding, registration, and profile management.", 
        tags: ["experience", "newton", "school", "wealth", "management", "platform", "java", "spring", "boot", "microservices", "kyc", "verification", "onboarding", "registration"] 
    },
    { 
        text: "At Newton School, I designed secure authentication mechanisms with Spring Security (JWT/OAuth2) and implemented Role-Based Access Control (RBAC) utilizing MySQL database and Hibernate.", 
        tags: ["experience", "newton", "school", "auth", "security", "jwt", "oauth", "rbac", "spring", "mysql", "hibernate"] 
    },
    { 
        text: "I am a 2x ICPC Regionalist, qualifying for the Kanpur and Amritapuri onsite regionals in ICPC Asia West 2024. My credentials can be verified at icpc.global/ICPCID/NE7Z1YLO2BN4.", 
        tags: ["icpc", "regionalist", "kanpur", "amritapuri", "asia", "west", "credentials", "id", "profile", "link", "contest", "competitive"] 
    },
    { 
        text: "I qualified for the IICPC 2024 regionals hosted at the IIT Bombay campus, ranking 306th (AIR 306).", 
        tags: ["iicpc", "bombay", "iit", "air", "rank", "ranking", "306", "regional", "contest"] 
    },
    { 
        text: "I have a maximum rating of 1526 on Codeforces (Specialist tier) under the handle ShivamJNU.", 
        tags: ["codeforces", "specialist", "rating", "rank", "handle", "shivamjnu", "max", "profile"] 
    },
    { 
        text: "I am a Knight on LeetCode, ranking in the top 5% of participants globally with over 500+ solved problems (handle shivamprataphcs).", 
        tags: ["leetcode", "knight", "rank", "problems", "solved", "percentage", "global", "dsa", "contest", "handle"] 
    },
    { 
        text: "I am a 4 Star coder on CodeChef with a maximum rating of 1915.", 
        tags: ["codechef", "star", "rating", "max", "1915", "division", "profile"] 
    },
    { 
        text: "I qualified the national GATE Computer Science exam in 2024, conducted by the Indian Institute of Science (IISc), Bengaluru.", 
        tags: ["gate", "cs", "exam", "qualified", "iisc", "bengaluru", "science", "institute", "gatecs"] 
    },
    { 
        text: "I have solved over 1000+ data structures and algorithmic problems across Codeforces, LeetCode, and CodeChef.", 
        tags: ["problems", "solved", "dsa", "leetcode", "codeforces", "codechef", "total", "practice", "questions"] 
    },
    { 
        text: "I built AlgoSimulator, a responsive graph algorithm visualizer web app using Node.js, JavaScript, CSS, HTML, and Bootstrap, simulating BFS, DFS, Dijkstra's, and A* with an interactive maze generator.", 
        tags: ["projects", "algosimulator", "graph", "visualizer", "algorithms", "bfs", "dfs", "dijkstra", "astar", "maze", "web", "app"] 
    },
    { 
        text: "I built TheFoodApp, a restaurant management system with RESTful APIs, JWT authentication, bcrypt, and MongoDB/Mongoose utilizing MVC architecture.", 
        tags: ["projects", "thefoodapp", "restaurant", "food", "management", "mongodb", "mvc", "api", "auth", "jwt", "bcrypt"] 
    },
    { 
        text: "I built MetroPathFinder, a C++ program implementing Dijkstra's algorithm to determine the shortest path between 240+ Delhi Metro stations across 8 lines.", 
        tags: ["projects", "metropathfinder", "cpp", "metro", "path", "finder", "shortest", "dijkstra", "delhi", "stations"] 
    },
    { 
        text: "I served as a DSA Contests Problem Setter at JNU, designing and conducting contests at The Placement Cell to assess candidates' Data Structures and Algorithms knowledge.", 
        tags: ["responsibility", "problem", "setter", "placement", "cell", "jnu", "contests", "dsa", "set", "setted"] 
    }
];

const stopWords = new Set(["a", "an", "the", "and", "or", "in", "on", "at", "for", "to", "of", "with", "is", "are", "about", "your", "my", "me", "you", "tell", "what", "where", "how", "who", "show", "give", "know", "any", "some"]);

// ==========================================================================
// Console Component
// ==========================================================================
export default function Console() {
    const [consoleOutput, setConsoleOutput] = useState([
        { text: "AetherAI Core v1.0.0 (Local Resume Agent) initialized.", type: "system" },
        { text: "Type any question in the prompt below, or click a quick query shortcut.", type: "system" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const consoleEndRef = useRef(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (consoleEndRef.current) {
            consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [consoleOutput]);

    // Match Query & Synthesize Answer
    const runResumeQuery = (queryText) => {
        setIsTyping(true);

        // Prepend user input command immediately
        setConsoleOutput(prev => [
            ...prev,
            { text: `user@shivam.dev:~$ query-ai --prompt "${queryText}"`, type: "user" }
        ]);

        // Simulate small thinking lag
        setTimeout(() => {
            const normalizedQuery = queryText.toLowerCase();
            const queryWords = normalizedQuery
                .split(/\s+/)
                .map(w => w.replace(/[^a-z0-9]/g, ""))
                .filter(w => w.length > 0 && !stopWords.has(w));

            if (queryWords.length === 0) {
                setConsoleOutput(prev => [
                    ...prev,
                    { text: "AetherAI: Please enter a query containing core keywords (e.g., 'JNU', 'Upgrad', 'Codeforces', 'Projects').", type: "response" }
                ]);
                setIsTyping(false);
                return;
            }

            // Identify if the query is targeting specific platforms/brands
            const platformBrands = ["leetcode", "codeforces", "codechef", "icpc", "iicpc", "newton", "upgrad", "gate", "jnu"];
            const queryTargetBrands = queryWords.filter(word => platformBrands.includes(word));

            // Passage scoring based on keyword intersection and brand exclusivity
            const scored = resumePassages.map(p => {
                // If query targets specific brands, exclude passages associated with other brands
                const passageBrands = p.tags.filter(tag => platformBrands.includes(tag));
                const hasMismatchBrand = passageBrands.some(pb => 
                    queryTargetBrands.length > 0 && !queryTargetBrands.includes(pb)
                );

                if (hasMismatchBrand) {
                    return { passage: p, score: 0 };
                }

                let score = 0;
                queryWords.forEach(word => {
                    // Tag matches have a high weight
                    if (p.tags.includes(word)) {
                        score += 4;
                    }
                    // Substring match in passage text
                    if (p.text.toLowerCase().includes(word)) {
                        score += 1.5;
                    }
                });
                return { passage: p, score: score };
            }).filter(item => item.score > 0);

            // Sort by highest score descending
            scored.sort((a, b) => b.score - a.score);

            let answerText = "";
            if (scored.length > 0) {
                // Get all matches that score within 40% of the top matching score to ensure relevancy
                const maxScore = scored[0].score;
                const relevantMatches = scored
                    .filter(item => item.score >= maxScore * 0.4)
                    .map(item => item.passage.text);

                answerText = `AetherAI (Local Agent):\nBased on Shivam's resume context, here is what I found:\n\n• ${relevantMatches.join("\n\n• ")}`;
            } else {
                // Fallback smart response summary
                answerText = `AetherAI (Local Agent):\nI couldn't find a direct keyword match for that on Shivam's resume.\n\nHowever, Shivam is a B.Tech graduate from JNU currently working as a Software Development Engineer (SDE) at Upgrad. He is a Leetcode Knight, Codeforces Specialist, and 2x ICPC Regionalist. He is skilled in C++, Java, Node.js, and Spring Boot.\n\nTry asking: 'Tell me about Upgrad', 'Where did you study?', or 'What projects have you built?'.`;
            }

            setConsoleOutput(prev => [
                ...prev,
                { text: answerText, type: "response" }
            ]);
            setIsTyping(false);
        }, 800);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isTyping) return;
        runResumeQuery(inputValue);
        setInputValue("");
    };

    const clearConsole = () => {
        setConsoleOutput([
            { text: "Console buffer cleared. Ready for new query prompts.", type: "system" }
        ]);
    };

    const quickQueries = [
        "Tell me about Upgrad",
        "What is your Leetcode rank?",
        "What are your projects?",
        "Where did you study?"
    ];

    return (
        <section id="console" className="border-t border-brandBorder py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white mb-3">Let's Connect</h2>
                    <p className="text-gray-400 text-sm">Ask my local AI resume assistant a question or reach out to me directly.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {/* Left: Terminal / AI Console */}
                    <div className="md:col-span-2 bg-[#0b0f19] border border-brandBorder rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[420px]">
                        {/* Title bar */}
                        <div className="bg-[#111827] px-4 py-3 flex items-center justify-between border-b border-brandBorder">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">shivam@rag-ai-service:~</span>
                            <button onClick={clearConsole} className="text-gray-500 hover:text-gray-300 text-xs font-mono">
                                clear
                            </button>
                        </div>

                        {/* Console log outputs */}
                        <div className="flex-grow p-5 overflow-y-auto font-mono text-sm space-y-4">
                            {consoleOutput.map((log, index) => (
                                <div key={index} className="leading-relaxed whitespace-pre-wrap">
                                    {log.type === "system" && (
                                        <span className="text-gray-500 font-normal">{log.text}</span>
                                    )}
                                    {log.type === "user" && (
                                        <span className="text-brandCyan font-semibold">{log.text}</span>
                                    )}
                                    {log.type === "response" && (
                                        <span className="text-gray-300 block pl-4 mt-1 border-l-2 border-brandPurple/40">{log.text}</span>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="text-brandPurple font-mono text-sm animate-pulse">
                                    &gt; AI is scanning resume indexing context...
                                </div>
                            )}
                            <div ref={consoleEndRef}></div>
                        </div>

                        {/* Custom input bar */}
                        <form onSubmit={handleFormSubmit} className="bg-[#111827] border-t border-brandBorder p-3 flex items-center gap-2">
                            <span className="text-brandCyan font-mono text-sm pl-1">~$</span>
                            <input 
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                disabled={isTyping}
                                placeholder="Ask the AI about Shivam's resume (e.g., 'ICPC regionals' or 'databases')..."
                                className="flex-grow bg-transparent border-none outline-none text-gray-200 font-mono text-sm placeholder-gray-600 disabled:opacity-50"
                            />
                            <button 
                                type="submit" 
                                disabled={isTyping || !inputValue.trim()}
                                className="bg-brandPurple/15 hover:bg-brandPurple/30 text-purple-300 hover:text-white border border-brandPurple/40 font-mono text-xs font-bold px-4 py-1.5 rounded-lg transition-all disabled:opacity-30 disabled:pointer-events-none"
                            >
                                Ask
                            </button>
                        </form>

                        {/* Quick Queries shortcuts bar */}
                        <div className="bg-[#0b0f19] border-t border-brandBorder p-3 flex flex-wrap gap-2">
                            {quickQueries.map((q, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => !isTyping && runResumeQuery(q)}
                                    disabled={isTyping}
                                    className="bg-white/5 border border-brandBorder text-gray-400 hover:text-white hover:bg-white/10 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all font-mono disabled:opacity-30 disabled:pointer-events-none"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact details card */}
                    <div className="glass-effect p-6 rounded-2xl border border-brandBorder shadow-2xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-extrabold text-white mb-4">Direct Contact</h3>
                            <p className="text-gray-400 text-xs leading-relaxed mb-6">
                                I am open to SDE roles, backend engineering opportunities, and algorithm design collaborations. Reach out via any of my channels:
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:shivamprataphcs@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-brandBorder hover:border-brandCyan/40 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-9 h-9 rounded-lg bg-brandCyan/10 flex items-center justify-center text-brandCyan flex-shrink-0">
                                        <i className="fa-solid fa-envelope text-sm"></i>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">Email</p>
                                        <p className="text-white text-xs font-semibold font-mono truncate">shivamprataphcs@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://linkedin.com/in/shivam-pratap-srivastava" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-brandBorder hover:border-brandPurple/40 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-9 h-9 rounded-lg bg-brandPurple/10 flex items-center justify-center text-brandPurple flex-shrink-0">
                                        <i className="fa-brands fa-linkedin text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">LinkedIn</p>
                                        <p className="text-white text-xs font-semibold">shivam-pratap-srivastava</p>
                                    </div>
                                </a>

                                <a href="https://github.com/ShivamJNU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-brandBorder hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                                        <i className="fa-brands fa-github text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">GitHub</p>
                                        <p className="text-white text-xs font-semibold">ShivamJNU</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-brandBorder text-center">
                            <p className="text-[10px] text-gray-500 flex items-center justify-center gap-1.5">
                                <i className="fa-solid fa-location-dot text-brandCyan"></i> New Delhi, India 🇮🇳
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
