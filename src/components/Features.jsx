import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Smooth animations, glassy surfaces, and tasteful gradients that feel premium.',
  },
  {
    icon: Shield,
    title: 'Built for Trust',
    desc: 'Strong foundations with modern tooling and best practices baked in.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Optimized for speed with a focus on responsiveness and accessibility.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-[#0b1221] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Designed to Impress
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gradient-to-br from-sky-500/30 to-indigo-500/30 p-2 text-sky-300 ring-1 ring-inset ring-white/10">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-blue-200/80">{f.desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
