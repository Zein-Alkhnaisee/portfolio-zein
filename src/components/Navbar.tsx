import { useState } from 'react'
import { profile } from '../data/content'
import ThemeToggle from './ThemeToggle'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-base/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl">
          {profile.name}
        </a>
        <div className="flex items-center gap-2 md:order-last">
          <ThemeToggle />
          <button
            type="button"
            className="rounded border border-line px-3 py-1.5 text-sm md:hidden"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul
          id="nav-links"
          className={`${open ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-1 border-b border-line bg-base px-6 py-4 md:static md:flex md:w-auto md:flex-row md:gap-8 md:border-0 md:p-0`}
        >
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted transition-colors hover:text-fg md:py-0"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
