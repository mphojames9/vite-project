// src/WhatIDoBest.jsx
import React, { useEffect, useRef, useState } from "react";
import {
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaCloud,
    FaCheckCircle,
    FaFileAlt
} from "react-icons/fa";

export default function WhatIDoBest() {
    const listRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const items = listRef.current.querySelectorAll("li");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const item = entry.target;
                    if (entry.isIntersecting) {
                        item.classList.add("fade-slide-in");
                    }
                });
            },
            { threshold: 0.25 }
        );

        items.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    const skills = [
        { name: "JavaScript (ES6+)", desc: "Modern JavaScript for web applications", icon: <FaJs color="#F7DF1E" size={28} /> },
        { name: "React & modern frontend tooling", desc: "Component-based UI & modern build tools", icon: <FaReact color="#61DAFB" size={28} /> },
        { name: "Node.js & Python", desc: "Backend services & scripting", icon: <FaNodeJs color="#339933" size={28} /> },
        { name: "REST APIs", desc: "Building and consuming HTTP APIs", icon: <FaPython color="#3776AB" size={28} /> },
        { name: "Cloud deployment (Render, GitHub, CI/CD)", desc: "Deploy scalable apps to the cloud", icon: <FaCloud color="#0078D4" size={28} /> },
        { name: "Browser-based utilities & file handling", desc: "Web apps that manipulate files client-side", icon: <FaFileAlt color="#FF9800" size={28} /> },
    ];

    const productFocusItems = [
        "Feature planning & technical architecture",
        "Performance optimization",
        "Accessibility & usability",
        "Real-world problem solving",
    ];

    return (
        <section id="what-i-do" style={{ padding: "60px 20px" }}>
            <div className="wrap">
                <div className="card" style={{
                    padding: "40px 30px",
                    margin: "0 auto",
                    maxWidth: "900px",
                    borderRadius: "20px",
                }}>
                    <span className="eyebrow" style={{ marginBottom: "20px" }}>
                        WHAT I DO BEST
                    </span>

                    <h2 style={{ marginBottom: "24px", fontSize: "42px", lineHeight: 1.2 }}>
                        Full-Stack Engineering
                    </h2>

                    <p className="lead" style={{ marginBottom: "32px", fontSize: "18px", lineHeight: 1.6 }}>
                        I build complete web applications from idea to deployment, with a strong focus on performance and maintainability.
                    </p>

                    <ul className="skills-list" ref={listRef} style={{ listStyle: "none", paddingLeft: 0 }}>
                        {skills.map((skill, idx) => (
                            <li key={idx}>
                                {skill.icon}
                                <div className="skill-text">
                                    <strong>{skill.name}</strong>
                                    <span>{skill.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* READ MORE BUTTON */}
                    <button
                        className="read-more-btn"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        {open ? "Show less" : "Read more"}
                    </button>

                    {/* EXPANDABLE CONTENT */}
                    <div className={`read-more ${open ? "open" : ""}`}>
                        <h3>Product-Focused Development</h3>
                        <p>
                            I don’t just write code. I think in terms of users, edge cases, and long-term sustainability.
                        </p>
                        <ul className="focus-list">
                            {productFocusItems.map((item, i) => (
                                <li key={i}>
                                    <FaCheckCircle size={16} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3>Digital Inclusion & Free Tools</h3>
                        <p>
                            A big part of my work is building free-to-use tools that lower the barrier to essential
                            office and productivity software especially for users in emerging markets.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        .skills-list li {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(40px) scale(0.95);
        }

        .fade-slide-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
          transition: all 0.8s cubic-bezier(.2,.9,.2,1);
        }

        .skill-text {
          display: flex;
          flex-direction: column;
        }

        .skill-text strong {
          font-size: 16px;
          margin-bottom: 4px;
        }

        .skill-text span {
          font-size: 15px;
          color: var(--muted, #555);
        }

        .read-more-btn {
          margin-top: 16px;
          background: transparent;
          border: 1px solid var(--accent, #000);
          padding: 10px 18px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
          color: #8d7c7c;
        }

        .read-more-btn:hover {
          background: var(--accent, #000);
          color: #fff;
        }

        .read-more {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.5s ease;
          margin-top: 20px;
        }

        .read-more.open {
          max-height: 500px;
          opacity: 1;
          transform: translateY(0);
        }

        .read-more h3 {
          margin-top: 20px;
          margin-bottom: 8px;
          font-size: 18px;
        }

        .read-more ul {
          padding-left: 18px;
          margin-bottom: 12px;
        }

        .read-more li {
          margin-bottom: 6px;
        }

        @media (max-width: 768px) {
          h2 { font-size: 32px; }
          .lead { font-size: 16px; }
        }

                .focus-list {
          list-style: none;
          padding: 0;
        }

        .focus-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

         .focus-list svg {
          color: #16a34a;
          flex-shrink: 0;
        }
      `}</style>
        </section>
    );
}
