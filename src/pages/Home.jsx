import { motion } from 'framer-motion'
import '../styles/Home.css'

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home__inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="home__eyebrow">// engineer</p>
          <h1 className="home__name">Harsh Patkar</h1>
          <p className="home__role">Software Engineer</p>
          <p className="home__desc">
            I work on <strong>backend systems</strong>, automation workflows, and data-related
            solutions. Currently at MResult Technologies, building APIs, bots, and document
            pipelines.
            <br /><br />
            Exploring <strong>data engineering</strong>, Databricks, and modern data platforms —
            trying to understand how data moves, transforms, and becomes useful.
          </p>

          <div className="home__actions">
            <a href="#experience" className="home__cta" onClick={e => {
              e.preventDefault()
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              see my work →
            </a>
            <a href="#contact" className="home__cta home__cta--ghost" onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              get in touch
            </a>
          </div>

          <div className="home__location">
            <span>📍</span>
            <span>Mangaluru, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
