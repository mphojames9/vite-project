import React, { useEffect, useRef } from "react";

export default function About() {
  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current.querySelectorAll("li");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const item = entry.target;

          if (entry.isIntersecting && !item.dataset.animated) {
            item.classList.add("fade-slide-in");
            item.dataset.animated = "true";
            obs.unobserve(item); // 🔒 lock animation (no flicker)
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="reveal" style={{ padding: "60px 20px" }}>
      <div className="wrap">
        <div
          className="card"
          style={{
            padding: "40px 30px",
            margin: "0 auto",
            maxWidth: "850px",
            borderRadius: "20px",
          }}
        >
          <span className="eyebrow" style={{ marginBottom: "20px" }}>
            ABOUT ME
          </span>

          <h2 style={{ marginBottom: "24px", fontSize: "42px", lineHeight: 1.2 }}>
            Building useful software that removes friction
          </h2>

          <p className="lead" style={{ marginBottom: "24px", fontSize: "18px", lineHeight: 1.6 }}>
            I’m a <strong>South African software developer and entrepreneur</strong>{" "}
            with a passion for building <strong>practical web products</strong> that
            solve real-world problems.
          </p>

          <p style={{ marginBottom: "24px", fontSize: "16px", lineHeight: 1.6 }}>
            I’m best known as the founder of <strong>RemoPDF</strong>, an all-in-one,
            browser-based PDF utility that helps users merge documents, remove pages,
            and convert files — without uploads to the server or subscriptions.
          </p>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Product-focused development means:
          </p>

          <ul
            className="about-list"
            ref={listRef}
            style={{ listStyle: "none", paddingLeft: 0, marginBottom: "32px" }}
          >
            {/* Feature planning */}
            <li>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--accent1)">
                <path d="M4 4h16v4H4zM4 10h10v4H4zM4 16h7v4H4z" />
              </svg>
              <div className="about-text">
                <strong>Feature planning & architecture</strong>
                <span>clear structure before a single line of code</span>
              </div>
            </li>

            {/* Performance */}
            <li>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--accent2)">
                <path d="M12 2a10 10 0 1 0 10 10h-4l4-6 4 6h-4A14 14 0 1 1 12 2z" />
              </svg>
              <div className="about-text">
                <strong>Performance optimization</strong>
                <span>fast load times, efficient rendering, real metrics</span>
              </div>
            </li>

            {/* Accessibility */}
            <li>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--accent3)">
                <path d="M12 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm-6 6h12v2H6zm3 4h2v8h-2zm4 0h2v8h-2z" />
              </svg>
              <div className="about-text">
                <strong>Accessibility & usability</strong>
                <span>usable by everyone, on every device</span>
              </div>
            </li>

            {/* Problem solving */}
            <li>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--accent4, #6b5cff)">
                <path d="M9 21h6v-2H9zm3-19a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z" />
              </svg>
              <div className="about-text">
                <strong>Real-world problem solving</strong>
                <span>solutions grounded in how people actually work</span>
              </div>
            </li>
          </ul>

          <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
            I believe good software should be <strong>fast, accessible, and available
            to everyone</strong>, regardless of location or budget.
          </p>
        </div>
      </div>

      <style>{`
        .about-list li {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          opacity: 0;
          transform: translateX(-60px);
        }

        .fade-slide-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
          transition:
            transform 0.7s cubic-bezier(.22,1,.36,1),
            opacity 0.5s ease;
        }

        .about-text {
          display: flex;
          flex-direction: column;
        }

        .about-text strong {
          font-size: 16px;
          margin-bottom: 4px;
        }

        .about-text span {
          font-size: 15px;
          color: var(--muted, #555);
        }

        @media (max-width: 768px) {
          h2 { font-size: 32px; }
          .lead { font-size: 16px; }
        }

        @media (max-width: 480px) {
          .about-list li {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
