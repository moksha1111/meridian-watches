import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { img } from '../../utils/images';

const boutiques = ['Le Locle, Switzerland', 'Geneva, Switzerland', 'London, UK', 'New York, USA', 'Hong Kong', 'Tokyo, Japan'];
const interests  = ['Perpetual Collection', 'Obsidian Collection', 'Solstice Tourbillon', 'Limited Editions', 'Pre-Owned Meridian', 'Servicing & Maintenance'];

export default function Appointment() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', boutique: '', interest: '', message: '' });
  const set = f => e => setForm({ ...form, [f]: e.target.value });

  const inputCls = 'w-full bg-dark-surface border border-dark-border px-4 py-3 font-sans text-sm text-platinum placeholder-platinum-dim/20 focus:outline-none focus:border-gold/50 transition-colors';

  return (
    <section id="appointment" className="section-pad bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left */}
          <div className="lg:col-span-2"
               style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-24px)', transition: 'opacity .8s ease, transform .8s ease' }}>
            <span className="overline">Private Consultation</span>
            <h2 className="h2 mb-4">Visit Us at<br />the Atelier</h2>
            <div className="divider-gold" />
            <p className="font-sans text-platinum-dim/55 text-sm leading-relaxed mb-8">
              We welcome collectors and enthusiasts alike to our boutiques. No sales pressure — only a shared passion for exceptional horology.
            </p>

            {/* Info blocks */}
            <div className="space-y-5 mb-8">
              {[
                ['📍', 'Boutiques', '6 locations worldwide'],
                ['📞', 'Telephone', '+41 32 931 00 00'],
                ['✉️', 'Email', 'maison@meridian-watches.ch'],
                ['⏰', 'Hours', 'Mon–Sat, by appointment'],
              ].map(([icon, label, val]) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-dark-border flex items-center justify-center text-base shrink-0">{icon}</div>
                  <div>
                    <p className="font-sans font-semibold text-platinum text-[10px] tracking-[0.2em] uppercase">{label}</p>
                    <p className="font-sans text-platinum-dim/55 text-sm mt-0.5">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Atelier image */}
            <div className="relative overflow-hidden" style={{ height: '200px' }}>
              <img src={img('1622434641406-a158123450f9', 600, 75)} alt="Meridian atelier" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-dark/50" />
              <div className="absolute bottom-4 left-4">
                <p className="font-serif text-platinum font-light text-sm">Meridian — Le Locle</p>
                <p className="font-sans text-platinum-dim/50 text-xs">Rue de la Paix 12, 2400 Le Locle</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-dark-card border border-dark-border p-8 md:p-10"
               style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(24px)', transition: 'opacity .8s .1s ease, transform .8s .1s ease' }}>
            <h3 className="font-serif text-platinum text-2xl font-light mb-2">Request an Appointment</h3>
            <p className="font-sans text-platinum-dim/40 text-sm mb-8">A member of our team will confirm within 24 hours.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-sans text-[9px] text-platinum-dim/35 tracking-[0.25em] uppercase font-medium block mb-2">Full Name</label>
                <input value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label className="font-sans text-[9px] text-platinum-dim/35 tracking-[0.25em] uppercase font-medium block mb-2">Email</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" className={inputCls} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-sans text-[9px] text-platinum-dim/35 tracking-[0.25em] uppercase font-medium block mb-2">Preferred Boutique</label>
                <select value={form.boutique} onChange={set('boutique')} className={inputCls + ' cursor-pointer'}>
                  <option value="">Select location</option>
                  {boutiques.map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="font-sans text-[9px] text-platinum-dim/35 tracking-[0.25em] uppercase font-medium block mb-2">Area of Interest</label>
                <select value={form.interest} onChange={set('interest')} className={inputCls + ' cursor-pointer'}>
                  <option value="">Select collection</option>
                  {interests.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="font-sans text-[9px] text-platinum-dim/35 tracking-[0.25em] uppercase font-medium block mb-2">Message</label>
              <textarea value={form.message} onChange={set('message')} rows={4} placeholder="Tell us what you have in mind..." className={inputCls + ' resize-none'} />
            </div>
            <button className="btn-gold w-full justify-center py-4">Request Appointment</button>
            <p className="font-sans text-[10px] text-platinum-dim/25 text-center mt-4">
              All enquiries are handled with complete discretion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
