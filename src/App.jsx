import { useLayoutEffect } from 'react'
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import './App.css'

import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const navigation = [
  { to: '/', label: '關於我', icon: 'M20 21v-2a7 7 0 0 0-14 0v2 M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0' },
  { to: '/experience', label: '經歷', icon: 'M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2 M3 6h18v15H3z M3 11a20 20 0 0 0 18 0 M10 12h4v3h-4z' },
  { to: '/skills', label: '專業技能', icon: 'm7 6-6 6 6 6 m10-12 6 6-6 6 M14 3l-4 18' },
  { to: '/education', label: '學歷', icon: 'm2 9 10-5 10 5-10 5z M6 11v6c4 3 8 3 12 0v-6 M22 9v8' },
  { to: '/projects', label: '專案', icon: 'M3 7V4h6l3 3h9v14H3z M3 10h18' },
  { to: '/contact', label: '聯絡方式', icon: 'M3 5h18v14H3z m0 0 9 8 9-8' },
]

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app-layout">
        <aside className="sidebar">
          <div className="brand">Jih-Tang Lo</div>

          <nav className="sidebar-nav" aria-label="主要導覽">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d={item.icon} />
                </svg>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
