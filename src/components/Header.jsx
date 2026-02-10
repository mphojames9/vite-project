import React, { useEffect, useRef, useState } from "react";
import { ThemeSlider } from "./ThemeSlider";
import logo from "../asserts/logo.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScroll = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const ticking = useRef(false);
  const mounted = useRef(false);

  // Close mobile menu on wide screens or navigation
  useEffect(() => {
    mounted.current = true;
    const onResize = () => {
      if (window.innerWidth > 740 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      mounted.current = false;
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  // Scroll handler: hide on scroll down, show on scroll up
  useEffect(() => {
    const THRESHOLD = 16; // small threshold to avoid flicker
    const MIN_TOP_SHOW = 40; // always show near top

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          const y = window.scrollY || 0;
          const last = lastScroll.current;
          const delta = y - last;

          // if near top, always show
          if (y < MIN_TOP_SHOW) {
            setNavVisible(true);
          } else if (delta > THRESHOLD) {
            // scrolling down
            setNavVisible(false);
            // close mobile menu when scrolling down for UX
            if (menuOpen) setMenuOpen(false);
          } else if (delta < -THRESHOLD) {
            // scrolling up
            setNavVisible(true);
          }
          lastScroll.current = y;
          ticking.current = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Close mobile menu when a link is clicked
  const onNavLink = (e) => {
    setMenuOpen(false);
  };



  // keyboard accessibility: close menu on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <div className={`nav ${navVisible ? "nav--visible" : "nav--hidden"}`} role="navigation" aria-label="Main navigation">
        {/* BRAND */}
        <div className="brand">
                  <div className="logo">
          <img src={logo} alt="Logo" className="logoImg" />
        </div>
        </div>

        {/* HAMBURGER (mobile) */}
        <button
          className="hamburger"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((s) => !s)}
          title="Open menu"
        >
          ☰
        </button>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav" aria-hidden={false}>
          <ul>
            <li><a href="#home" onClick={onNavLink}>Home</a></li>
            <li><a href="#services" onClick={onNavLink}>Services</a></li>
            <li><a href="#projects" onClick={onNavLink}>Work</a></li>
            <li><a href="#blog" onClick={onNavLink}>Blog</a></li>
            <li><a href="#contact" onClick={onNavLink}>Contact</a></li>
          </ul>
        </nav>

        {/* ACTIONS (desktop) */}
        <div className="actions desktop-nav">
          <a className="btn" href="#contact">Hire Me</a>
          <ThemeSlider id="themeToggleDesktop" />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobileMenu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <a href="#home" onClick={onNavLink}>Home</a>
        <a href="#services" onClick={onNavLink}>Services</a>
        <a href="#projects" onClick={onNavLink}>Work</a>
        <a href="#blog" onClick={onNavLink}>Blog</a>
        <a href="#contact" onClick={onNavLink}>Contact</a>

        <div style={{ height: 8 }} />

        <ThemeSlider id="themeToggleMobile" />
        <a className="btn" href="#contact" onClick={onNavLink}>Hire Me</a>
      </div>
    </>
  );
}
