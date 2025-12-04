import React, { useEffect, useRef } from "react";

export default function Hero() {
  const heroImage = useRef(null);

  useEffect(() => {
    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const root = document.documentElement;
        const cur = root.getAttribute("data-theme") || "dark";
        const next = cur === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
      });
    }

    // Intersection observer
    const observerOpts = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.5],
    };

    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting && entry.intersectionRatio > 0.08) {
          el.classList.add("visible");
          el.classList.remove("out");

          if (el.classList.contains("slide-left") || el.classList.contains("slide-right")) {
            el.classList.add("in");
            el.classList.remove("out");
          }

          const imgs = el.querySelectorAll(".img-inner, .img-animate, .parallax");
          imgs.forEach((img) => {
            img.classList.add("in");
            img.classList.remove("out");
          });
        } else {
          if (!entry.isIntersecting) {
            if (el.classList.contains("slide-left") || el.classList.contains("slide-right")) {
              el.classList.remove("in");
              el.classList.add("out");
            }

            el.classList.remove("visible");

            const imgs = el.querySelectorAll(".img-inner, .img-animate, .parallax");
            imgs.forEach((img) => {
              img.classList.remove("in");
              img.classList.add("out");
            });
          }
        }
      });
    }, observerOpts);

    document
      .querySelectorAll(
        ".reveal, .slide-left, .slide-right, .project, .hero-card, .testimonial, .plan, .blog, .faq-item"
      )
      .forEach((el) => slideObserver.observe(el));

    // Parallax mouse effect
    const onMouse = (e) => {
      if (heroImage.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 6;
        heroImage.current.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
      }
    };

    document.addEventListener("mousemove", onMouse);

    // FIXED: Correct cleanup
    return () => {
      document.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div>
        <div className="eyebrow">Available for hire — Remote & Contract</div>

        <h1>
          Hey, I’m{" "}
          <span
            style={{
              background: "linear-gradient(90deg,var(--accent1),var(--accent2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Your Name
          </span>
        </h1>

        <p className="lead">
          I design and build high-performance interfaces and delightful experiences. I focus on
          accessible, maintainable systems that scale.
        </p>

        <div className="cta-row">
          <a className="btn" href="#projects">
            See Work
          </a>
          <a className="ghost" href="#contact">
            Schedule a call
          </a>
        </div>

        <div className="skills reveal" id="skills">
          <div className="skill">
            <div className="ring" data-percent="92">
              <svg width="84" height="84">
                <defs>
                  <linearGradient id="gradA" x1="0" x2="1">
                    <stop offset="0%" stopColor="var(--accent1)" />
                    <stop offset="100%" stopColor="var(--accent2)" />
                  </linearGradient>
                </defs>
                <circle
                  cx="42"
                  cy="42"
                  r="36"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="42"
                  cy="42"
                  r="36"
                  stroke="url(#gradA)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="226"
                  strokeDashoffset="226"
                  fill="none"
                />
              </svg>
            </div>
            <div className="label">
              <div style={{ fontWeight: 700 }}>Frontend</div>
              <div style={{ color: "var(--muted)" }}>React • TypeScript</div>
            </div>
          </div>

          <div className="skill">
            <div className="ring" data-percent="86">
              <svg width="84" height="84">
                <defs>
                  <linearGradient id="gradB" x1="0" x2="1">
                    <stop offset="0%" stopColor="var(--accent2)" />
                    <stop offset="100%" stopColor="var(--accent3)" />
                  </linearGradient>
                </defs>
                <circle
                  cx="42"
                  cy="42"
                  r="36"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="42"
                  cy="42"
                  r="36"
                  stroke="url(#gradB)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="226"
                  strokeDashoffset="226"
                  fill="none"
                />
              </svg>
            </div>
            <div className="label">
              <div style={{ fontWeight: 700 }}>Design</div>
              <div style={{ color: "var(--muted)" }}>Figma • Systems</div>
            </div>
          </div>
        </div>

        <div className="socials">
          <a href="#" title="Github" style={{ color: "var(--muted)", textDecoration: "none" }}>
            GitHub
          </a>
          <a href="#" title="LinkedIn" style={{ color: "var(--muted)", textDecoration: "none" }}>
            LinkedIn
          </a>
          <a href="#" title="Dribbble" style={{ color: "var(--muted)", textDecoration: "none" }}>
            Dribbble
          </a>
        </div>
      </div>

      <aside className="hero-card">
        <div
          ref={heroImage}
          className="hero-image parallax img-animate"
          id="heroImage"
        >
          <div className="meta-pill">
            <strong>Featured:</strong> Analytics Dashboard — Product & Frontend
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <div>
            <div style={{ fontWeight: 800 }}>Featured Case Study</div>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>
              Fintech dashboard • 3 months
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>$12k+</div>
            <div style={{ color: "var(--muted)", fontSize: 12 }}>
              Avg. engagement
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
