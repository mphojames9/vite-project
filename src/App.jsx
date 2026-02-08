import React from 'react'

// FIXED: Correct imports for all components  
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import ContactForm from './components/ContactForm.jsx'

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

        <Projects />

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

        <section id="faq" className="reveal">
          <h2>FAQ</h2>
          <div className="faq">
            <div className="faq-item slide-left">
              <strong>How long are projects?</strong>
              <div className="muted">Most projects 2–8 weeks depending on scope.</div>
            </div>

            <div className="faq-item slide-right">
              <strong>Payment?</strong>
              <div className="muted">Deposit + milestone payments.</div>
            </div>
          </div>
        </section>

        <section id="contact" className="reveal">
          <h2>Contact</h2>

          <div className="contact">
            <ContactForm />

            <aside className="card contact-aside">
              <div><strong>Email:</strong> <a href="mailto:hello@youremail.com">hello@youremail.com</a></div>
              <div><strong>Phone:</strong> +27 600 000 000</div>
              <div><strong>Location:</strong> Cape Town, South Africa</div>

              <div className="social-icons">
                {/* GitHub */}
                <a href="#" aria-label="GitHub" className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5-.7 1.7-1 .1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.6 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5v16h4v-8.6c0-2.1.7-3.5 2.7-3.5 1.9 0 2.3 1.4 2.3 3.5v8.6h4v-9.7c0-4.3-2.1-6.3-5.1-6.3-2.3 0-3.3 1.3-3.9 2.3h-.1V7.5h-4z"
                    />
                  </svg>
                </a>

                {/* Twitter (X) */}
                <a href="#" aria-label="Twitter/X" className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23 2.9c-.8.4-1.6.6-2.5.8.9-.5 1.6-1.4 1.9-2.4-.9.5-1.9.9-3 1.1C18.6 1.5 17.3 1 16 1c-2.7 0-4.9 2.3-4.9 5 0 .4 0 .8.1 1.1C7.6 6.9 4.2 4.9 1.7 1.9c-.4.7-.6 1.4-.6 2.3 0 1.6.8 3 2.1 3.8-.7 0-1.4-.2-2-.5v.1c0 2.3 1.6 4.3 3.7 4.8-.4.1-.9.2-1.4.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.5 3.4-1.6 1.3-3.7 2.1-6 2.1H0C2.1 21 4.6 22 7.3 22c8.8 0 13.7-7.5 13.7-14 0-.2 0-.4 0-.5C22 6.1 22.6 5.4 23 4.6c-.8.4-1.6.6-2.5.8 1-.6 1.7-1.4 2.5-2.5z"
                    />
                  </svg>
                </a>

              </div>

            </aside>
          </div>
        </section>
      </main>

      <footer>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          flexWrap: 'wrap'
        }}>
          <div>© <span id="year"></span> Your Name</div>
          <div className="muted">Made with care • Design + Code</div>
        </div>
      </footer>
    </div>
  );
}
