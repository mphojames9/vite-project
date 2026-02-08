import React, { useEffect } from "react";

export default function Projects() {

  useEffect(() => {
    // progress/interaction code for rings
    const rings = document.querySelectorAll(".ring");
    const ringObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const svg = e.target.querySelector("svg");
          if (!svg) return;

          const circle = svg.querySelectorAll("circle")[1];
          const r = circle.r.baseVal.value;
          const c = Math.PI * (r * 2);

          circle.style.strokeDasharray = c;

          if (e.isIntersecting) {
            const pct = parseInt(e.target.getAttribute("data-percent") || 80);
            const offset = c - (pct / 100) * c;

            circle.style.transition = "stroke-dashoffset 1s ease";
            circle.style.strokeDashoffset = offset;
          } else {
            circle.style.strokeDashoffset = c;
          }
        });
      },
      { threshold: 0.2 }
    );

    rings.forEach((r) => ringObserver.observe(r));

    // modal logic
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalContent = document.getElementById("modalContent");

    document.querySelectorAll(".project").forEach((proj) => {
      proj.addEventListener("click", () => {
        const title = proj.getAttribute("data-title");
        const desc = proj.getAttribute("data-desc");
        const imgs = (proj.getAttribute("data-images") || "").split(",");

        let html = `
          <h2>${title}</h2>
          <p class="muted">${desc}</p>
          <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
        `;

        imgs.forEach((src) => {
          if (src) {
            html += `<img src="${src}" alt="${title}" style="width:180px;height:110px;object-fit:cover;border-radius:8px;border:1px solid rgba(255,255,255,0.04)">`;
          }
        });

        html += `
          </div>
          <div style="margin-top:14px;display:flex;gap:10px">
            <a class="btn" href="#contact">Work with me</a>
            <button class="ghost" onclick="document.getElementById('modalBackdrop').style.display='none'">Close</button>
          </div>
        `;

        if (modalContent) modalContent.innerHTML = html;
        if (modalBackdrop) modalBackdrop.style.display = "flex";
      });
    });

    const modalClose = document.getElementById("modalClose");
    if (modalClose)
      modalClose.addEventListener("click", () => {
        if (modalBackdrop) modalBackdrop.style.display = "none";
      });

    if (modalBackdrop)
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) modalBackdrop.style.display = "none";
      });

  }, []);

  return (
    <section id="projects" className="reveal">
      <h2>Selected Projects</h2>

      <div className="projects-grid">

        <div
          className="project"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200')",
          }}
          data-title="Fintech Dashboard"
          data-desc="A complex analytics dashboard — React + D3 + Design System"
          data-images="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200,https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200"
        >
          <div
            className="img-inner parallax"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200')",
            }}
          ></div>
          <div className="overlay">
            <div style={{ fontWeight: 700 }}>Fintech Dashboard</div>
          </div>
        </div>

        <div
          className="project"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200')",
          }}
          data-title="Analytics App"
          data-desc="Interactive data visualizations and design system."
          data-images="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200"
        >
          <div
            className="img-inner parallax"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200')",
            }}
          ></div>
          <div className="overlay">
            <div style={{ fontWeight: 700 }}>Analytics App</div>
          </div>
        </div>

        <div
          className="project"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508385082359-fcbb1b9d8c03?w=1200')",
          }}
          data-title="E-commerce UI"
          data-desc="Conversion-focused product pages."
          data-images="https://images.unsplash.com/photo-1508385082359-fcbb1b9d8c03?w=1200"
        >
          <div
            className="img-inner parallax"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1508385082359-fcbb1b9d8c03?w=1200')",
            }}
          ></div>
          <div className="overlay">
            <div style={{ fontWeight: 700 }}>E-commerce UI</div>
          </div>
        </div>

      </div>

      <div className="cta-banner caseStudy">
        <div>
          <strong>Want a case study like this?</strong>
          <div className="muted">
            I take on a limited number of high-impact projects per quarter.
          </div>
        </div>
        <div>
          <a className="btn" href="#contact">
            Start your project
          </a>
        </div>
      </div>

      {/* Modal */}
      <div
        id="modalBackdrop"
        className="modal-backdrop"
        style={{ display: "none" }}
      >
        <div className="modal" role="dialog" aria-modal="true">
          <button className="modal-close" id="modalClose">
            Close ✕
          </button>
          <div id="modalContent"></div>
        </div>
      </div>
    </section>
  );
}
