"use client";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}><span className="brand-mark">LA</span><span>{siteConfig.logoText}</span></Link>
    <nav className={`desktop-nav ${open ? "open" : ""}`} aria-label="Main navigation">
      <Link href="/#problem" onClick={() => setOpen(false)}>Why now</Link>
      <Link href="/#how" onClick={() => setOpen(false)}>How it works</Link>
      <Link href="/sample-opportunity" onClick={() => setOpen(false)}>Sample opportunity</Link>
      <Link href="/#pilot" onClick={() => setOpen(false)}>Free calibration</Link>
    </nav>
    <Link className="button button-dark header-cta" href="/apply">Apply <span>↗</span></Link>
    <button className="menu-button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(x => !x)}><span/><span/></button>
  </header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div><Link className="brand footer-brand" href="/"><span className="brand-mark">LA</span><span>{siteConfig.name}</span></Link><h2>Research less.<br/><em>Approach better.</em></h2></div>
      <div className="footer-nav">
        <div><span>EXPLORE</span><Link href="/#how">First five days</Link><Link href="/sample-opportunity">Sample opportunity</Link><Link href="/apply">Free calibration</Link></div>
        <div><span>CONNECT</span><a href={`mailto:${siteConfig.email}`}>Email</a><a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a><Link href="/privacy">Privacy</Link></div>
      </div>
    </div>
    <div className="container footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.company}</p><p>Fictional companies are used in demonstrations.</p></div>
  </footer>;
}
