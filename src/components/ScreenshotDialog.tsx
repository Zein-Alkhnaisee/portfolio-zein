import { useEffect, useRef } from 'react'
import type { Screenshot } from '../types'

interface Props {
  shot: Screenshot | null
  onClose: () => void
}

/** Full-size screenshot viewer built on the native <dialog> (focus trap and Esc come for free). */
export default function ScreenshotDialog({ shot, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (shot && !dialog.open) dialog.showModal()
    if (!shot && dialog.open) dialog.close()
  }, [shot])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={shot ? shot.title : 'Screenshot'}
      className="m-auto max-h-[94vh] w-[min(96vw,64rem)] overflow-auto rounded-lg border border-line bg-surface p-0 text-fg backdrop:bg-black/70"
    >
      {shot && (
        <div className="p-4 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="font-medium">{shot.title}</h4>
              <p className="mt-1 max-w-2xl text-sm text-muted">{shot.caption}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded border border-line px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              Close
            </button>
          </div>
          <img
            src={shot.src}
            alt={`${shot.title} screen`}
            width={shot.width}
            height={shot.height}
            className="mt-4 max-h-[70vh] w-full rounded border border-line object-contain"
          />
        </div>
      )}
    </dialog>
  )
}
