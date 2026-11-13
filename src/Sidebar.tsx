import { useState } from 'react'
import './Sidebar.css'

type Project = { id: string; name: string }

const projects: Project[] = [{ id: 'my-profile', name: 'my-profile' }]

function Sidebar() {
  const [open, setOpen] = useState(true)
  const [activeId, setActiveId] = useState('my-profile')

  return (
    <aside className="sidebar">
      <nav aria-label="Projects">
        <button
          type="button"
          className="sidebar-group"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`chevron${open ? ' open' : ''}`} aria-hidden="true">
            ▸
          </span>
          Projects
        </button>
        {open && (
          <ul className="sidebar-list">
            {projects.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className={p.id === activeId ? 'active' : undefined}
                  aria-current={p.id === activeId ? 'page' : undefined}
                  onClick={() => setActiveId(p.id)}
                >
                  <span className="folder" aria-hidden="true">
                    📁
                  </span>
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  )
}

export default Sidebar
