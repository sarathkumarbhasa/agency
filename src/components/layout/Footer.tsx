import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brutal-black text-brutal-white">
      {/* Yellow top bar */}
      <div className="h-2 bg-brutal-yellow w-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div>
            <h3 className="font-display font-bold text-2xl mb-2">DEVCRAFT_</h3>
            <p className="font-body text-sm italic text-brutal-gray mb-6">
              We build websites. Not decks.
            </p>
            <div className="flex gap-4 font-display text-sm font-bold">
              {['TW', 'LI', 'IG', 'GH'].map((s) => (
                <a key={s} href="#" className="hover:text-brutal-yellow" style={{ transitionDuration: '0ms' }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-4 text-brutal-yellow">
              SERVICES
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#services" className="hover:text-brutal-yellow" style={{ transitionDuration: '0ms' }}>Static Websites</a></li>
              <li><a href="#services" className="hover:text-brutal-yellow" style={{ transitionDuration: '0ms' }}>Dynamic Websites</a></li>
              <li><a href="#contact" className="hover:text-brutal-yellow" style={{ transitionDuration: '0ms' }}>Free Consultation</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-4 text-brutal-yellow">
              CONTACT
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li>hello@devcraft.agency</li>
              <li>+91 98765 43210</li>
              <li>Nellore, Andhra Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#333] mt-12 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-display text-xs text-brutal-gray">© 2025 DEVCRAFT_AGENCY</span>
          <span className="font-display text-xs text-brutal-gray">PRIVACY / TERMS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
