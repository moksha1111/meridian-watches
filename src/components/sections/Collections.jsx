import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { img } from '../../utils/images';
import { collections } from '../../data/collections';

function CollectionCard({ name, tagline, desc, price, photoId, pieces, delay }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="group relative overflow-hidden bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-500"
         style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: `opacity .8s ${delay}ms ease, transform .8s ${delay}ms ease, border-color .3s` }}>
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '360px' }}>
        <img src={img(photoId, 700, 80)} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark/20 to-transparent" />
        {/* Piece count badge */}
        <div className="absolute top-5 right-5 bg-dark/80 backdrop-blur border border-dark-border px-3 py-1.5">
          <p className="font-sans text-platinum-dim text-[9px] tracking-[0.25em] uppercase">{pieces} References</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="font-sans text-gold text-[10px] tracking-[0.35em] uppercase mb-2">{tagline}</p>
        <h3 className="font-serif text-platinum text-3xl font-light mb-3">{name}</h3>
        <p className="font-sans text-platinum-dim/50 text-sm leading-relaxed mb-6 line-clamp-3">{desc}</p>
        <div className="flex items-center justify-between">
          <p className="font-serif text-platinum text-lg">{price}</p>
          <a href="#" className="font-sans text-gold text-[10px] tracking-[0.2em] uppercase hover:text-gold-light transition-colors flex items-center gap-2">
            Discover
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Collections() {
  const { ref, inView } = useInView();
  return (
    <section id="collections" className="section-pad bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
             style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(26px)', transition: 'opacity .6s ease, transform .6s ease' }}>
          <div>
            <span className="overline">The Collections</span>
            <h2 className="h2">Three Visions,<br />One Philosophy</h2>
          </div>
          <p className="font-sans text-platinum-dim/50 text-sm leading-relaxed max-w-sm">Each family of watches speaks a distinct language while sharing the same uncompromising soul.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c, i) => <CollectionCard key={c.id} {...c} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}
