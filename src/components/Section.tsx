import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[220px_1fr] md:gap-16">
        <h2 id={`${id}-title`} className="font-display text-4xl leading-none md:text-5xl">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  )
}
