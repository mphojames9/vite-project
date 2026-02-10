import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

// FIXED: Correct imports for all components  
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import ContactForm from './components/ContactForm.jsx'
import About from './components/About.jsx'
import WhatIDoBest from './components/WhatIDoBest.jsx'
import TwoRowShowcase from './components/TwoRowShowcase.jsx'
import WhyWorkWithMe from './components/WhyWorkWithMe.jsx'
import FAQSectio from './components/FAQSectio.jsx'

export default function App() {
  return (
    <div className="wrap" data-theme="dark">
      <Header />

      <main>
        <Hero />
        <section id="services" className="reveal">
          <h2>Services</h2>
          <div className="services">
            <div className="service slide-left">
              <h3>Design Systems</h3>
              <p className="muted">Tokens, components, docs — shipped and maintained.</p>
            </div>

            <div className="service slide-left">
              <h3>Product Design</h3>
              <p className="muted">Discovery, prototypes, user testing.</p>
            </div>

            <div className="service slide-right">
              <h3>Frontend Engineering</h3>
              <p className="muted">React, Next, TypeScript, performance-first.</p>
            </div>

            <div className="service slide-right">
              <h3>Brand & Visuals</h3>
              <p className="muted">Logo, identity, motion.</p>
            </div>
          </div>
        </section>

        <About />
        <WhatIDoBest />
        <TwoRowShowcase />

        <Projects />

        <WhyWorkWithMe />

        <section id="testimonials" className="reveal">
          <h2>Testimonials</h2>
          <div className="testimonials">
            <div className="testimonial slide-left">
              “Absolutely brilliant — redesigned our platform and results improved across the board.”
            </div>

            <div className="testimonial slide-right">
              “Delivered on time and exceeded expectations.”
            </div>

            <div className="testimonial slide-left">
              “Great communication and thoughtful design.”
            </div>
          </div>
        </section>

        <section id="pricing" className="reveal">
          <h2>Pricing</h2>
          <div className="pricing">
            <div className="plan slide-left">
              <h3>Starter</h3>
              <div style={{ fontWeight: 800, fontSize: 22 }}>$499</div>
              <div className="muted">Landing page + basic UI</div>
            </div>

            <div className="plan slide-right">
              <h3>Pro</h3>
              <div style={{ fontWeight: 800, fontSize: 22 }}>$1,499</div>
              <div className="muted">Product UI + design system</div>
            </div>

            <div className="plan slide-left">
              <h3>Enterprise</h3>
              <div style={{ fontWeight: 800, fontSize: 22 }}>Custom</div>
              <div className="muted">Full product & team collaboration</div>
            </div>
          </div>
        </section>

        <section id="blog" className="reveal">
          <h2>Latest Articles</h2>
          <div className="blog-grid">
            <article className="blog slide-left">
              <h3>Design Systems in 2025</h3>
              <p className="muted">How to build a system that lasts.</p>
            </article>

            <article className="blog slide-right">
              <h3>Accessibility Wins</h3>
              <p className="muted">Small changes with big impact.</p>
            </article>
          </div>
        </section>

        <FAQSectio />

        <section id="contact" className="reveal">
          <h2>Contact</h2>

          <div className="contact">
            <ContactForm />

            <aside className="contact-aside card">
              <h3>Contact Me</h3>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@youremail.com">hello@youremail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <strong>Phone:</strong> +27 600 000 000
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <strong>Location:</strong> Cape Town, South Africa
                </div>
              </div>
              <div className="contact-item">
                <FaGlobe className="contact-icon" />
                <div>
                  <strong>Availability:</strong> Worldwide (Remote)
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <h3>Your Name</h3>
            <p className="muted">
              Design · Frontend · Systems
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer-nav">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Social */}
          <div className="footer-social">
            <a href="#" aria-label="GitHub" className="social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5-.7 1.7-1 .1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.6 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn" className="social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5v16h4v-8.6c0-2.1.7-3.5 2.7-3.5 1.9 0 2.3 1.4 2.3 3.5v8.6h4v-9.7c0-4.3-2.1-6.3-5.1-6.3-2.3 0-3.3 1.3-3.9 2.3h-.1V7.5h-4z" />
              </svg>
            </a>

            <a href="#" aria-label="Twitter/X" className="social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M18.9 2H22l-7.4 8.5L23 22h-6.6l-5.2-6.4L5.7 22H2.6l7.9-9L1 2h6.8l4.7 5.8L18.9 2z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span className="muted">Built with care • Design + Code</span>
        </div>
      </footer>
    </div>

  );
}
