import type { SkillGroup } from '../profile'

type SkillsProps = {
  groups: SkillGroup[]
}

function Skills({ groups }: SkillsProps) {
  return (
    <section className="section" aria-labelledby="skills-title">
      <h2 id="skills-title">기술 스택</h2>
      <dl className="skills">
        {groups.map((group) => (
          <div className="skill-group" key={group.category}>
            <dt>{group.category}</dt>
            <dd>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Skills
