import React, { useEffect, useRef, useState } from "react";


export default function Hero() {
  const heroImage = useRef(null);

  const [typedText, setTypedText] = useState("");
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [fadeInText, setFadeInText] = useState(false);
  const fullText = "Hey, I’m James Matli";
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    let index = 0;
    let cancelled = false;

    const interval = setInterval(() => {
      if (cancelled) return;

      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      }

      if (index === fullText.length) {
  clearInterval(interval);
  setTimeout(() => {
    document.querySelector(".typewriter")?.classList.add("done");
    setTimeout(() => setShowSubtitle(true), 250);
  }, 100);
}
    }, 65);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);


  useEffect(() => {
    const themeToggle = document.getElementById("themeToggle");
    const themeHandler = () => {
      const root = document.documentElement;
      const cur = root.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
    };
    if (themeToggle) themeToggle.addEventListener("click", themeHandler);

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
          imgs.forEach((img) => img.classList.add("in"));
        } else {
          if (!entry.isIntersecting) {
            if (el.classList.contains("slide-left") || el.classList.contains("slide-right")) {
              el.classList.remove("in");
              el.classList.add("out");
            }

            el.classList.remove("visible");

            const imgs = el.querySelectorAll(".img-inner, .img-animate, .parallax");
            imgs.forEach((img) => img.classList.remove("in"));
          }
        }
      });
    }, observerOpts);

    const targets = document.querySelectorAll(
      ".reveal, .slide-left, .slide-right, .project, .hero-card, .testimonial, .plan, .blog, .faq-item, .fp-row, .fp-image"
    );

    targets.forEach((el) => slideObserver.observe(el));

    // Parallax effect
    const onMouse = (e) => {
      if (heroImage.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 6;
        heroImage.current.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
      }
    };

    document.addEventListener("mousemove", onMouse);

    // Cleanup
    return () => {
      if (themeToggle) themeToggle.removeEventListener("click", themeHandler);
      document.removeEventListener("mousemove", onMouse);
      slideObserver.disconnect();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div>
        <div className="eyebrow">Available for Remote, Contract & Freelance Work</div>

        <h1 className="typewriter">{typedText}</h1>
        <h2 className={`subtitle ${showSubtitle ? "visible" : ""}`}>
          Software Engineer | Full-Stack Developer
        </h2>

        <p className="lead">
          I design and build practical, high-impact web applications that solve real problems.
          My focus is on accessible, lightweight, and scalable systems especially tools that make digital
           work easier for people who don’t have access to expensive software.
        </p>

        <p><strong>Founder of RemoPDF</strong>, a free web-based document utility used to manage PDFs directly in the browser.</p>

        <div className="cta-row">
          <a className="btn" href="#projects">See Work</a>
        </div>

        <div className="skills reveal" id="skills">
        </div>
      </div>

      <aside className="hero-card">
        <div ref={heroImage} className="hero-image parallax img-animate">
          <div className="meta-pill">
            <strong>Featured:</strong>Product & Frontend
          </div>
        </div>

        {/* Case study card (unchanged) */}
      </aside>
    </section>
  );
}
