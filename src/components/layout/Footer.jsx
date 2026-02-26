const cols = {
  'Collections':  ['Perpetual', 'Obsidian', 'Solstice', 'Limited Editions', 'Pre-Owned'],
  'The Maison':   ['Our Story', 'The Atelier', 'Master Watchmakers', 'Heritage', 'Sustainability'],
  'Services':     ['Maintenance & Servicing', 'Engraving', 'Strap Customisation', 'Authentication', 'Insurance'],
  'Contact':      ['Book an Appointment', 'Boutiques', 'Authorised Dealers', 'Press Inquiries', 'Careers'],
};

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">

      {/* Top band */}
      <div className="border-b border-dark-border px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-platinum text-2xl font-light">Every second, <em className="text-gold">measured</em>.</p>
            <p className="font-sans text-platinum-dim text-xs mt-1 tracking-wide">Join the Meridian circle — be first to hear about new references.</p>
          </div>
          <div className="flex gap-0 w-full md:w-auto max-w-sm">
            <input placeholder="Your email address" className="flex-1 bg-dark-surface border border-dark-border border-r-0 px-4 py-3 font-sans text-sm text-platinum placeholder-platinum-dim/40 focus:outline-none focus:border-gold/50 transition-colors" />
            <button className="bg-gold text-dark font-sans font-semibold text-[10px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-gold-light transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="font-serif font-semibold text-platinum text-2xl tracking-[0.2em] uppercase">Meridian</p>
              <p className="font-sans text-gold text-[9px] tracking-[0.5em] uppercase mt-0.5">Swiss Horology · Est. 1962</p>
            </div>
            <p className="font-sans text-platinum-dim/50 text-sm leading-relaxed max-w-xs mb-8">
              Founded in Le Locle, Switzerland. Six decades of uncompromising horology, made entirely in-house.
            </p>
            <div className="flex gap-3">
              {['IG', 'YT', 'WB', 'LI'].map(s => (
                <button key={s} className="w-9 h-9 border border-dark-border hover:border-gold/40 text-platinum-dim hover:text-gold font-sans text-[10px] font-semibold transition-colors">{s}</button>
              ))}
            </div>
          </div>
          {/* Cols */}
          {Object.entries(cols).map(([group, items]) => (
            <div key={group}>
              <p className="font-sans font-semibold text-platinum text-[10px] tracking-[0.25em] uppercase mb-5">{group}</p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="font-sans text-platinum-dim/50 hover:text-platinum-dim text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-platinum-dim/30 text-xs">© 2025 Meridian Horlogerie SA, Le Locle, Switzerland. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Legal', 'Cookie Policy', 'Sitemap'].map(i => (
              <a key={i} href="#" className="font-sans text-platinum-dim/30 hover:text-platinum-dim/60 text-xs transition-colors">{i}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
