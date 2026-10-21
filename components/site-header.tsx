"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandMark } from "@/components/brand-mark";

const navigation = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label={`${siteConfig.name} home`}
          onClick={closeMenu}
        >
          <BrandMark />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link className="button button--small header-cta" href="#contact">
          Request a consultation <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          ref={toggleRef}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" id={menuId} aria-label="Mobile navigation">
          <div className="container">
            {navigation.map(({ href, label }) => (
              <Link
                className="mobile-nav-link"
                href={href}
                key={href}
                onClick={closeMenu}
              >
                {label} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            ))}
            <Link
              className="button mobile-nav-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Request a consultation{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
