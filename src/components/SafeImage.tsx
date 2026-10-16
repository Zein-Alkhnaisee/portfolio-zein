import { useState } from 'react'
import type { ReactNode } from 'react'

interface Props {
  src?: string
  alt: string
  className?: string
  fallback: ReactNode
}

/** Renders the image, or the fallback if no src is given or the file fails to load. */
export default function SafeImage({ src, alt, className, fallback }: Props) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return <>{fallback}</>
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}
