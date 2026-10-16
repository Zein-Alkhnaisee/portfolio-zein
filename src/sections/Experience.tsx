import Section from '../components/Section'
import { education, experience } from '../data/content'

export default function Experience() {
  return (
    <>
      <Section id="experience" title="Experience">
        <ul className="divide-y divide-line">
          {experience.map((e) => (
            <li key={e.role} className="py-6 first:pt-0 last:pb-0">
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <p className="text-sm text-accent">{e.organization}</p>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{e.description}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="education" title="Education">
        <h3 className="text-lg font-semibold">{education.degree}</h3>
        <p className="mt-1 text-muted">Specialization: {education.specialization}</p>
        <dl className="mt-5 grid max-w-md grid-cols-3 gap-4 text-sm">
          <div><dt className="text-muted">University</dt><dd className="mt-1">{education.university}</dd></div>
          <div><dt className="text-muted">Graduated</dt><dd className="mt-1">{education.year}</dd></div>
          <div><dt className="text-muted">Grade</dt><dd className="mt-1">{education.grade}</dd></div>
        </dl>
      </Section>
    </>
  )
}
