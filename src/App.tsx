import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import GalleryPage from './sections/GalleryPage'
import { profile } from './data/content'

/** Hash routing keeps the site static-host friendly: #/projects/<id>/screenshots is the gallery page. */
const GALLERY_ROUTE = /^#\/projects\/([^/]+)\/screenshots$/

function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

/** Jump without the smooth-scroll animation. */
function jumpTo(el: Element | null) {
  if (el) el.scrollIntoView({ behavior: 'instant' })
  else window.scrollTo({ top: 0, behavior: 'instant' })
}

export default function App() {
  const hash = useHash()
  const galleryId = GALLERY_ROUTE.exec(hash)?.[1] ?? null
  const previous = useRef(galleryId)

  // Only when switching between the two pages: open the gallery at the top,
  // or return to the section named in the hash (e.g. #projects).
  useEffect(() => {
    if (previous.current === galleryId) return
    previous.current = galleryId
    jumpTo(galleryId ? null : document.getElementById(hash.slice(1)))
  }, [galleryId, hash])

  if (galleryId) return <GalleryPage projectId={decodeURIComponent(galleryId)} />

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
