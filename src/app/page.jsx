import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  X, Menu, ArrowRight, ChevronDown, ChevronLeft, ChevronRight,
  MessageCircle, Star, Check, Send, Copy, ExternalLink,
  Instagram, Heart, Sparkles, TrendingUp, Users, Download, Crown, Dumbbell, Apple,
  Shield, Award, Play, Mail, MapPin, Utensils, Video,
  Clipboard, CheckCircle, Target, Flame,
} from 'lucide-react';
import NumberTicker from '@/components/NumberTicker';
import MagneticButton from '@/components/MagneticButton';

/* --- MEDIA --- */
const ELY_VIDEO = 'https://video.wixstatic.com/video/4cd4b0_9626817c7320447ea40f07a27ebc5934/720p/mp4/file.mp4';
const HERO_VIDEO_DESKTOP = '/hero-bg-1.mp4';
const ELY_MODAL = 'https://static.wixstatic.com/media/4cd4b0_a7d6132da9c84d41a3bed4a1d5f77922~mv2.webp/v1/fill/w_800,h_1020,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ELYFITNESS_MINIATURA_CAMPUS%20POWER%202025.webp';

const IMG = {
  food2: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400&q=85',
  gym1: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&q=85',
  gym2: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=1400&q=85',
  gym3: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1400&q=85',
  running: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1400&q=85',
  lifestyle1: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&q=85',
  community: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&q=85',
};

/* --- ANIMATIONS --- */
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } };
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

