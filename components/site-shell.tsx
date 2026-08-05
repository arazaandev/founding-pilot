"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";

const navigation = [
  ["Product", "/#product"],
  ["How it works", "/#how-it-works"],
  ["Sample brief", "/sample-opportunity"],
  ["Calibration", "/#calibration"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}>
        <span className="brand-mark">LA</span>
        <span>{siteConfig.logoText}</span>
      </Link>
      <nav id="main-navigation" className={`desktop-nav ${open ? "open" : ""}`} aria-label="Main navigation">
        {navigation.map(([label, href]) => (
          <Link href={href} onClick={() => setOpen(false)} key={href}>
            {label}
          </Link>
        ))}
      </nav>
      <Link className="button button-dark header-cta" href="/apply">
        Request calibration <span aria-hidden="true">↗</span>
      </Link>
      <button
        ref={menuButton}
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="main-navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">LA</span>
            <span>{siteConfig.name}</span>
          </Link>
          <h2>
            Research less.<br />
            <em>Approach better.</em>
          </h2>
        </div>
        <div className="footer-nav">
          <div>
            <span>EXPLORE</span>
            <Link href="/#product">Product</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/sample-opportunity">Sample brief</Link>
            <Link href="/apply">Free calibration</Link>
          </div>
          <div>
            <span>CONNECT</span>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.company}</p>
        <p>Fictional companies are used in demonstrations.</p>
      </div>
    </footer>
  );
}
