import type { Project } from '../types'
import { isValidLink } from '../utils'
import SafeImage from './SafeImage'

const linkClass =
  'rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent'

function Placeholder() {
  return (
    <div
      role="img"
      aria-label="Screenshot placeholder"
      className="flex aspect-[16/9] items-center justify-center border-b border-dashed border-line bg-base/60 p-6 text-center"
    >
      <p className="text-sm text-muted">
        Screenshot placeholder
        <br />
        <span className="text-xs">The real project screenshot will replace this area.</span>
      </p>
    </div>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  const { id, name, badge, description, technologies, features, screenshot, screenshotAlt, gallery, githubUrl, liveUrl } = project
  const hasGallery = Boolean(gallery && gallery.length > 0)
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface">
      <SafeImage
        src={screenshot}
        alt={screenshotAlt ?? `${name} screenshot`}
        className="aspect-[16/9] w-full border-b border-line object-cover object-top"
        fallback={<Placeholder />}
      />
      <div className="p-6 md:p-8">
        {badge && <p className="mb-2 text-sm text-accent">{badge}</p>}
        <h3 className="font-display text-3xl">{name}</h3>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">{description}</p>
        <ul className="mt-5 grid gap-1 text-sm sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="text-fg/90 before:mr-2 before:text-accent before:content-['–']">
              {f}
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {technologies.map((t) => (
            <li key={t} className="rounded bg-base px-2.5 py-1 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
        {(isValidLink(githubUrl) || isValidLink(liveUrl) || hasGallery) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {isValidLink(githubUrl) && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                View on GitHub
              </a>
            )}
            {isValidLink(liveUrl) && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Open live demo
              </a>
            )}
            {hasGallery && (
              <a href={`#/projects/${id}/screenshots`} className={linkClass}>
                View All Screenshots
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
