import { useState } from 'react'
import './App.css'

type Project = {
  title: string
  subtitle: string
  context: string
  summary: string
  highlights: string[]
  stack: string[]
  demoUrl: string
  codeUrl: string
  note: string
}

type Experience = {
  title: string
  company: string
  period: string
  points: string[]
}

type LinkItem = {
  label: string
  value: string
  href: string
  download: boolean
}

function App() {
  const [selectedAward, setSelectedAward] = useState<string | null>(null)

  const skills = {
    languages: ['C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'Python'],
    frontend: ['React', 'HTML', 'CSS', 'ASP.NET Web Forms'],
    backend: ['NestJS', '.NET', 'ASP.NET', 'REST APIs'],
    state: ['Redux Toolkit', 'Redux Saga'],
    databases: ['PostgreSQL', 'MySQL', 'Firebase'],
    tools: ['Git', 'GitHub', 'Visual Studio', 'Visual Studio Code', 'Azure DevOps'],
    spatial: ['QGIS', 'GeoServer', 'OpenLayers', 'PostGIS'],
    other: ['Shopify Liquid', 'AWS Academy Cloud Foundations'],
  }

  const featuredProjects: Project[] = [
    {
      title: 'KiwiQDine',
      subtitle: 'Multi-Tenant QR-Code-Based Unified Food Court Ordering System/Platform',
      context: 'Master’s Final Project | Massey University',
      summary:
        'Designed and developed a full-stack platform for New Zealand food courts with separate portals for customers, restaurant staff and super-admin users.',
      highlights: [
        'Built QR-based ordering workflows including restaurant selection, menu browsing, cart handling, OTP verification and order placement.',
        'Developed restaurant-side features for menu management, categories, add-ons, staff administration, and QR code management.',
        'Implemented super-admin features for tenant onboarding, restaurant management, subscription plans, invoice handling and SaaS-style administration.',
        'Designed a multi-tenant system architecture and relational database model using PostgreSQL.',
        'Built using React, TypeScript, Redux Toolkit, Redux Saga, NestJS, PostgreSQL, HTML, CSS and REST APIs.',
      ],
      stack: ['React', 'TypeScript', 'Redux Toolkit', 'Redux Saga', 'NestJS', 'PostgreSQL', 'HTML', 'CSS', 'Rest APIs'],
      demoUrl: 'https://drive.google.com/drive/folders/19IVnksTnPHhxlszTY7Qmd_j_ioggBiTD?usp=sharing',
      codeUrl: '#',
      note: '',
    },
    {
      title: 'New Zealand Crime Tracker',
      subtitle: 'Interactive GIS-Based Crime Visualization Platform',
      context: 'Academic Project | Massey University',
      summary:
        'Built an interactive web application for visualising crime data spatially across New Zealand using GIS technologies.',
      highlights: [
        'Developed map filtering, UI interactions, and real-time feature rendering using JavaScript.',
        'Integrated GeoServer and PostGIS for spatial data services and map-based querying.',
        'Used Agile-style weekly sprints and Git version control during development.',
      ],
      stack: ['OpenLayers', 'GeoServer', 'PostGIS', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL'],
      demoUrl: 'https://drive.google.com/drive/folders/1V3tMNPCx988R0D_9sTCNQyp7tDy8eJUc?usp=sharing',
      codeUrl: '#',
      note: '',
    },
  ]

  const additionalProjects = [
    'Voice-to-Sign Language Real-Time Translator',
    'Blood Bank Management System',
    'Walking Robot',
    'IoT-based Smart Pet Feeder',
  ]

  const experience: Experience[] = [
    {
      title: 'Casual Paper Marker / Teaching Assistant',
      company: 'Massey University, Auckland, New Zealand',
      period: 'May 2026 – Present',
      points: [
        'Mark master’s-level student assessments according to marking rubrics and provide clear, structured feedback.',
        'Review technical submissions carefully while ensuring fair and consistent grading.',
      ],
    },
    {
      title: 'Programming Tutor',
      company: 'Private One-on-One Tutor, Auckland, New Zealand',
      period: 'Aug 2025 – Oct 2025',
      points: [
        'Tutored an AUT undergraduate student in C/C++ with a focus on core concepts, debugging, and practical coding.',
      ],
    },
    {
      title: 'Junior Software Developer',
      company: 'Nova Corp (Private) Limited, Sri Lanka',
      period: 'Sep 2023 – Nov 2024',
      points: [
        'Developed integration modules for third-party applications and contributed to new software enhancements.',
        'Built and maintained web applications using .NET for backend development and HTML, CSS, and ASP.NET for frontend functionality.',
        'Created and managed Shopify pages and templates using Liquid, HTML, and CSS.',
        'Supported testing, validation, client coordination, and feature delivery across ongoing projects.',
      ],
    },
  ]

  const otherExperience: Experience[] = [
    {
      title: 'Food and Beverage Assistant',
      company: 'Spices Galore Limited, T/AS Saravanaa Bhavan - CBD Auckland, New Zealand',
      period: 'Oct 2025 – Present',
      points: [
        'Assisted in food preparation, plating, and takeaway packaging.',
        'Served customers efficiently while maintaining hygiene and quality standards.',
        'Greeted customers warmly and ensured a positive dining experience.',
        'Took and managed customer orders using the systems.',
        'Coordinated with kitchen staff to ensure timely and accurate order delivery.',
        'Maintained cleanliness and organization in both service and preparation areas.',
        'Followed all food safety, hygiene, and health regulations consistently.',
      ],
    },
    {
      title: 'Door to door Sales Representative',
      company: 'Auckland Grout Co. Grout and Glass restoration, New Zealand',
      period: 'Jul 2025 – Oct 2025',
      points: [
        'Promoted grout and glass restoration services through direct door-to-door sales across Auckland suburbs.',
        'Built rapport with potential customers, answered service-related queries, and booked consultations.',
        'Maintained a confident, persuasive communication style to meet daily outreach goals and drive customer interest.',
      ],
    },
  ]

  const achievements = [
    'Special & Gold Award - Indonesia Inventors Day 2022 for Voice to Sign Language real-time translator project',
    '3rd Place - CODEMANIA Inter Campus Competition 2019',
    'AWS Academy Graduate - Cloud Foundations',
  ]

  const links: LinkItem[] = [
    { label: 'Email', value: 'sukku31@gmail.com', href: 'mailto:sukku31@gmail.com', download: false },
    { label: 'Phone', value: '+64 2904302996', href: 'tel:+642904302996', download: false },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sukatheesh-sivaramakrishnan',
      href: 'https://www.linkedin.com/in/sukatheesh-sivaramakrishnan',
      download: false,
    },
    {
      label: 'CV',
      value: 'Download my CV',
      href: '/SUKATHEESH SIVARAMAKRISHNAN SW RESUME.pdf',
      download: true,
    },
    { label: 'GitHub', value: 'Click to view it', href: 'https://github.com/Suhatheesh', download: false },
  ]

  const skillGroups = Object.entries(skills)

  return (
    <div className="page">
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <p className="eyebrow">Software Developer Portfolio</p>
            <h1>Sukatheesh Sivaramakrishnan</h1>
            <p className="hero-text">
              Master of Information Sciences student at Massey University with hands-on experience in
              full-stack web development, API integration, database-driven applications, and software
              support. Focused on building practical, scalable software solutions and currently seeking
              an IT role in New Zealand.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#experience" className="btn btn-secondary">
                View Experience
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-label">Role Focus</span>
                <strong>Full Stack Development · Web Development</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Location</span>
                <strong>Auckland, New Zealand</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Core Stack</span>
                <strong>React · TypeScript · NestJS</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Strength</span>
                <strong>System Design & Integration</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container main-grid">
        <aside className="sidebar">
          <section className="card">
            <h2>About</h2>
            <p>
              I enjoy building practical software systems that connect frontend workflows, backend
              services, and structured data. My experience includes web applications, API-driven
              solutions, GIS-based systems, and full-stack project development.
            </p>
          </section>

          <section className="card">
            <h2>Skills</h2>
            <div className="skill-sections">
              {skillGroups.map(([group, items]) => (
                <div key={group} className="skill-group">
                  <h3>{group}</h3>
                  <div className="tag-wrap">
                    {items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <h2>Achievements</h2>
            <ul className="simple-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="award-gallery">
              <img
                src={`${import.meta.env.BASE_URL}images/gold-award.png`}
                alt="Gold Award"
                className="award-image"
                onClick={() => setSelectedAward(`${import.meta.env.BASE_URL}images/gold-award.png`)}
              />

              <img
                src={`${import.meta.env.BASE_URL}images/special-award.png`}
                alt="Special Award"
                className="award-image"
                onClick={() => setSelectedAward(`${import.meta.env.BASE_URL}images/special-award.png`)}
              />
            </div>
          </section>

          <section className="card" id="contact">
            <h2>Contact</h2>
            <div className="contact-list">
              {links.map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="contact-label">{item.label}</span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    download={item.download ? true : undefined}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <div className="content">
          <section className="card" id="projects">
            <div className="section-head">
              <div>
                <h2>Featured Projects</h2>
                <p>Professional project summaries with direct demo access.</p>
              </div>
            </div>

            <div className="project-list">
              {featuredProjects.map((project) => (
                <article key={project.title} className="project-card">
                  <div className="project-main">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-context">{project.context}</p>
                    <p className="project-summary">{project.summary}</p>

                    <ul className="simple-list">
                      {project.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="tag-wrap project-tags">
                      {project.stack.map((item) => (
                        <span key={item} className="tag tag-muted">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-side">
                    <div className="video-preview">Project demo preview area</div>

                    <div className="project-actions">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary project-btn"
                      >
                        View Project Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary project-btn"
                      >
                        View Code / Repository
                      </a>
                    </div>

                    <p className="project-note">{project.note}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mini-card">
              <h3>Additional Projects</h3>
              <div className="tag-wrap">
                {additionalProjects.map((item) => (
                  <span key={item} className="tag tag-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="card" id="experience">
            <h2>IT & Academic Related Experience</h2>
            <div className="experience-list">
              {experience.map((job) => (
                <article key={job.title + job.company} className="experience-card">
                  <div className="experience-head">
                    <div>
                      <h3>{job.title}</h3>
                      <p className="project-context">{job.company}</p>
                    </div>
                    <span className="period">{job.period}</span>
                  </div>

                  <ul className="simple-list">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="card" id="other-experience">
            <h2>Other Experience</h2>
            <div className="experience-list">
              {otherExperience.map((job) => (
                <article key={job.title + job.company} className="experience-card">
                  <div className="experience-head">
                    <div>
                      <h3>{job.title}</h3>
                      <p className="project-context">{job.company}</p>
                    </div>
                    <span className="period">{job.period}</span>
                  </div>

                  <ul className="simple-list">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {selectedAward && (
        <div className="lightbox" onClick={() => setSelectedAward(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedAward(null)}>
              ×
            </button>
            <img src={selectedAward} alt="Award Preview" className="lightbox-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default App