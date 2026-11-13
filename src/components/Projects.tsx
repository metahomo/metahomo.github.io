import type { Project } from '../profile'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section" aria-labelledby="projects-title">
      <h2 id="projects-title">프로젝트</h2>
      <ul className="projects">
        {projects.map((project) => (
          <li className="project" key={project.name}>
            <h3>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p>{project.description}</p>
            <ul className="tags">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
