interface SideNavProps {
  activeSection: string
}

const navItems = [
  { id: 'spirit', label: '精神 · SPIRIT' },
  { id: 'factory', label: '厂房 · FACTORY' },
  { id: 'projects', label: '项目 · PROJECTS' },
  { id: 'roadmap', label: '路径 · ROADMAP' },
]

export default function SideNav({ activeSection }: SideNavProps) {
  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="side-nav fixed left-8 top-1/2 -translate-y-1/2 z-[100] space-y-8">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={handleClick(item.id)}
          className={`nav-item group flex items-center gap-4 cursor-pointer ${
            activeSection === item.id ? 'active' : ''
          }`}
        >
          <span className="text-xs font-bold opacity-0 -translate-x-2 transition-all">
            {item.label}
          </span>
          <div className="nav-dot" />
        </a>
      ))}
    </nav>
  )
}
