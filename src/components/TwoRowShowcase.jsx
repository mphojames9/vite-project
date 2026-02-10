// src/FeaturedProject.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCode
} from "react-icons/fa";
import profile1 from "../asserts/profile.png";
import profile2 from "../asserts/profile.png";
import profile3 from "../asserts/profile.png";


export default function FeaturedProject() {
  const sectionRef = useRef(null);

  /* ---------------- Slideshow state ---------------- */
const imagesRow1 = [
  profile1,
  profile2,
  profile3,
];

const imagesRow2 = [
  profile1,
  profile2,
  profile3,
];


  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(
      () => setIndex1((i) => (i + 1) % imagesRow1.length),
      10000
    );

    const interval2 = setInterval(
      () => setIndex2((i) => (i + 1) % imagesRow2.length),
      10000
    );

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  /* ---------------- Intersection Observer ---------------- */
  useEffect(() => {
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
          }
        } else {
          el.classList.remove("in");
          el.classList.add("out");
          el.classList.remove("visible");
        }
      });
    }, observerOpts);

    const targets = sectionRef.current.querySelectorAll(
      ".reveal, .slide-left, .slide-right"
    );

    targets.forEach((el) => slideObserver.observe(el));
    return () => slideObserver.disconnect();
  }, []);

  const remoItems = [
    "Merge PDF files",
    "Remove or reorder pages",
    "Convert documents",
    "No installation required",
  ];

  const techHighlights = [
    "Modern JavaScript frontend",
    "No server-side processing",
    "Cloud deployment",
    "Optimized for performance",
  ];

  return (
    <section className="featured-project reveal" ref={sectionRef}>
      <div className="fp-wrap">

        {/* HEADER */}
        <div className="fp-header slide-left out">
          <span className="eyebrow">FEATURED PROJECT</span>
          <h2>Building software that solves real problems</h2>
        </div>

        {/* ROW 1 */}
        <div className="fp-row slide-left out">
          <div className="fp-image slideshow">
            {imagesRow1.map((src, i) => (
              <img
                key={src}
                src={src}
                className={i === index1 ? "active" : ""}
                alt=""
              />
            ))}
          </div>

          <div className="fp-text">
            <h3>RemoPDF</h3>
            <h4>Founder & Lead Developer</h4>
            <p>
              A lightweight, browser-based PDF utility designed to handle common
              document tasks without premium software.
            </p>

            <h4>Key Features</h4>
            <ul className="focus-list">
              {remoItems.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4>Tech highlights</h4>
            <ul className="focus-list">
              {techHighlights.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="fp-actions">
  <a
    href="https://remopdf.onrender.com"
    target="_blank"
    rel="noopener noreferrer"
    className="fp-btn primary"
  >
    <FaExternalLinkAlt />
    Live Preview
  </a>

  <a
    href="https://github.com/yourusername/remopdf"
    target="_blank"
    rel="noopener noreferrer"
    className="fp-btn secondary"
  >
    <FaCode />
    View Code
  </a>
</div>

          </div>
        </div>

        {/* ROW 2 */}
        <div className="fp-row reverse slide-right out">
          <div className="fp-text">
            <h3>Performance, accessibility & usability</h3>
            <p>
              Built for real users — keyboard navigation, Lighthouse scores,
              and low-bandwidth environments included.
            </p>
            <div className="fp-actions">
  <a
    href="https://example.com/performance-demo"
    target="_blank"
    rel="noopener noreferrer"
    className="fp-btn primary"
  >
    <FaExternalLinkAlt />
    Live Preview
  </a>

  <a
    href="https://github.com/yourusername/project-performance"
    target="_blank"
    rel="noopener noreferrer"
    className="fp-btn secondary"
  >
    <FaCode />
    View Code
  </a>
</div>

          </div>

          <div className="fp-image slideshow">
            {imagesRow2.map((src, i) => (
              <img
                key={src}
                src={src}
                className={i === index2 ? "active" : ""}
                alt=""
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        /* ---------------- Layout ---------------- */
        .featured-project {
          padding: 80px 20px;
          overflow: hidden;
        }

        .fp-wrap {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .fp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ---------------- Slideshow ---------------- */
        .slideshow {
          position: relative;
          height: 100%;
        }

        .slideshow img {
          position: absolute;
          inset: 0;
          width: 100%;
          opacity: 0;
          transition: opacity 1.2s ease;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }

        .slideshow img.active {
          opacity: 1;
          position: relative;
        }

        /* ---------------- Animation Core ---------------- */
        .reveal,
        .slide-left,
        .slide-right {
          opacity: 0;
        }

        .slide-left {
          transform: translateX(-80px);
        }

        .slide-right {
          transform: translateX(80px);
        }

        .in {
          opacity: 1;
          transform: translateX(0);
          transition: transform 0.9s cubic-bezier(.2,.9,.2,1),
                      opacity 0.9s ease;
        }

        /* ---------------- Action Buttons ---------------- */
.fp-actions {
  display: flex;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.fp-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.fp-btn svg {
  font-size: 14px;
}

/* Primary */
.fp-btn.primary {
  background: #111;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.fp-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.25);
}

/* Secondary */
.fp-btn.secondary {
  background: #f4f4f4;
  color: #111;
}

.fp-btn.secondary:hover {
  background: #eaeaea;
  transform: translateY(-2px);
}


        /* ---------------- Mobile ---------------- */
        @media (max-width: 700px) {
          .fp-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
