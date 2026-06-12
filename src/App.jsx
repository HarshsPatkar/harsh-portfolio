import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Learning from './pages/Learning'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Learning />
        <Contact />
      </main>
    </>
  )
}
