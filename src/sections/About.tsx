import Section from '../components/Section'
import { profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-xl space-y-5 leading-relaxed text-muted">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
