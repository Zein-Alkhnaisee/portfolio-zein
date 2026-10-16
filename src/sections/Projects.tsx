import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
