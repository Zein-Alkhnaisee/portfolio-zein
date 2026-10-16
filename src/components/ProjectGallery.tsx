import { useState } from 'react'
import type { Screenshot } from '../types'
import ScreenshotDialog from './ScreenshotDialog'

function Tile({ shot, onOpen }: { shot: Screenshot; onOpen: (s: Screenshot) => void }) {
  return (
    <li>
      <figure>
        <button
          type="button"
          onClick={() => onOpen(shot)}
          aria-label={`Enlarge: ${shot.title}`}
          className="block w-full overflow-hidden rounded-md border border-line bg-base transition-colors hover:border-accent"
        >
          <img
            src={shot.src}
            alt={`${shot.title} screen`}
            width={shot.width}
            height={shot.height}
            loading="lazy"
            decoding="async"
            className="aspect-[2/1] w-full object-cover object-top"
          />
        </button>
        <figcaption className="mt-2 text-sm leading-relaxed">
          <span className="font-medium">{shot.title}. </span>
          <span className="text-muted">{shot.caption}</span>
        </figcaption>
      </figure>
    </li>
  )
}

const grid = 'grid gap-6 sm:grid-cols-2'

interface Props {
  screenshots: Screenshot[]
  /** On the dedicated gallery page every screenshot is shown, with no expand button. */
  standalone?: boolean
}

export default function ProjectGallery({ screenshots, standalone = false }: Props) {
  const [selected, setSelected] = useState<Screenshot | null>(null)
  const [showMore, setShowMore] = useState(standalone)

  const featured = screenshots.filter((s) => s.featured)
  const more = screenshots.filter((s) => !s.featured)
  const groups = [...new Set(more.map((s) => s.group))]

  return (
    <div className={standalone ? undefined : 'mt-8 border-t border-line pt-6'}>
      <h4 className="font-medium">Screenshots</h4>
      <p className="mt-1 text-sm text-muted">Select an image to view it full size.</p>
      <ul className={`mt-5 ${grid}`}>
        {featured.map((s) => (
          <Tile key={s.src} shot={s} onOpen={setSelected} />
        ))}
      </ul>

      {more.length > 0 && (
        <>
          {!standalone && (
          <button
            type="button"
            aria-expanded={showMore}
            aria-controls="more-screenshots"
            onClick={() => setShowMore((v) => !v)}
            className="mt-8 rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {showMore ? 'Hide additional screenshots' : `View ${more.length} more screenshots`}
          </button>
          )}
          {showMore && (
            <div id="more-screenshots" className={standalone ? 'mt-12 space-y-10' : 'mt-8 space-y-10'}>
              {groups.map((group) => (
                <section key={group} aria-label={group}>
                  <h5 className="border-b border-line pb-2 text-sm font-semibold">{group}</h5>
                  <ul className={`mt-5 ${grid}`}>
                    {more
                      .filter((s) => s.group === group)
                      .map((s) => (
                        <Tile key={s.src} shot={s} onOpen={setSelected} />
                      ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </>
      )}
      <ScreenshotDialog shot={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
