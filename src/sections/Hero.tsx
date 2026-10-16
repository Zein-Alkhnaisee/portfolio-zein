import { profile } from '../data/content'
import SafeImage from '../components/SafeImage'

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-28">
      <div className="hero-in order-2 md:order-1">
        <p className="text-sm text-muted">{profile.location}</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">{profile.name}</h1>
        <p className="mt-5 text-lg text-accent">{profile.title}</p>
        <p className="mt-6 max-w-lg leading-relaxed text-muted">{profile.intro}</p>
        <p className="mt-3 text-sm text-muted">{profile.availability}.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-base transition-opacity hover:opacity-90">
            View projects
          </a>
          <a href="#contact" className="rounded-md border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
            Contact me
          </a>
        </div>
      </div>
      <div className="hero-in order-1 mx-auto w-full max-w-xs md:order-2 md:max-w-sm">
        {/* Offset frame sits behind the photo. */}
        <div className="relative">
          <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-accent/50" />
          <SafeImage
            src={profile.photo}
            alt={profile.photoAlt}
            className="relative aspect-[4/5] w-full rounded-lg object-cover object-[50%_20%]"
            fallback={
              <div role="img" aria-label="Profile photo missing" className="relative flex aspect-[4/5] w-full items-center justify-center rounded-lg border border-dashed border-line bg-surface p-6 text-center text-sm text-muted">
                Add your photo at public/images/profile.jpg
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}
