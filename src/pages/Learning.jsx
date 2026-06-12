import FadeIn from '../components/FadeIn'
import '../styles/Learning.css'

const CURRENT_LEARNING = [
  {
    name: 'Databricks',
    status: 'active',
    statusLabel: 'active',
    desc: 'Lakehouse architecture, Delta Lake, notebooks, and cluster configuration. Working through both the data engineering and analytics tracks.',
  },
  {
    name: 'Apache Spark',
    status: 'active',
    statusLabel: 'active',
    desc: 'DataFrame API, transformations, lazy evaluation, and how Spark distributes work. Focused on understanding the execution model.',
  },
  {
    name: 'Data Modeling',
    status: 'active',
    statusLabel: 'active',
    desc: 'Dimensional modeling, star and snowflake schemas, slowly changing dimensions. Getting comfortable with how data is shaped for analytical queries.',
  },
  {
    name: 'SQL (Advanced)',
    status: 'active',
    statusLabel: 'active',
    desc: 'Window functions, CTEs, query optimization, and working with larger datasets. Moving beyond basic queries into analytical SQL.',
  },
  {
    name: 'ETL / ELT Pipelines',
    status: 'exploring',
    statusLabel: 'exploring',
    desc: 'How data moves from source to destination — extraction patterns, transformation strategies, and when to use ELT vs ETL.',
  },
  {
    name: 'Azure Data Platform',
    status: 'exploring',
    statusLabel: 'exploring',
    desc: 'Azure Data Factory, Azure Data Lake Storage, and how they connect to Databricks in real architectures.',
  },
]

const CERTS = [
  {
    icon: 'DB',
    name: 'Databricks Certified Data Engineer Associate',
    issuer: 'Databricks',
    link: null,
  },
  {
    icon: 'DB',
    name: 'Databricks Certified Data Analyst Associate',
    issuer: 'Databricks',
    link: null,
  },
]

const SKILL_GROUPS = [
  {
    title: 'backend',
    items: ['Python', 'FastAPI', 'REST APIs', 'MongoDB', 'GridFS', 'File Processing'],
  },
  {
    title: 'automation',
    items: ['Blue Prism', 'Kore.ai XO', 'Power Automate', 'Copilot Studio', 'Dataverse'],
  },
  {
    title: 'data engineering',
    items: ['Databricks', 'Apache Spark', 'Delta Lake', 'ETL / ELT', 'Data Modeling', 'SQL'],
  },
  {
    title: 'analytics',
    items: ['Spotfire', 'Power BI', 'Tableau', 'Dashboards', 'Data Visualization'],
  },
  {
    title: 'tools',
    items: ['GitHub', 'Postman', 'Azure', 'SharePoint API', 'AWS (basics)'],
  },
]

const GOALS = [
  'Build and deploy an end-to-end data pipeline on Azure — ingestion through to a reporting layer.',
  'Get comfortable enough with Spark to understand performance tuning, not just write working code.',
  'Contribute to an open-source data engineering or Python project.',
  'Deepen knowledge of streaming data concepts — Kafka, event-driven pipelines.',
  'Work on a project that combines my backend experience with a proper data layer.',
]

export default function Learning() {
  return (
    <section id="learning" className="learning">
      <div className="learning__inner">
        <FadeIn>
          <p className="section-label">learning</p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="learning__header">
            <h2 className="learning__title">Always a work in progress</h2>
            <p className="learning__subtitle">
              This section exists to be honest about where I am. A list of what I'm actively
              studying, what I've picked up along the way, and where I want to go.
            </p>
          </div>
        </FadeIn>

        {/* Currently Learning */}
        <FadeIn delay={0.1}>
          <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>currently learning</p>
        </FadeIn>
        <div className="learning__current" >
          <div className="learning__current-grid">
            {CURRENT_LEARNING.map((item, i) => (
              <FadeIn key={item.name} delay={0.12 + i * 0.04}>
                <div className="learning-item">
                  <div className="learning-item__header">
                    <p className="learning-item__name">{item.name}</p>
                    <span className={`learning-item__status${item.status === 'exploring' ? ' learning-item__status--exploring' : ''}`}>
                      {item.statusLabel}
                    </span>
                  </div>
                  <p className="learning-item__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <FadeIn delay={0.2}>
          <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>certifications</p>
          <div className="learning__certs">
            {CERTS.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-item__icon">{cert.icon}</div>
                <div>
                  <p className="cert-item__name">{cert.name}</p>
                  <p className="cert-item__issuer">{cert.issuer}</p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-item__link">
                      View credential ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Skills overview */}
        <FadeIn delay={0.25}>
          <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>skills & tools</p>
          <div className="learning__skills-grid">
            {SKILL_GROUPS.map((group, i) => (
              <div key={group.title} className="skill-group">
                <p className="skill-group__title">{group.title}</p>
                <div className="skill-group__items">
                  {group.items.map(item => (
                    <span key={item} className="skill-group__item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Goals */}
        <FadeIn delay={0.3}>
          <div className="learning__goals">
            <p className="learning__goals-title">goals</p>
            <div className="learning__goals-list">
              {GOALS.map((goal, i) => (
                <div key={i} className="learning__goal-item">{goal}</div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
