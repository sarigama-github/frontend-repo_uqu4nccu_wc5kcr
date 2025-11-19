import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b1221]">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to enhance contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1221] via-transparent to-[#0b1221]/60" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-blue-200 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
          Blue-themed, modern, and sleek
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-white drop-shadow sm:text-6xl md:text-7xl"
        >
          A Fancy Blue Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-base text-blue-200/90 sm:text-lg"
        >
          Immerse yourself in a digital space with a dark background and blue-purple gradient waves. Crafted for technology-forward brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#features"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110"
          >
            Explore Features
            <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-blue-100 backdrop-blur-md transition hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
