import FadeIn from '../components/FadeIn'
import '../styles/Projects.css'

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GROUPS = [
  {
    label: 'backend',
    projects: [
      {
        name: 'FastAPI Document Automation',
        desc: (
          <>
            Backend API service built as part of an MVP Accelerator at MResult. Used{' '}
            <strong>FastAPI, MongoDB, and GridFS</strong> to handle document uploads, transcript
            storage, and retrieval. Structured to support multi-tenant document workflows with
            file chunking for large payloads.
          </>
        ),
        tags: ['FastAPI', 'Python', 'MongoDB', 'GridFS', 'REST API'],
        link: null,
      },
      {
        name: 'Transcript Middleware & Scheduler',
        desc: (
          <>
            Middleware layer that generates transcripts from bot conversations and uploads them
            to <strong>SharePoint and AWS</strong> on a schedule. Handled retry logic, file
            formatting, and structured logging. Built to run reliably in a production environment.
          </>
        ),
        tags: ['Python', 'SharePoint API', 'AWS', 'Scheduling', 'Automation'],
        link: null,
      },
    ],
  },
  {
    label: 'automation',
    projects: [
      {
        name: 'Blue Prism File-Handling Pipeline',
        desc: (
          <>
            Automated a file-handling workflow using <strong>Blue Prism RPA</strong> — monitoring
            a folder for incoming files, validating their structure, routing them appropriately,
            and logging the results. Reduced manual intervention in a previously error-prone
            process.
          </>
        ),
        tags: ['Blue Prism', 'RPA', 'File Processing', 'Automation', 'Logging'],
        link: null,
      },
      {
        name: 'NDA Document Generation (POC)',
        desc: (
          <>
            Proof of concept for automating NDA generation using{' '}
            <strong>Microsoft Copilot Studio, Power Automate, and Dataverse</strong>. The flow
            collected form inputs, generated a populated NDA template, and routed it for approval
            — exploring how low-code tooling handles document workflows.
          </>
        ),
        tags: ['Copilot Studio', 'Power Automate', 'Dataverse', 'Power Platform'],
        link: null,
      },
    ],
  },
  {
    label: 'experiments',
    projects: [
      {
        name: 'eticket-razorpay',
        desc: (
          <>
            A museum e-ticket generation system integrating{' '}
            <strong>Razorpay for payment processing</strong>. Built to explore online payment
            flows and ticket issuance — simple in scope, but a good exercise in end-to-end web
            integration.
          </>
        ),
        tags: ['HTML', 'JavaScript', 'Razorpay API'],
        link: 'https://github.com/HarshsPatkar/eticket-razorpay',
      },
      {
        name: 'Kippo Hover Card Effect',
        desc: (
          <>
            A CSS recreation of an interesting UI hover interaction I came across. Built it to
            understand the technique. Nothing complex — just the kind of thing you build when
            something catches your eye and you want to know how it works.
          </>
        ),
        tags: ['CSS', 'HTML', 'UI'],
        link: 'https://github.com/HarshsPatkar/Kippo-Hover-Card-Effect',
      },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <FadeIn>
          <p className="section-label">projects</p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="projects__header">
            <h2 className="projects__title">Things I've built</h2>
            <p className="projects__subtitle">
              A curated selection of work — professional projects and side experiments.
              Not every repository, just the ones that tell a coherent story.
            </p>
          </div>
        </FadeIn>

        {GROUPS.map((group, gi) => (
          <FadeIn key={group.label} delay={0.1 + gi * 0.05}>
            <div className="projects__group">
              <p className="projects__group-label">{group.label}</p>
              {group.projects.map((proj, pi) => (
                <div key={pi} className="project-card">
                  <div className="project-card__top">
                    <p className="project-card__name">{proj.name}</p>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                      >
                        GitHub <ExternalIcon />
                      </a>
                    )}
                  </div>
                  <p className="project-card__desc">{proj.desc}</p>
                  <div className="project-card__tags">
                    {proj.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.3}>
          <div className="projects__note">
            <p>
              Most professional work lives in private repos. The experiments above are on{' '}
              <a href="https://github.com/HarshsPatkar" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{' '}
              if you want to look through the code.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
