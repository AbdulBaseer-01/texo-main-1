'use client'
import React, { useState, useMemo, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Merriweather } from 'next/font/google';
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  ArrowUpRight,
  ChevronDown,
  X,
  Building2,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

// ─── DATA ────────────────────────────────────────────────────────────────────

const departments = ['All', 'Operations', 'Logistics', 'Sales', 'Creative', 'Finance', 'Engineering', 'HR'];
const jobTypes = ['All Types', 'Full-Time', 'Part-Time', 'Contract'];

const jobs = [
  {
    id: 1,
    title: 'Production Supervisor / Engineer',
    department: 'Operations',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: 'Just posted',
    description:
      'Lead production workflows, ensure quality control, and support modular manufacturing processes in a fast-moving prefab environment.',
    tags: ['Production', 'Manufacturing', 'Quality'],
    urgent: true,
  },
  {
    id: 2,
    title: 'Warehouse & Inventory Manager',
    department: 'Logistics',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '3 days ago',
    description:
      'Manage inventory, warehouse operations, and material flow for prefab production with accuracy and efficiency.',
    tags: ['Inventory', 'Warehouse', 'Logistics'],
    urgent: false,
  },
  {
    id: 3,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: 'Just posted',
    description:
      'Drive business development, manage client relationships, and close sales for modular solutions and prefab projects.',
    tags: ['Sales', 'Business', 'Clients'],
    urgent: false,
  },
  {
    id: 4,
    title: 'CRM & Lead Manager',
    department: 'Sales',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '5 days ago',
    description:
      'Maintain lead pipelines, optimize CRM workflows, and support sales follow-up across construction and modular accounts.',
    tags: ['CRM', 'Leads', 'Sales'],
    urgent: false,
  },
  {
    id: 5,
    title: 'Video Editor, Shooter & Graphic Designer',
    department: 'Creative',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '1 week ago',
    description:
      'Create compelling video content, shoot project visuals, and design marketing assets for Texo Prefab World.',
    tags: ['Video', 'Design', 'Creative'],
    urgent: false,
  },
  {
    id: 6,
    title: 'Accountant',
    department: 'Finance',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '4 days ago',
    description:
      'Handle financial records, billing, vendor payments, and accounting processes for our modular construction business.',
    tags: ['Finance', 'Accounting', 'Billing'],
    urgent: false,
  },
  {
    id: 7,
    title: 'Design Engineer',
    department: 'Engineering',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '2 days ago',
    description:
      'Develop prefab design drawings, coordinate technical specs, and support modular design execution for projects.',
    tags: ['Design', 'Engineering', 'Drafting'],
    urgent: false,
  },
  {
    id: 8,
    title: 'HR Executive',
    department: 'HR',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '6 days ago',
    description:
      'Support recruitment, employee engagement, and HR administration for a growing prefab and construction team.',
    tags: ['HR', 'Recruiting', 'People'],
    urgent: false,
  },
];

const perks = [
  { icon: Building2, title: 'Modern Workspace', desc: 'State-of-the-art offices designed for collaboration.' },
  { icon: TrendingUp, title: 'Growth Track', desc: 'Structured learning paths and promotion cycles.' },
  { icon: Users, title: 'Diverse Team', desc: 'Work with top talent from across the industry.' },
  { icon: Award, title: 'Recognition', desc: 'Performance bonuses and quarterly awards.' },
];



// ─── JOB CARD ─────────────────────────────────────────────────────────────────

