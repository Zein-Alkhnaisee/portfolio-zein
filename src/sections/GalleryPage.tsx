import ThemeToggle from '../components/ThemeToggle'
import ProjectGallery from '../components/ProjectGallery'
import { profile, projects } from '../data/content'

/** Dedicated screenshots page, reached from #/projects/<id>/screenshots. */
export default function GalleryPage({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId)
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-base/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#home" className="font-display text-xl">
            {profile.name}
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="rounded border border-line px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              Back to portfolio
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {project && project.gallery ? (
          <>
            <h1 className="font-display text-4xl md:text-5xl">{project.name}</h1>
            <div className="mt-10">
              <ProjectGallery screenshots={project.gallery} standalone />
            </div>
          </>
        ) : (
          <p className="text-muted">This project has no screenshots yet.</p>
        )}
        <a
          href="#projects"
          className="mt-14 inline-block rounded border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Back to portfolio
        </a>
      </main>
    </>
  )
}