/* =================== NAVBAR (V6 - minimal, 4 links + CTA) =================== */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { href: '#planes', label: 'PLANES' },
    { href: '#resultados', label: 'RESULTADOS' },
    { href: '#prozis', label: 'PROZIS' },
    { href: '#contacto', label: 'CONTACTO' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${scrolled ? 'bg-[#FCF3EF]/90 backdrop-blur-xl border-b border-dark/8 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2">
          <span className={`text-xl font-black tracking-tight transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>ELY</span>
          <span className={`text-[7px] font-bold uppercase leading-tight transition-colors ${scrolled ? 'text-primary-dark' : 'text-primary'}`}>FITNESS<br />&amp; NUTRITION</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide transition-all ${scrolled ? 'text-dark/55 hover:text-dark hover:bg-dark/5' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="ml-2 inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wide transition-all shadow-sm">
            Empezar <ArrowRight size={11} />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`md:hidden p-1 transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-cream/98 backdrop-blur-xl border-t border-dark/8 px-6 pb-5">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block font-bold text-sm uppercase py-3 border-b border-dark/8 last:border-0 text-dark/70">{l.label}</a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold text-sm uppercase">
              Empieza tu cambio <ArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* =================== HERO (V6 - video background from V4 manifesto style) =================== */
function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={ELY_VIDEO} />
      </div>
      <div className="absolute inset-0 bg-dark/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/40" />

      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 text-[11px] font-bold text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                Dietista & Entrenadora Personal IFBB
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.9] mb-4">
              Tu mejor version <span className="text-gradient">no se compra.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/50 text-sm sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Se construye. Con constancia, con un plan real y con alguien que te acompane en cada paso.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
              <MagneticButton href="#planes" className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40">
                VER PLANES Y PRECIOS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <a href="#contacto" className="group inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-all">
                CONTACTAR
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center gap-10">
              {[
                { v: 13, s: '+', l: 'Anos exp.' },
                { v: 4, s: 'K+', l: 'Cambios' },
                { v: 400, s: 'K+', l: 'Comunidad' },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white"><NumberTicker value={s.v} suffix={s.s} /></div>
                  <div className="text-white/30 text-[9px] font-semibold uppercase tracking-widest">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =================== COACHING PLANS (V6 - clear, with pricing anchor) =================== */
function Plans() {
  const planes = [
    {
      n: '01', name: 'PREMIUM PLUS', popular: true, img: IMG.gym1,
      desc: 'Coaching integral: alimentacion + entreno + suplementacion.',
      bullets: ['Plan 100% personalizado conmigo', 'Chat VIP diario', 'Seguimiento quincenal', 'Ajustes constantes de progreso'],
      highlights: ['Alimentacion', 'Entreno', 'Chat VIP'],
    },
    {
      n: '02', name: 'PREMIUM RUNNING', img: IMG.running,
      desc: 'Para corredoras: nutricion + entrenamiento para carreras.',
      bullets: ['Plan personalizado para carreras', 'Chat VIP diario', 'Seguimiento quincenal', '5K, 10K, Maraton, Ultras'],
      highlights: ['Alimentacion', 'Running', 'Chat VIP'],
    },
    {
      n: '03', name: 'NUTRICION', img: IMG.food2,
      desc: 'Solo alimentacion y suplementacion personalizada.',
      bullets: ['Plan alimentacion personalizado', 'Chat VIP diario', 'Seguimiento quincenal', 'Control hambre y saciedad'],
      highlights: ['Alimentacion', 'Chat VIP'],
    },
    {
      n: '04', name: 'TRAINING', img: IMG.gym2,
      desc: 'Solo entrenamiento personalizado.',
      bullets: ['Plan entrenamiento personalizado', 'Chat VIP diario', 'Seguimiento quincenal', 'Readaptacion a lesiones'],
      highlights: ['Entreno', 'Chat VIP'],
    },
  ];

  return (
    <section id="planes" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
            <Crown size={12} className="text-primary-dark" />
            <span className="text-[11px] font-bold text-primary-dark uppercase tracking-wider">Coaching 1 a 1 con Ely</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black uppercase">Elige tu <span className="text-gradient">plan</span></motion.h2>
          <motion.p variants={fadeUp} className="text-dark/40 text-sm mt-2 max-w-md mx-auto">Acompanamiento diario, dieta y entreno adaptado a ti. Sin permanencia.</motion.p>
          <motion.div variants={fadeUp} className="mt-4 inline-flex items-center gap-2 text-sm text-dark/45">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
            Plazas limitadas
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {planes.map(p => (
            <motion.a key={p.name} href="#contacto" variants={fadeUp} className={`group block bg-white rounded-2xl border p-5 hover:shadow-xl transition-all duration-400 relative ${p.popular ? 'border-primary/30 shadow-lg ring-1 ring-primary/10' : 'border-dark/8 hover:-translate-y-1'}`}>
              {p.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] font-bold uppercase px-3 py-1 rounded-full tracking-wider shadow-md">Popular</span>
              )}

              <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-4 mt-1">
                <div className={`w-full h-full rounded-full overflow-hidden border-[3px] shadow-md transition-all ${p.popular ? 'border-primary/40 glow-ring' : 'border-dark/10 group-hover:border-primary/25'}`}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-dark flex items-center justify-center shadow">
                  <span className="text-white font-black text-[10px]">{p.n}</span>
                </div>
              </div>

              <h3 className="font-black uppercase text-xs sm:text-sm text-center mb-1 group-hover:text-primary-dark transition-colors">{p.name}</h3>
              <p className="text-[10px] sm:text-[11px] text-dark/40 text-center mb-3 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {p.highlights.map(h => (
                  <span key={h} className="inline-flex items-center gap-0.5 bg-cream text-dark/45 text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full">
                    <Check size={7} className="text-primary" /> {h}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5 mb-4">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-dark/50 leading-snug">
                    <Check size={10} className="text-primary shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className={`w-full text-center py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-all ${p.popular ? 'bg-primary text-white shadow-sm' : 'bg-dark text-white'}`}>
                Quiero este plan
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2">
          {['Sin permanencia', 'Chat VIP diario', 'Adaptado a patologias', 'Todo en APP'].map(f => (
            <span key={f} className="inline-flex items-center gap-1.5 bg-white border border-dark/8 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-dark/45">
              <Check size={10} className="text-primary" /> {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================== APP SECTION (V6 - compact, pricing clear) =================== */
function AppSection() {
  const APP_VIDEO = 'https://video.wixstatic.com/video/4cd4b0_d9ff65c4b76343a6988372fccb6cc847/720p/mp4/file.mp4';
  const features = [
    { t: 'Plan alimentacion', icon: <Utensils size={13} /> },
    { t: 'Entrenos en video', icon: <Video size={13} /> },
    { t: 'Recetas cada mes', icon: <Flame size={13} /> },
    { t: 'Comunidad privada', icon: <Users size={13} /> },
    { t: 'Chat con nutri', icon: <MessageCircle size={13} /> },
    { t: 'Lista de la compra', icon: <Clipboard size={13} /> },
  ];

  return (
    <section id="app" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.gym3} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/88" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-dark/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_auto] items-stretch">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-3 py-1 mb-4">
                <Download size={11} className="text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">ElyFitness APP</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-1">Tu plan a tu ritmo</h2>
              <p className="text-white/35 text-sm mb-6">Entrenos, recetas y comunidad. Pago unico, sin permanencia.</p>

              <div className="flex flex-wrap items-end gap-5 mb-6">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">59&#8364;</span>
                    <span className="text-sm text-white/30 font-semibold">/ano</span>
                  </div>
                  <p className="text-xs text-white/30 mt-0.5">Solo 4,92 &#8364;/mes</p>
                </div>
                <div className="bg-primary/15 border border-primary/25 rounded-xl px-4 py-2.5 pulse-glow">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-bold uppercase text-primary tracking-wider">Pack Duo</span>
                    <span className="bg-primary text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full">Popular</span>
                  </div>
                  <p className="text-xl font-black text-white">69&#8364; <span className="text-xs text-white/35">/2 personas</span></p>
                </div>
              </div>

              <div className="gradient-line mb-6" />

              <div className="grid grid-cols-2 gap-x-5 gap-y-2.5 mb-6">
                {features.map(f => (
                  <div key={f.t} className="flex items-center gap-2.5">
                    <span className="text-primary">{f.icon}</span>
                    <span className="text-sm text-white/55">{f.t}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <MagneticButton href="https://www.bejao.fit/checkout?tribeId=381&typeProduct=DIT" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-dark px-8 py-3.5 rounded-full font-bold text-sm uppercase hover:bg-cream hover:shadow-lg transition-all group">
                  EMPIEZA YA <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <a href="#contacto" className="inline-flex items-center gap-2 border border-white/15 text-white/50 hover:text-white hover:border-white/30 px-6 py-3.5 rounded-full font-bold text-xs uppercase transition-all">
                  Tengo dudas
                </a>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center px-8 py-8 bg-white/[0.03]">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} className="w-40 bg-gradient-to-b from-white/12 to-white/5 backdrop-blur-sm rounded-[1.8rem] p-2 shadow-2xl border border-white/12">
                <div className="rounded-[1.4rem] aspect-[9/16] overflow-hidden bg-[#1a1a1a]">
                  <video src={APP_VIDEO} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <p className="text-[9px] text-white/20 mt-3">iOS y Android</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================== COMPARISON TABLE (V6 - NEW, Coaching vs APP side by side) =================== */
function ComparisonTable() {
  const rows = [
    { label: 'Que es', coaching: 'Coaching 1 a 1 con Ely', app: 'APP con plan de entreno y recetas' },
    { label: 'Seguimiento', coaching: 'Chat diario + revision quincenal', app: 'Autonomo, a tu ritmo' },
    { label: 'Personalizacion', coaching: '100% adaptado a ti', app: 'Planes generales de calidad' },
    { label: 'Precio', coaching: 'Consultar (mensual/trim/sem)', app: '59 EUR/ano (4,92 EUR/mes)' },
    { label: 'Ideal para', coaching: 'Resultados rapidos con acompanamiento', app: 'Entrenar por tu cuenta con guia' },
  ];

  return (
    <section className="py-12 sm:py-14 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-8">
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-black uppercase">Coaching vs APP — <span className="text-gradient">cual elijo?</span></motion.h2>
          <motion.p variants={fadeUp} className="text-dark/40 text-xs mt-1">Compara de un vistazo y elige lo que mejor se adapta a ti.</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-2xl border border-dark/8 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-dark/8">
            <div className="p-3 sm:p-4" />
            <div className="p-3 sm:p-4 text-center border-l border-dark/8 bg-primary/5">
              <div className="inline-flex items-center gap-1.5 mb-1">
                <Crown size={11} className="text-primary-dark" />
                <span className="text-[10px] sm:text-xs font-black uppercase text-primary-dark">Coaching</span>
              </div>
              <p className="text-[9px] text-dark/30 hidden sm:block">Personalizado 1 a 1</p>
            </div>
            <div className="p-3 sm:p-4 text-center border-l border-dark/8">
              <div className="inline-flex items-center gap-1.5 mb-1">
                <Download size={11} className="text-dark/50" />
                <span className="text-[10px] sm:text-xs font-black uppercase text-dark/70">APP</span>
              </div>
              <p className="text-[9px] text-dark/30 hidden sm:block">Entrena a tu ritmo</p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-[1fr_1fr_1fr] ${i < rows.length - 1 ? 'border-b border-dark/5' : ''}`}>
              <div className="p-3 sm:p-4 flex items-center">
                <span className="text-[10px] sm:text-xs font-bold text-dark/50 uppercase tracking-wide">{r.label}</span>
              </div>
              <div className="p-3 sm:p-4 border-l border-dark/5 bg-primary/[0.02]">
                <span className="text-[10px] sm:text-xs text-dark/60 leading-snug">{r.coaching}</span>
              </div>
              <div className="p-3 sm:p-4 border-l border-dark/5">
                <span className="text-[10px] sm:text-xs text-dark/60 leading-snug">{r.app}</span>
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-dark/8 bg-cream/50">
            <div className="p-3 sm:p-4" />
            <div className="p-3 sm:p-4 border-l border-dark/8 text-center">
              <a href="#contacto" className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase transition-all">
                Consultar <ArrowRight size={10} />
              </a>
            </div>
            <div className="p-3 sm:p-4 border-l border-dark/8 text-center">
              <a href="https://www.bejao.fit/checkout?tribeId=381&typeProduct=DIT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-dark hover:bg-dark-soft text-white px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase transition-all">
                59&#8364;/ano <ArrowRight size={10} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =================== TRANSFORMATIONS (V6 - with filter tabs from V4) =================== */
function Transformations() {
  const [filter, setFilter] = useState('todos');
  const data = [
    { name: 'C.B.', result: '-20 kg', text: 'He perdido mas de 20 kg de forma saludable. No paso hambre y he vuelto a mirarme al espejo con orgullo.', before: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80', after: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', plan: 'coaching' },
    { name: 'V.M.', result: 'Recomposicion', text: 'Baje muchisimo volumen en abdomen y piernas, y hoy me siento fuerte, segura y feliz.', before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', after: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80', plan: 'coaching' },
    { name: 'M.M.', result: 'Sin medicacion', text: 'Hoy vivo sin medicacion, con mas salud y autoestima. He bajado de peso mejorando masa muscular.', before: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&q=80', after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80', plan: 'coaching' },
    { name: 'T.H.', result: '-4.5 kg / 4 sem', text: 'He recuperado la menstruacion. He aprendido a comer y a disfrutar sin culpa.', before: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80', after: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&q=80', plan: 'coaching' },
    { name: 'S.B.', result: 'Hibrido', text: 'Combinar fuerza y resistencia me ha dado un cuerpo mas eficiente y una mente mas fuerte.', before: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80', after: IMG.gym1, plan: 'coaching' },
    { name: 'L.R.', result: '+Fuerza', text: 'Con la APP entreno 4 veces por semana. He ganado fuerza y confianza sin gastar mucho.', before: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', after: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80', plan: 'app' },
    { name: 'A.G.', result: '-8 kg', text: 'El plan anual de la APP me cambio la vida. Recetas faciles y entrenos que puedo seguir desde casa.', before: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&q=80', after: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80', plan: 'app' },
  ];

  const filtered = filter === 'todos' ? data : data.filter(d => d.plan === filter);
  const tabs = [
    { key: 'todos', label: 'Todos' },
    { key: 'coaching', label: 'Coaching' },
    { key: 'app', label: 'APP' },
  ];

  return (
    <section id="resultados" className="py-14 sm:py-16 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-black uppercase">+4.000 cambios <span className="text-gradient">reales</span></motion.h2>
            <motion.p variants={fadeUp} className="text-dark/40 text-sm mt-1">Sin atajos. Solo constancia y un plan real.</motion.p>
          </div>
          <motion.div variants={fadeUp} className="flex gap-1.5">
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setFilter(tab.key)} className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-all ${filter === tab.key ? 'bg-dark text-white shadow-sm' : 'bg-white border border-dark/10 text-dark/40 hover:text-dark/60'}`}>
                {tab.label}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee-cards flex gap-4" style={{ width: 'max-content' }}>
          {[...filtered, ...filtered, ...filtered].map((t, i) => (
            <div key={i} className="min-w-[260px] max-w-[260px] rounded-xl overflow-hidden shrink-0 bg-white border border-dark/8 shadow-sm">
              <div className="grid grid-cols-2 gap-px bg-dark/10">
                <div className="relative h-36 overflow-hidden">
                  <img src={t.before} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-1.5 left-1.5 bg-white/85 text-dark text-[8px] font-bold uppercase px-2 py-0.5 rounded-full">Antes</span>
                </div>
                <div className="relative h-36 overflow-hidden">
                  <img src={t.after} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-1.5 right-1.5 bg-primary text-white text-[8px] font-bold uppercase px-2 py-0.5 rounded-full">Despues</span>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-dark uppercase">{t.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full ${t.plan === 'coaching' ? 'bg-primary/10 text-primary-dark' : 'bg-dark/5 text-dark/40'}`}>{t.plan === 'coaching' ? 'Coaching' : 'APP'}</span>
                    <span className="text-primary font-bold text-[10px]">{t.result}</span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(j => <Star key={j} size={9} className="fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-[10px] text-dark/45 leading-relaxed line-clamp-2">&quot;{t.text}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================== PROZIS (V6 - copy-to-clipboard + products) =================== */
const PROZIS_PRODUCTS = [
  { name: 'Creatina Micropure', desc: 'Rendimiento, recuperacion y foco cognitivo.', img: 'https://static.sscontent.com/thumb/1000/1000/products/124/v1698746_prozis_creatine-micronpure-300g_newin.webp', url: 'https://www.prozis.com/es/es/prozis/creatina-micronpure-300-g/?ot=AFFES2777&utm_source=prz_affiliate&utm_medium=referral&utm_campaign=el_es_ib_pr_af&utm_content=product' },
  { name: 'Colageno PeptiPlus', desc: 'Articulaciones, piel y recuperacion muscular.', img: 'https://static.sscontent.com/thumb/1000/1000/products/124/v1708709_prozis_peptiplus-hydrolyzed-collagen-protein-900g_newin.webp', url: 'https://www.prozis.com/es/es/?ot=AFFES2777&utm_source=prz_affiliate&utm_medium=referral&utm_campaign=el_es_ib_pr_af' },
  { name: 'Ely x Prozis', desc: 'Mi seleccion de suplementos y ropa favorita.', img: 'https://static.wixstatic.com/media/daf224_4c28ae1a03584cb6aea95c0817480351~mv2.png/v1/fill/w_358,h_478,q_90,enc_avif,quality_auto/daf224_4c28ae1a03584cb6aea95c0817480351~mv2.png', url: 'https://www.prozis.com/es/es/?ot=AFFES2777&utm_source=prz_affiliate&utm_medium=referral&utm_campaign=el_es_ib_pr_af' },
  { name: 'Duffle Backpack 35L', desc: 'Mochila deportiva. Ideal para el gym.', img: 'https://static.sscontent.com/thumb/500/500/products/124/v1499995_prozis_core-workout-duffle-backpack-35l-black_single-size_black_other2.webp', url: 'https://www.prozis.com/es/es/?ot=AFFES2777&utm_source=prz_affiliate&utm_medium=referral&utm_campaign=el_es_ib_pr_af' },
  { name: 'Guantes Minimalist', desc: 'Agarre y proteccion para entrenar.', img: 'https://static.sscontent.com/thumb/1000/1000/products/124/v1498172_prozis_minimalist-padded-gloves-black_s_black_newin.webp', url: 'https://www.prozis.com/es/es/?ot=AFFES2777&utm_source=prz_affiliate&utm_medium=referral&utm_campaign=el_es_ib_pr_af' },
  { name: 'Suplementacion Top', desc: 'Omega 3, magnesio, vitaminas. Lo que uso a diario.', img: IMG.lifestyle1, url: 'https://www.prozis.com/es/es/?ot=AFFES2777&utm_source=prz_affiliate&utm_medium=referral&utm_campaign=el_es_ib_pr_af' },
];

function Prozis() {
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef(null);
  const copyCode = () => { navigator.clipboard.writeText('ELY').then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }); };
  const scroll = (dir) => { scrollRef.current?.scrollBy({ left: dir * 216, behavior: 'smooth' }); };

  return (
    <section id="prozis" className="py-12 sm:py-14 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-6">
          <div className="bg-dark rounded-2xl p-5 sm:p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-primary/8 pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white"><span className="text-gradient">10% dto</span> en Prozis</h2>
                <p className="text-white/40 text-xs sm:text-sm mt-0.5">Suplementos, ropa y accesorios con mi codigo exclusivo</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button onClick={copyCode} className={`bg-white/10 border-2 border-dashed border-primary/50 rounded-xl px-5 py-2.5 text-center hover:bg-white/15 transition-all ${copied ? 'copy-pop' : ''}`}>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/35 mb-0.5">Codigo</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-primary tracking-wider">ELY</span>
                    {copied ? <CheckCircle size={14} className="text-[#34d399]" /> : <Copy size={12} className="text-white/25" />}
                  </div>
                  <p className="text-[8px] text-white/20 mt-0.5">{copied ? 'Copiado!' : 'Click para copiar'}</p>
                </button>
                <a href="https://www.prozis.com/es/es/?ot=AFFES2777&utm_source=prz_affiliate&utm_medium=referral&utm_campaign=el_es_ib_pr_af" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-full font-bold text-sm uppercase transition-all group">
                  Ir a Prozis <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="hidden sm:flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-dark/35">Productos recomendados</p>
            <div className="flex gap-1.5">
              <button onClick={() => scroll(-1)} className="w-8 h-8 rounded-full border border-dark/10 flex items-center justify-center hover:bg-dark hover:text-white transition-all"><ChevronLeft size={14} /></button>
              <button onClick={() => scroll(1)} className="w-8 h-8 rounded-full border border-dark/10 flex items-center justify-center hover:bg-dark hover:text-white transition-all"><ChevronRight size={14} /></button>
            </div>
          </div>

          <div ref={scrollRef} className="hidden sm:flex gap-3 overflow-x-auto scroll-smooth pb-1 scrollbar-hide">
            {PROZIS_PRODUCTS.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl border border-dark/8 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all shrink-0 w-[180px]">
                <div className="relative aspect-square bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-400" loading="lazy" />
                  <div className="absolute top-1.5 right-1.5 bg-primary text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">-10%</div>
                </div>
                <div className="p-2.5">
                  <h4 className="font-bold text-xs text-dark truncate">{p.name}</h4>
                  <p className="text-[10px] text-dark/40 leading-snug line-clamp-1">{p.desc}</p>
                  <span className="inline-flex items-center gap-0.5 text-primary-dark text-[9px] font-bold mt-1">Ver <ExternalLink size={8} /></span>
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 sm:hidden">
            {PROZIS_PRODUCTS.slice(0, 6).map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg border border-dark/8 overflow-hidden active:scale-[0.97] transition-transform">
                <div className="relative aspect-square bg-gradient-to-b from-gray-50 to-gray-100">
                  <img src={p.img} alt={p.name} className="w-full h-full object-contain p-2" loading="lazy" />
                  <div className="absolute top-1 right-1 bg-primary text-white text-[7px] font-bold px-1 py-0.5 rounded-full">-10%</div>
                </div>
                <div className="p-1.5">
                  <h4 className="font-bold text-[10px] text-dark truncate">{p.name}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================== FAQ (V6 - 5 essential questions) =================== */
function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'Coaching vs APP, cual es para mi?', a: 'Coaching = seguimiento 1:1 conmigo, chat diario, ajustes constantes. Ideal si quieres resultados rapidos y personalizados. La APP = plan economico con entrenos, recetas y comunidad a tu ritmo (59 euros/ano).' },
    { q: 'Cuando empiezo a ver resultados?', a: 'La mayoria nota cambios en 2-4 semanas: menos hinchazon, mas energia. Resultados visibles significativos entre 2-3 meses.' },
    { q: 'Tengo intolerancias, me sirve?', a: 'Adapto absolutamente todo: SIBO, SOP, tiroides, embarazo, lactancia, intolerancias. Reviso tus analiticas para personalizar al 100%.' },
    { q: 'Hay permanencia?', a: 'No. El coaching no tiene permanencia, puedes cancelar cuando quieras. La APP es pago unico anual.' },
    { q: 'Como empiezo?', a: 'Completa el formulario de contacto justo abajo, indicame que plan te interesa y tu objetivo. Te respondo en menos de 24 horas.' },
  ];

  return (
    <section className="py-12 sm:py-14 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-black uppercase text-center mb-6">Preguntas <span className="text-gradient">frecuentes</span></h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className={`bg-cream rounded-xl overflow-hidden transition-all ${open === i ? 'shadow-sm border-l-3 border-l-primary border border-primary/20' : 'border border-dark/8'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left gap-3">
                <span className="font-bold text-sm text-dark">{f.q}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${open === i ? 'bg-primary text-white rotate-180' : 'bg-dark/5 text-dark/30'}`}>
                  <ChevronDown size={12} />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm text-dark/50 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================== CONTACT (V6 - prominent, form + direct links) =================== */
function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 5000); };

  return (
    <section id="contacto" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.community} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/82" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black uppercase text-white mb-2">Empieza tu <span className="text-gradient">cambio</span></motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-sm mb-6">Elegi tu plan y escribime. Respondo en menos de 24h.</motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-8">
            <a href="mailto:contacta@elyfitness.es" className="inline-flex items-center gap-2 bg-white/10 border border-white/15 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold transition-all">
              <Mail size={14} /> contacta@elyfitness.es
            </a>
            <a href="https://www.instagram.com/ely_fitness/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 border border-white/15 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold transition-all">
              <Instagram size={14} /> @ely_fitness
            </a>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-white rounded-2xl p-8 text-center shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-black mb-1">Mensaje enviado!</h3>
              <p className="text-dark/50 text-sm">Te respondere en menos de 24 horas.</p>
            </motion.div>
          ) : (
            <motion.form key="form" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-white rounded-2xl p-6 sm:p-8 space-y-3 text-left shadow-2xl" onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap-2 mb-1">
                {['Respuesta < 24h', 'Sin compromiso', '+4K confian'].map(t => (
                  <span key={t} className="inline-flex items-center gap-1 text-[9px] font-bold text-dark/30 bg-cream px-2 py-0.5 rounded-full">
                    <Check size={8} className="text-[#34d399]" /> {t}
                  </span>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <motion.input variants={fadeUp} type="text" placeholder="Tu nombre" required className="bg-cream border border-dark/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/15 w-full transition-all placeholder:text-dark/30" />
                <motion.input variants={fadeUp} type="email" placeholder="Tu e-mail" required className="bg-cream border border-dark/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/15 w-full transition-all placeholder:text-dark/30" />
              </div>
              <motion.select variants={fadeUp} className="bg-cream border border-dark/8 rounded-xl px-4 py-3 text-sm text-dark/50 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/15 w-full transition-all">
                <option>Que plan te interesa?</option>
                <option>Premium Plus</option><option>Premium Running</option><option>Nutricion</option><option>Training</option>
                <option>ElyFitness APP (59&#8364;/ano)</option><option>Pack Duo (69&#8364;/ano)</option><option>Otra consulta</option>
              </motion.select>
              <motion.textarea variants={fadeUp} rows={3} placeholder="Cuentame tu objetivo..." className="bg-cream border border-dark/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/15 w-full resize-none transition-all placeholder:text-dark/30" />
              <motion.div variants={fadeUp} className="text-center pt-1">
                <button type="submit" className="group bg-primary hover:bg-primary-dark text-white px-10 py-3.5 rounded-full font-bold text-sm uppercase inline-flex items-center gap-2 transition-all shadow-lg shadow-primary/25">
                  <Send size={13} /> Enviar mensaje
                </button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* =================== FOOTER (V6 - with inline newsletter) =================== */
function Footer() {
  const [email, setEmail] = useState('');
  const [sub, setSub] = useState(false);
  const handleSub = (e) => { e.preventDefault(); setSub(true); setEmail(''); setTimeout(() => setSub(false), 3000); };

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Newsletter inline */}
        <div className="py-8 border-b border-white/8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-black">Newsletter de Ely</h3>
              <p className="text-white/35 text-xs">Consejos de nutricion y entreno cada semana.</p>
            </div>
            <form onSubmit={handleSub} className="flex gap-2 w-full sm:w-auto">
              {sub ? (
                <span className="text-[#34d399] text-sm font-bold flex items-center gap-1.5"><CheckCircle size={14} /> Suscrit@!</span>
              ) : (
                <>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Tu email" required className="bg-white/8 border border-white/8 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-primary/25 placeholder:text-white/25 w-full sm:w-56" />
                  <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shrink-0">OK</button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="py-8 grid grid-cols-2 sm:grid-cols-3 gap-8 border-b border-white/8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-black">ELY</span>
              <span className="text-[7px] font-bold uppercase leading-tight text-primary">FITNESS<br />&amp; NUTRITION</span>
            </div>
            <p className="text-white/35 text-[11px] leading-relaxed max-w-[200px]">Dietista y Entrenadora Personal IFBB. +13 anos online.</p>
            <div className="flex items-center gap-1.5 text-white/25 text-[10px] mt-2"><MapPin size={10} /> Espana - Online</div>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase text-white/40 mb-3 tracking-widest">Links</p>
            <div className="space-y-1.5">
              {[
                { href: '#planes', label: 'Planes' },
                { href: '#app', label: 'APP Fitness' },
                { href: '#resultados', label: 'Resultados' },
                { href: '#prozis', label: 'Prozis' },
                { href: '#contacto', label: 'Contacto' },
              ].map(l => <a key={l.href} href={l.href} className="block text-white/40 hover:text-white/60 text-xs transition-colors">{l.label}</a>)}
            </div>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase text-white/40 mb-3 tracking-widest">Redes</p>
            <div className="flex gap-2 mb-4">
              {[
                { icon: <Instagram size={12} />, url: 'https://www.instagram.com/ely_fitness/' },
                { icon: <Play size={12} />, url: 'https://www.youtube.com/@ely_fitness' },
                { icon: <Heart size={12} />, url: 'https://www.tiktok.com/@ely_fitness' },
              ].map((r, i) => (
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/8 hover:bg-primary/20 flex items-center justify-center text-white/50 hover:text-primary transition-all">{r.icon}</a>
              ))}
            </div>
            <p className="text-white/30 text-[10px]">Codigo <span className="text-primary font-bold">ELY</span> 10% dto en <a href="https://www.prozis.com/es/es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Prozis</a></p>
          </div>
        </div>

        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/30">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/50">Condiciones</a>
            <a href="#" className="hover:text-white/50">Privacidad</a>
            <a href="#" className="hover:text-white/50">Cookies</a>
          </div>
          <p>&copy; {new Date().getFullYear()} ELY FITNESS</p>
        </div>
      </div>
    </footer>
  );
}

/* =================== CHAT WIDGET (V6 - simple, no WhatsApp) =================== */
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const options = [
    { label: 'Quiero contratar un plan', href: '#contacto', icon: <Sparkles size={12} /> },
    { label: 'Ver planes y precios', href: '#planes', icon: <Crown size={12} /> },
    { label: 'Enviar email', href: 'mailto:contacta@elyfitness.es', external: true, icon: <Mail size={12} /> },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.95 }} className="absolute bottom-14 right-0 w-64 bg-white rounded-xl shadow-2xl border border-dark/10 overflow-hidden mb-2">
            <div className="bg-dark p-3.5">
              <p className="text-white font-bold text-sm">En que te ayudo?</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                <span className="text-white/35 text-[10px]">Online</span>
              </div>
            </div>
            <div className="p-2 space-y-1">
              {options.map(o => (
                <a key={o.label} href={o.href} target={o.external ? '_blank' : undefined} rel={o.external ? 'noopener noreferrer' : undefined} onClick={() => setOpen(false)} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-cream hover:bg-primary/10 transition-colors">
                  <span className="text-primary">{o.icon}</span>
                  <span className="text-sm font-medium text-dark/65">{o.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${open ? 'bg-dark text-white' : 'bg-primary text-white hover:bg-primary-dark shadow-primary/30'}`}>
        {open ? <X size={18} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}

/* =================== NEWSLETTER MODAL (V6 - delayed popup) =================== */
function NewsletterModal() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setShow(true), 15000);
    return () => clearTimeout(t);
  }, [dismissed]);

  const close = () => { setShow(false); setDismissed(true); };
  const submit = (e) => { e.preventDefault(); setDone(true); setTimeout(close, 2500); };

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-50" onClick={close} />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ type: 'spring', damping: 25 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="bg-cream rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto relative p-7 sm:p-8">
              <button onClick={close} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-dark/5"><X size={14} /></button>

              {done ? (
                <div className="text-center py-4">
                  <CheckCircle size={36} className="text-[#34d399] mx-auto mb-3" />
                  <h3 className="text-lg font-black">Bienvenid@!</h3>
                  <p className="text-sm text-dark/40">Revisa tu email.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl sm:text-2xl font-black leading-tight mb-2">Consejos gratis de nutricion y entreno</h3>
                  <p className="text-sm text-dark/40 mb-5">Apuntate a mi newsletter semanal. Sin spam.</p>
                  <form onSubmit={submit} className="space-y-2.5">
                    <input type="text" placeholder="Tu nombre" required className="w-full bg-white border border-dark/8 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary/25" />
                    <input type="email" placeholder="Tu email" required className="w-full bg-white border border-dark/8 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary/25" />
                    <button type="submit" className="w-full bg-dark hover:bg-dark-soft text-white py-3 rounded-lg font-bold text-sm uppercase transition-all">Suscribirme</button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* =================== PAGE (V6 - optimized conversion flow) =================== */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Plans />
      <AppSection />
      <ComparisonTable />
      <Transformations />
      <Prozis />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
      <NewsletterModal />
    </>
  );
}
