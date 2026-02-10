import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyWorkWithMe() {
  const sectionRef = useRef(null);

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

          if (
            el.classList.contains("slide-left") ||
            el.classList.contains("slide-right")
          ) {
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

  const reasons = [
    "Founder mindset — I understand business and users",
    "Practical, no-nonsense engineering",
    "Strong communication and transparency",
    "Experience shipping real products, not just demos",
    "Focus on long-term value, not quick hacks",
  ];

  return (
    <section className="why-work reveal" ref={sectionRef}>
      <div className="wwm-wrap">

        {/* ROW */}
        <div className="wwm-row">

          {/* TEXT — LEFT */}
          <div className="wwm-text slide-left out">
            <span className="eyebrow">WHY WORK WITH ME</span>
            <h2>More than code — I think like a product owner</h2>
            <p>
              I don’t just write features. I care about usability,
              sustainability, and solving the right problems.
            </p>

            <ul className="focus-list">
              {reasons.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE — RIGHT */}
          <div className="wwm-image slide-right out">
            <img
              src="/images/why-work.png"
              alt="Product thinking and engineering"
              loading="lazy"
            />
          </div>

        </div>
      </div>

      <style>{`
        /* ---------------- Layout ---------------- */
        .why-work {
          padding: 80px 20px;
          overflow: hidden;
        }

        .wwm-wrap {
          max-width: 1100px;
          margin: 0 auto;
        }

        .wwm-row {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .wwm-text {
          max-width: 600px;
        }

        .wwm-text h2 {
          font-size: 38px;
          line-height: 1.2;
          margin-bottom: 14px;
        }

        .wwm-text p {
          font-size: 17px;
          line-height: 1.7;
          color: #444;
          margin-bottom: 24px;
        }



        /* ---------------- Image ---------------- */
        .wwm-image img {
          width: 100%;
          display: block;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }

        /* ---------------- Animation Core ---------------- */
        .reveal,
        .slide-left,
        .slide-right {
          opacity: 0;
          will-change: transform, opacity;
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
          transition:
            transform 0.9s cubic-bezier(.2,.9,.2,1),
            opacity 0.9s ease;
        }

        .out {
          opacity: 0;
        }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 900px) {
          .wwm-row {
            gap: 40px;
          }

          .wwm-text h2 {
            font-size: 32px;
          }
        }

        @media (max-width: 700px) {
          .wwm-row {
            grid-template-columns: 1fr;
          }

          .wwm-image {
            order: 1;
          }

          .wwm-text {
            order: 2;
          }

          .wwm-text h2 {
            font-size: 26px;
          }

          .wwm-text p,
          .focus-list li {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
