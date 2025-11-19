import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-[#070b15]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500" />
          <span className="text-sm font-semibold tracking-wide text-white">BlueSite</span>
        </a>

        <nav className="hidden gap-8 text-sm text-blue-100/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#" className="rounded-full bg-white/5 px-4 py-2 text-white ring-1 ring-white/10 hover:bg-white/10">Get Started</a>
        </nav>

        <button className="md:hidden text-blue-100" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#070b15]/80 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-blue-100/80">
            <a href="#features" className="hover:text-white" onClick={() => setOpen(false)}>Features</a>
            <a href="#contact" className="hover:text-white" onClick={() => setOpen(false)}>Contact</a>
            <a href="#" className="rounded-lg bg-white/5 px-4 py-2 text-white ring-1 ring-white/10 hover:bg-white/10" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