function JobCard({ job, index, onApply }: { job: (typeof jobs)[0]; index: number; onApply: (job: (typeof jobs)[0]) => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      className="group relative bg-white border border-[#886c46] hover:border-[#886c46]/30 rounded-2xl p-7 transition-all duration-400 hover:shadow-[0_8px_40px_-8px_rgba(136,108,70,0.15)] flex flex-col"
    >
      {/* Urgent badge */}
      {job.urgent && (
        <span className={`${merri.className} absolute top-5 right-5 text-[9px] tracking-[0.2em] uppercase text-[#886c46] bg-[#886c46]/8 px-2.5 py-1 rounded-full font-light border border-[#886c46]/15`}>
          Urgent
        </span>
      )}

      {/* Department pill */}
      <div className="flex items-center gap-2 mb-5">
        <span className={`${merri.className} inline-block text-[9px] tracking-[0.22em] uppercase text-black font-light`}>
          {job.department}
        </span>
        <span className="w-px h-3 bg-stone-200" />
        <span className={`${merri.className} text-[9px] tracking-[0.15em] uppercase text-black font-light`}>
          {job.posted}
        </span>
      </div>

      {/* Title */}
      <h3 className={`${playfair.className} text-black text-xl font-semibold leading-snug mb-3 group-hover:text-[#886c46] transition-colors duration-300 pr-16`}>
        {job.title}
      </h3>

      {/* Description */}
      <p className={`${merri.className} text-black text-sm font-light leading-relaxed mb-6 flex-1`}>
        {job.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className={`${merri.className} text-[10px] font-light text-black bg-stone-50 border border-stone-100 px-2.5 py-1 rounded-lg`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-4 mb-7 text-xs">
        {[
          { icon: MapPin, value: job.location },
          { icon: Clock, value: job.type },
          { icon: Briefcase, value: job.experience },
        ].map(({ icon: Icon, value }) => (
          <span key={value} className={`${merri.className} flex items-center gap-1.5 text-black font-light`}>
            <Icon size={12} className="text-[#886c46]/60 shrink-0" />
            {value}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between border-t border-stone-50 pt-5">
        <span className={`${merri.className} text-[10px] uppercase tracking-[0.2em] text-black font-light`}>
          #{String(job.id).padStart(3, '0')}
        </span>
        <motion.button
          whileHover={{ x: 2 }}
          onClick={() => onApply(job)}
          className={`${merri.className} group/btn flex items-center gap-2 text-xs font-light text-[#886c46] hover:text-stone-900 transition-colors duration-300`}
        >
          Apply Now
          <ArrowUpRight
            size={14}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
          />
        </motion.button>
      </div>

      {/* Bottom hover line */}
      <span className="absolute bottom-0 left-6 right-6 h-px bg-[#886c46]/0 group-hover:bg-[#886c46]/20 transition-all duration-500 rounded-full" />
    </motion.article>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  const [query, setQuery] = useState('');
  const [activeDept, setActiveDept] = useState('All');
  const [activeType, setActiveType] = useState('All Types');
  const [typeOpen, setTypeOpen] = useState(false);

  // const heroRef = useRef(null);
  // const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const perksRef = useRef(null);
  const perksInView = useInView(perksRef, { once: true, amount: 0.2 });

  const [applyPanelOpen, setApplyPanelOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery =
        query === '' ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
        job.department.toLowerCase().includes(query.toLowerCase());
      const matchesDept = activeDept === 'All' || job.department === activeDept;
      const matchesType = activeType === 'All Types' || job.type === activeType;
      return matchesQuery && matchesDept && matchesType;
    });
  }, [query, activeDept, activeType]);

  const openApplyPanel = (job: (typeof jobs)[0]) => {
    setSelectedJob(job);
    setApplyPanelOpen(true);
  };

  const closeApplyPanel = () => {
    setApplyPanelOpen(false);
    setSelectedJob(null);
  };

  return (
    <main className="min-h-screen bg-white pt-12 mt-2">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* <section
        ref={heroRef}
        className="relative bg-[#080808] overflow-hidden pt-28 pb-24"
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, #886c46 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#886c46]/10 rounded-full blur-[120px] pointer-events-none" />

        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #886c46 40%, #c9a97a 60%, transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <motion.p
            {...fadeUp(0.05)}
            animate={heroInView ? fadeUp(0.05).animate : fadeUp(0.05).initial}
            className={`${merri.className} text-[#886c46] text-[10px] tracking-[0.3em] uppercase font-light mb-5`}
          >
            Join Our Team
          </motion.p>

          <motion.h1
            {...fadeUp(0.12)}
            animate={heroInView ? fadeUp(0.12).animate : fadeUp(0.12).initial}
            className={`${playfair.className} text-white text-4xl md:text-6xl lg:text-7xl font-800 leading-[1.08] max-w-3xl mb-6`}
          >
            Build the Future
            <br />
            <span className="text-[#886c46]">With Us.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            animate={heroInView ? fadeUp(0.2).animate : fadeUp(0.2).initial}
            className={`${merri.className} text-white/40 font-light text-base md:text-lg max-w-xl leading-relaxed mb-12`}
          >
            Texo Prefab World is growing fast. We're looking for driven individuals who want to shape the way India builds.
          </motion.p>

          {/* Stats */}
          {/* <motion.div
            {...fadeUp(0.28)}
            animate={heroInView ? fadeUp(0.28).animate : fadeUp(0.28).initial}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: `${jobs.length}+`, label: 'Open Roles' },
              { value: '3', label: 'Departments Hiring' },
              { value: '200+', label: 'Team Members' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className={`${playfair.className} text-[#886c46] text-3xl font-700`}>{value}</p>
                <p className={`${merri.className} text-white/30 text-xs font-light tracking-wide mt-0.5`}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div> 
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white" />
      </section> */}

      {/* ── PERKS ─────────────────────────────────────────────────────────── */}
      <section ref={perksRef} className="max-w-7xl mx-auto px-6 md:px-16 mt-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {perks.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={perksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-stone-100 hover:border-[#886c46]/20 bg-stone-50/50 hover:bg-white transition-all duration-300 hover:shadow-[0_4px_24px_-4px_rgba(136,108,70,0.1)]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#886c46]/8 flex items-center justify-center mb-4 group-hover:bg-[#886c46]/14 transition-colors duration-300">
                <Icon size={16} className="text-[#886c46]" />
              </div>
              <p className={`${playfair.className} text-black text-base font-semibold mb-1`}>{title}</p>
              <p className={`${merri.className} text-black text-xs font-light leading-relaxed`}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SEARCH + FILTERS ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-6">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className={`${merri.className} text-[#886c46] text-[10px] tracking-[0.28em] uppercase font-light mb-1.5`}>
              8 Roles | Modular & Construction Industry
            </p>
            <h2 className={`${playfair.className} text-black text-3xl font-600`}>
              🏗️ Texo Prefab World is Hiring
            </h2>
          </div>
          <p className={`${merri.className} text-black text-sm font-light`}>
            Minimum 2 years experience in Construction / Modular background preferred.
          </p>
        </div>

        {/* Search + filters row */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">

          {/* Search input */}
          <div className="relative flex-1">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search by role, skill, or department…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`${merri.className} w-full pl-11 pr-10 py-3.5 text-sm font-light text-black placeholder:text-stone-300 bg-white border border-stone-150 rounded-xl focus:outline-none focus:border-[#886c46]/40 focus:ring-2 focus:ring-[#886c46]/8 transition-all duration-300`}
            />
            <AnimatePresence>
              {query && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-stone-100 text-black hover:bg-stone-200 transition-colors"
                >
                  <X size={11} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Job Type dropdown */}
          <div className="relative">
            <button
              onClick={() => setTypeOpen(!typeOpen)}
              className={`${merri.className} flex items-center gap-2 px-4 py-3.5 text-sm font-light text-black bg-white border border-stone-150 rounded-xl hover:border-[#886c46]/30 transition-all duration-300 min-w-37 justify-between`}
            >
              {activeType}
              <ChevronDown size={13} className={`transition-transform duration-200 ${typeOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {typeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 right-0 bg-white border border-stone-100 rounded-xl shadow-lg shadow-stone-100 overflow-hidden z-20"
                >
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => { setActiveType(type); setTypeOpen(false); }}
                      className={`${merri.className} w-full text-left px-4 py-2.5 text-sm font-light transition-colors duration-150 ${
                        activeType === type
                          ? 'text-[#886c46] bg-[#886c46]/5'
                          : 'text-black hover:bg-stone-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Department tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`${merri.className} relative text-xs font-light px-4 py-2 rounded-full border transition-all duration-300 ${
                activeDept === dept
                  ? 'text-white bg-[#886c46] border-[#886c46] shadow-[0_4px_14px_-2px_rgba(136,108,70,0.35)]'
                  : 'text-black border-stone-150 hover:border-[#886c46]/25 hover:text-stone-800 bg-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

      </section>

      {/* ── JOB GRID ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-28">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} onApply={openApplyPanel} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-5">
                <Search size={20} className="text-black" />
              </div>
              <p className={`${playfair.className} text-black text-xl font-500 mb-2`}>No positions found</p>
              <p className={`${merri.className} text-black text-sm font-light mb-6`}>
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => { setQuery(''); setActiveDept('All'); setActiveType('All Types'); }}
                className={`${merri.className} text-xs font-light text-[#886c46] border border-[#886c46]/25 px-5 py-2.5 rounded-full hover:bg-[#886c46]/5 transition-colors duration-300`}
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── APPLY PANEL ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {applyPanelOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed inset-x-4 bottom-6 z-50 rounded-3xl bg-white border border-stone-200 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.25)] md:left-1/2 md:right-auto md:bottom-10 md:-translate-x-1/2"
            style={{ maxWidth: 520 }}
          >
            <div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <p className={`${merri.className} text-sm text-[#886c46] uppercase tracking-[0.22em] font-light mb-2`}>
                  Apply Now
                </p>
                <h3 className={`${playfair.className} text-black text-lg font-semibold mb-2`}>
                  📩 To apply,
                </h3>
                {selectedJob && (
                  <p className={`${merri.className} text-sm text-stone-500 leading-relaxed mb-2`}>
                    Applying for: <span className="font-medium text-black">{selectedJob.title}</span>
                  </p>
                )}
                <p className={`${merri.className} text-sm text-stone-600 leading-relaxed mb-4`}>
                  send your resume + brief profile summary to:
                </p>
                <a
                  href="mailto:info@texoprefab.com"
                  className={`${merri.className} inline-flex items-center gap-2 text-sm font-medium text-[#886c46] underline underline-offset-4 hover:text-stone-900`}
                >
                  📧 info@texoprefab.com
                </a>
              </div>
              <button
                onClick={closeApplyPanel}
                className="rounded-full bg-stone-100 p-2 text-stone-700 hover:bg-stone-200 transition-colors"
                aria-label="Close apply panel"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-[#080808] relative overflow-hidden py-20">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, #886c46 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #886c46 40%, #c9a97a 60%, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className={`${merri.className} text-[#886c46] text-[10px] tracking-[0.28em] uppercase font-light mb-3`}>
              Don{`'`}t See a Fit?
            </p>
            <h2 className={`${playfair.className} text-white text-3xl md:text-4xl font-600`}>
              Send us your resume anyway.
            </h2>
            <p className={`${merri.className} text-white/30 font-light text-sm mt-2 max-w-md leading-relaxed`}>
              Send your resume + brief profile summary to the email below. Salary is commensurate with skill & experience.
            </p>
          </div>
          <motion.a
            href="mailto:info@texoprefab.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${merri.className} flex items-center gap-2 shrink-0 text-sm font-light text-white bg-[#886c46] hover:bg-[#9a7c52] px-7 py-4 rounded-xl transition-colors duration-300 shadow-[0_8px_30px_-4px_rgba(136,108,70,0.4)]`}
          >
            info@texoprefab.com
            <ArrowUpRight size={15} />
          </motion.a>
        </div>
      </section>

    </main>
  );
}