import Section from '../components/Section'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <h3 className="border-b border-line pb-2 text-sm font-semibold">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded bg-surface px-3 py-1.5 text-sm text-muted">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
