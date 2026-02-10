import React, { useState, useEffect, useRef } from "react";

export default function FAQSection() {
  const sectionRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long are projects?",
      answer:
        "Most projects take between 2–8 weeks, depending on scope, complexity, and feedback cycles.",
    },
    {
      question: "How does payment work?",
      answer:
        "Projects typically start with a deposit, followed by milestone-based payments to keep everything transparent.",
    },
    {
      question: "Do you work with startups or solo founders?",
      answer:
        "Yes — especially early-stage founders. I’m comfortable working with evolving ideas and limited resources.",
    },
    {
      question: "Will I be able to maintain the project myself?",
      answer:
        "Absolutely. I focus on clean, understandable code and can provide documentation or walkthroughs if needed.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. I offer optional post-launch support for updates, fixes, and feature improvements.",
    },
  ];

  /* ---------------- Intersection Observer for reveal animations ---------------- */
  useEffect(() => {
    const observerOpts = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.5],
    };

  }, []);

  return (
    <section id="faq" className="faq-section reveal" ref={sectionRef}>
      <h2 className="faq-title">FAQ</h2>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item ${
              openIndex === i ? "open" : ""
            }`}
          >
            <button
              className="faq-btn"
              aria-expanded={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .faq-section {
          padding: 80px 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-title {
          font-size: 36px;
          margin-bottom: 40px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .faq-item {
          border: 1px solid rgba(80, 69, 69, 0.28);
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .faq-item:hover {
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.03);
        }

        .faq-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text);
          cursor: pointer;
          font-size: 17px;
          font-weight: 600;
          text-align: left;
        }

        .faq-btn:hover {
          background: rgba(0,0,0,0.03);
        }

        .faq-icon {
          font-size: 22px;
          transition: transform 0.3s ease;
        }

        .faq-item.open .faq-icon {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          padding: 0 24px;
          opacity: 0;
          transition:
            max-height 0.4s ease,
            opacity 0.3s ease,
            padding 0.3s ease;
        }

        .faq-item.open .faq-answer {
          max-height: 300px;
          opacity: 1;
          padding: 0 24px 20px;
        }

        .faq-answer p {
          margin: 0 0 20px;
          font-size: 16px;
          line-height: 1.7;
        }

        /* ---------------- Animation Core ---------------- */
        .reveal,
        .slide-left,
        .slide-right {
          opacity: 1;
          will-change: transform, opacity;
        }

        .slide-left {
          transform: translateX(-60px);
        }

        .slide-right {
          transform: translateX(60px);
        }

        @media (max-width: 700px) {
          .faq-title {
            font-size: 28px;
          }

          .faq-btn {
            font-size: 16px;
          }

          .faq-answer p {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
