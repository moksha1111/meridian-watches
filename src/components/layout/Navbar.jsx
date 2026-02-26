import { useEffect, useState } from 'react';

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'The Atelier', href: '#atelier' },
  { label: 'Press', href: '#press' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex flex-col items-start">
          <span className="font-serif font-semibold text-platinum text-xl tracking-[0.25em] uppercase leading-none">Meridian</span>
          <span className="font-sans text-gold text-[8px] tracking-[0.5em] uppercase mt-0.5">Swiss Horology</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l.label} href={l.href}
               className="font-sans text-platinum-dim hover:text-platinum text-[11px] tracking-[0.2em] uppercase transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#appointment" className="font-sans text-gold text-[11px] tracking-[0.2em] uppercase hover:text-gold-light transition-colors">
            Book an Appointment
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-6 h-px bg-platinum transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-platinum transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-platinum transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-card border-t border-dark-border px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               className="font-sans text-platinum text-sm tracking-[0.2em] uppercase">
              {l.label}
            </a>
          ))}
          <a href="#appointment" onClick={() => setOpen(false)}
             className="font-sans text-gold text-sm tracking-[0.2em] uppercase mt-2">
            Book an Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
