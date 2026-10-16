import Section from '../components/Section'
import { contactLinks, contactPhone, profile } from '../data/content'
import { isValidLink } from '../utils'

export default function Contact() {
  const links = contactLinks.filter((l) => isValidLink(l.href))
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl leading-relaxed text-muted">
        {profile.availability}. Based in {profile.location}.
      </p>
      <dl className="mt-8 grid max-w-xl grid-cols-[6rem_1fr] gap-y-4 text-sm sm:grid-cols-[7rem_1fr]">
        {links.map((l) => {
          const external = !l.href!.startsWith('mailto:')
          return (
            <div key={l.label} className="contents">
              <dt className="text-muted">{l.label}</dt>
              <dd className="min-w-0">
                <a
                  href={l.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="break-all border-b border-line pb-0.5 transition-colors hover:border-accent hover:text-accent"
                >
                  {l.display}
                </a>
              </dd>
            </div>
          )
        })}
        {contactPhone && (
          <div className="contents">
            <dt className="text-muted">Phone</dt>
            <dd>{contactPhone}</dd>
          </div>
        )}
      </dl>
    </Section>
  )
}
