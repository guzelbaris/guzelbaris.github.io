import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav
        className="container navigation"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
          }
        }}
      >
        <a className="logo" href="#home" onClick={closeMenu}>
          baris<span>.dev</span>
        </a>
        
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="navigation-links"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
        </button>

        <div
          id="navigation-links"
          className={`nav-links${isOpen ? " is-open" : ""}`}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}