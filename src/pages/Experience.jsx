import FadeIn from '../components/FadeIn'
import '../styles/Experience.css'

const WORK = [
  {
    company: 'MResult Technologies',
    title: 'Software Development Engineer',
    period: 'Jun 2024 – present',
    location: 'Mangaluru, India',
    items: [
      {
        text: (
          <>
            Designed and built <strong>middleware and scheduler logic</strong> that generates
            transcripts automatically and uploads them to SharePoint and AWS — reducing manual
            effort in documentation workflows.
          </>
        ),
      },
      {
        text: (
          <>
            Built <strong>conversational bots on Kore.ai XO 10 &amp; 11</strong>, implementing
            session continuity across conversations, automated transcript generation, and Vox Q&amp;A
            logging. Worked through the full bot lifecycle from design to deployment.
          </>
        ),
      },
      {
        text: (
          <>
            Automated file-handling operations using <strong>Blue Prism</strong> — folder
            monitoring, file validation, and structured logging — to improve reliability and reduce
            human intervention in repetitive tasks.
          </>
        ),
      },
      {
        text: (
          <>
            Contributed to MVP Accelerator projects, developing <strong>backend APIs with
            FastAPI, MongoDB, and GridFS</strong> for document automation and transcript
            storage. Handled file upload, retrieval, and storage for large document payloads.
          </>
        ),
      },
      {
        text: (
          <>
            Built <strong>POCs using Microsoft Copilot Studio, Power Automate, and
            Dataverse</strong> for NDA document generation workflows — exploring how low-code
            automation tooling fits into enterprise environments.
          </>
        ),
      },
      {
        text: (
          <>
            Used <strong>GitHub for version control</strong> and collaborated with teams on
            RFC-based deployments across environments. Participated in code reviews and
            contributed to deployment processes.
          </>
        ),
      },
    ],
    tags: [
      'Python', 'FastAPI', 'MongoDB', 'GridFS', 'Kore.ai', 'Blue Prism',
      'Power Automate', 'Copilot Studio', 'REST APIs', 'SharePoint', 'AWS', 'GitHub',
    ],
  },
]

const EDUCATION = [
  {
    degree: 'B.E. Electronics and Communication Engineering',
    school: 'NMAM Institute of Technology, Nitte',
    year: '',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <FadeIn>
          <p className="section-label">experience</p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="experience__header">
            <h2 className="experience__title">Work</h2>
            <p className="experience__subtitle">
              What I've built, automated, and shipped.
            </p>
          </div>
        </FadeIn>

        {WORK.map((job, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.05}>
            <div className="job">
              <div className="job__meta">
                <div>
                  <p className="job__company">{job.company}</p>
                  <p className="job__title">{job.title}</p>
                  <p className="job__period">{job.period}</p>
                </div>
                <p className="job__location">{job.location}</p>
              </div>

              <div className="job__items">
                {job.items.map((item, j) => (
                  <div key={j} className="job__item">
                    <div className="job__item-dot" />
                    <p className="job__item-text">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="job__tags">
                {job.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.2}>
          <div className="education">
            <p className="education__label">education</p>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="education__item">
                <div>
                  <p className="education__degree">{edu.degree}</p>
                  <p className="education__school">{edu.school}</p>
                </div>
                {edu.year && <p className="education__year">{edu.year}</p>}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
