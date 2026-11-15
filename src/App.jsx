import { ArrowUpRight, AtSign, Download, ExternalLink, Menu, X } from 'lucide-react'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import CharacterAvatar from './CharacterAvatar'

const CharacterModel = lazy(() => import('./CharacterModel'))

const navItems = ['About', 'Projects', 'Experience', 'Skills', 'Contact']

const internshipProjects = [
  { slug: 'piptp-certification', title: 'PIPTP Certification Registration', category: 'PIPTP · Backend / Web App', description: 'A registration platform for lecturer certification and LSP student certification at Universitas Airlangga.', tech: ['Laravel', 'PHP', 'MySQL', 'Docker'], number: '01' },
  { slug: 'piptp-website', title: 'PIPTP Official Website', category: 'PIPTP · Web Development', description: 'Redevelopment and maintenance work for the official PIPTP website, improving features and reliability.', tech: ['Laravel', 'PHP', 'MySQL', 'Docker'], number: '02' },
  { slug: 'rt-rw-letter', title: 'RT/RW Letter Application', category: 'Mayantara · Full Stack', description: 'A web application that streamlines resident requests for RT/RW recommendation letters.', tech: ['Web App', 'Requirements', 'Testing'], number: '03' },
]

const projects = [
  { slug: 'mountain-hiking-recommendation', title: 'Mountain Hiking Recommendation', category: 'Data & Machine Learning', description: 'A recommendation system for the 7 Summits of East Java using NLP, aspect analysis, and content-based filtering.', tech: ['Python', 'Flask', 'LightGBM', 'SQLite'], number: '01' },
  { slug: 'school-violation-management', title: 'School Violation Management', category: 'Full Stack Web Application', description: 'Transaksi is a web application for managing students, employees, departments, and student violation records.', tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT'], number: '02' },
  { slug: 'internet-cafe-reservation', title: 'INCAF — Internet Café Reservation', category: 'Web Application', description: 'A gaming internet café platform for discovering facilities and reserving tables or gaming packages online.', tech: ['Laravel 10', 'PHP', 'MySQL', 'Sanctum'], number: '03' },
  { slug: 'laundry-management', title: 'Laundry Management System', category: 'Full Stack Web Application', description: 'A centralized dashboard for managing customers, laundry packages, users, and transactions.', tech: ['React', 'Node.js', 'Express.js', 'Sequelize'], number: '04' },
  { slug: 'technoco-gadget-dashboard', title: 'TechnoCo — Gadget Catalog Dashboard', category: 'UI / UX & Dashboard', description: 'A modern gadget catalog and e-commerce dashboard with product browsing, shopping flow, articles, and administration tools.', tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js'], number: '05' },
  { slug: 'food-ordering', title: 'Food Ordering Web Application', category: 'Web Application', description: 'A food ordering platform with menus, cart, checkout, payments, order history, and user authentication.', tech: ['Laravel 10', 'PHP', 'MySQL', 'Bootstrap'], number: '06' },
  { slug: 'tic-tac-toe-ai', title: 'Tic-Tac-Toe AI Game', category: 'Desktop Application', description: 'A Pygame desktop game supporting Player vs Player and Player vs AI modes with an unbeatable Minimax option.', tech: ['Python', 'Pygame', 'NumPy', 'Minimax'], number: '07' },
  { slug: 'cancer-prediction', title: 'Cancer Prediction Web Application', category: 'Machine Learning', description: 'A Flask application that predicts whether a tumor is benign or malignant from clinical measurements.', tech: ['Python', 'Flask', 'Pandas', 'Scikit-learn'], number: '08' },
]

const experience = [
  { date: 'Mar 2026 — Aug 2026', role: 'Programmer Intern', company: 'PIPTP Universitas Airlangga', detail: 'Redeveloped and maintained the official PIPTP website, developed certification registration platforms, and used Docker for consistent development environments.' },
  { date: 'Sep 2025 — Feb 2026', role: 'Programmer Intern', company: 'PIPTP Universitas Airlangga', detail: 'Tested and evaluated the MOOC UNAIR website, improved dashboard and catalog components, and developed a lecturer certification registration system with a three-person team.' },
  { date: 'Jul 2021 — Sep 2021', role: 'Programmer Intern', company: 'Mayantara Media Group', detail: 'Developed an RT/RW recommendation letter application, translated user requirements into features, and performed testing and debugging.' },
]

const skillGroups = [
  ['Backend', 'Laravel', 'PHP', 'Node.js', 'Python'],
  ['Frontend', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  ['Database & Tools', 'MySQL', 'SQLite', 'Docker', 'Git'],
  ['Analysis', 'Requirements analysis', 'System design', 'Problem solving'],
]

const projectDetails = {
  'piptp-certification': {
    title: 'PIPTP Certification Registration',
    category: 'Backend / Web Application',
    summary: 'A web-based registration platform for lecturer certification and LSP student certification at Universitas Airlangga.',
    context: 'The platform was developed to support a clearer and more structured registration flow for certification programs managed by PIPTP.',
    role: 'Programmer Intern',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker'],
    responsibilities: ['Implemented and maintained system features based on functional requirements.', 'Worked with a three-person development team during the lecturer certification system development.', 'Used Docker to support a consistent and reproducible development environment.', 'Performed debugging, testing, and system maintenance.'],
    note: 'Project details are presented at a high level to respect organizational and system confidentiality.',
  },
  'piptp-website': {
    title: 'PIPTP Official Website',
    category: 'Web Development',
    summary: 'Redevelopment and maintenance work for the official PIPTP website.',
    context: 'The project focused on improving website functionality and keeping features aligned with organizational requirements.',
    role: 'Programmer Intern',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker'],
    responsibilities: ['Implemented website improvements and updated features.', 'Worked from organizational requirements.', 'Performed testing, debugging, and system maintenance to improve reliability.'],
    note: 'Public screenshots and implementation specifics will be added only where permission and confidentiality allow.',
  },
  'rt-rw-letter': {
    title: 'RT/RW Letter Application',
    category: 'Full Stack Development',
    summary: 'A web application that streamlines resident requests for RT/RW recommendation letters.',
    context: 'The application was created as an alternative to in-person requests and to make the recommendation letter process easier to manage.',
    role: 'Programmer Intern',
    stack: ['Web Application', 'Requirements Analysis', 'Testing'],
    responsibilities: ['Translated user requirements into functional application features.', 'Implemented features for the recommendation letter request process.', 'Completed the project to approximately 90%.', 'Conducted testing and debugging.'],
    note: 'The completion percentage reflects the CV description and is not presented as a production adoption metric.',
  },
  'mountain-hiking-recommendation': {
    title: 'Mountain Hiking Recommendation System',
    category: 'Data & Machine Learning',
    summary: 'A web-based recommendation system for the 7 Summits of East Java based on online review data.',
    context: 'The project explored how natural language processing and user preferences could support more relevant hiking destination recommendations.',
    role: 'Developer / Researcher',
    stack: ['Python', 'Flask', 'LDA', 'LightGBM', 'SQLite'],
    responsibilities: ['Applied NLP and aspect analysis to extract information from hiking reviews.', 'Used LDA for topic exploration and LightGBM for aspect classification.', 'Implemented content-based filtering with cosine similarity.', 'Integrated Flask, SQLAlchemy, and SQLite for application logic and recommendation feedback.'],
    note: 'The original research dataset and source code are no longer available. A future portfolio reconstruction will use synthetic data and will be labeled clearly as a demonstration.',
  },
  'school-violation-management': { title: 'School Violation Management', category: 'Full Stack Web Application', summary: 'Transaksi is a school violation management web application for managing students, employees, departments, and student violations.', role: 'Developer', stack: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Axios', 'Bootstrap', 'REST API'], context: 'The system centralizes school data and violation records so they can be managed through a structured web interface.', responsibilities: ['Implemented interfaces for student, employee, department, and violation data.', 'Connected the frontend to a REST API.', 'Used JWT-based authentication for protected application access.'], note: 'The project description is based on the supplied portfolio information.' },
  'internet-cafe-reservation': { title: 'INCAF — Internet Café Reservation', category: 'Web Application', summary: 'A web-based gaming internet café platform for discovering facilities and reserving tables or gaming packages online.', role: 'Developer', stack: ['Laravel 10', 'PHP 8.1+', 'Blade', 'MySQL', 'Bootstrap', 'Vite', 'Axios', 'Laravel Sanctum'], context: 'INCAF brings gaming café discovery, package selection, table reservation, and payment-related pages into one platform.', responsibilities: ['Built pages for authentication, package selection, and reservation flows.', 'Implemented the application with Laravel and Blade.', 'Used Sanctum for authentication and Vite/Axios for the frontend workflow.'], note: 'Payment-related functionality is described as pages and flow elements; no payment provider integration is claimed.' },
  'laundry-management': { title: 'Laundry Management System', category: 'Full Stack Web Application', summary: 'A centralized dashboard for managing customers, laundry packages, users, and transactions.', role: 'Developer', stack: ['React.js', 'React Router', 'Bootstrap', 'Axios', 'Node.js', 'Express.js', 'Sequelize', 'MySQL', 'JWT'], context: 'The system supports daily laundry operations through connected management views and transaction workflows.', responsibilities: ['Built React views and client-side routing.', 'Connected the application to a Node.js and Express.js backend.', 'Used Sequelize ORM, MySQL, and JWT authentication.'], note: 'The project description is based on the supplied portfolio information.' },
  'technoco-gadget-dashboard': { title: 'TechnoCo — Gadget Catalog Dashboard', category: 'UI / UX & Dashboard', summary: 'A college UI/UX project designed as a modern gadget catalog and e-commerce dashboard.', role: 'UI/UX and Frontend Developer', stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Chart.js', 'Font Awesome', 'Boxicons', 'jQuery'], context: 'TechnoCo explores a complete shopping experience for laptops and smartphones alongside an admin dashboard.', responsibilities: ['Designed product browsing, detail, cart, order history, and payment-flow screens.', 'Included technology articles and user account flows.', 'Designed administration views for products, users, articles, transactions, and statistics.'], note: 'This is presented as a college UI/UX project.' },
  'food-ordering': { title: 'Food Ordering Web Application', category: 'Web Application', summary: 'A web-based food ordering platform for browsing menus, managing carts, placing orders, and reviewing order history.', role: 'Developer', stack: ['Laravel 10', 'PHP 8.1+', 'MySQL / SQLite', 'Blade', 'JavaScript', 'Axios', 'Vite', 'Bootstrap', 'Sanctum'], context: 'The application provides a complete ordering journey from menu discovery through account and order management.', responsibilities: ['Implemented menu, item detail, cart, order, payment, and history flows.', 'Added registration, login, and logout functionality.', 'Built the application with Laravel, Blade, Bootstrap, and Sanctum.'], note: 'No specific payment provider or production deployment is claimed.' },
  'tic-tac-toe-ai': { title: 'Tic-Tac-Toe AI Game', category: 'Desktop Application', summary: 'A desktop Tic-Tac-Toe game with Player vs Player and Player vs AI modes.', role: 'Developer', stack: ['Python', 'Pygame', 'NumPy', 'Minimax', 'OOP'], context: 'The game explores interactive desktop application design and algorithmic decision-making through multiple AI difficulty options.', responsibilities: ['Implemented random-move and unbeatable Minimax AI modes.', 'Added mouse controls, keyboard shortcuts, win/draw detection, and board reset.', 'Built graphical rendering with Pygame and structured the code using OOP.'], note: 'The Minimax mode is described as unbeatable within the implemented game rules.' },
  'cancer-prediction': { title: 'Cancer Prediction Web Application', category: 'Machine Learning', summary: 'A Flask web application that predicts whether a tumor is benign or malignant from clinical measurements.', role: 'Developer', stack: ['Python', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn', 'HTML', 'CSS', 'JavaScript'], context: 'The application demonstrates a machine-learning workflow using clinical measurements such as radius, texture, perimeter, area, smoothness, compactness, symmetry, and fractal dimension.', responsibilities: ['Prepared a web interface for entering clinical measurements.', 'Connected the Flask application to a trained scikit-learn model.', 'Used CSV-based data with Pandas and NumPy for the application workflow.'], note: 'This is an educational demonstration and must not be presented as a clinical diagnostic tool.' },
}

function ProjectCard({ project }) {
  return <Link className="project-card" to={`/projects/${project.slug}`}><div className="project-visual"><span>{project.number}</span><div className="project-shape" /></div><div className="project-info"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><span className="card-link">View details <ArrowUpRight size={14} /></span></div></Link>
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Damar's Digital Space home">
          <span className="brand-mark">D</span>
          <span>Damar<span className="brand-dot">.</span></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Available for opportunities</p>
            <h1 id="hero-title">Building digital solutions<span className="accent">,</span><br />exploring <em>what's next.</em></h1>
            <p className="hero-intro">Hello, I'm Muhammad Damar Widyansyah — a Backend &amp; Web Developer who enjoys turning real-world problems into thoughtful, reliable systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="/cv/damar-cv.pdf"><Download size={16} /> Download CV</a>
            </div>
            <div className="hero-meta"><span>Based in Indonesia</span><span className="meta-line" /><span>Open to collaborate</span></div>
          </div>
          <div className="hero-visual">{isMobile ? <CharacterAvatar /> : <Suspense fallback={<CharacterAvatar />}><CharacterModel fallback={<CharacterAvatar />} /></Suspense>}</div>
        </section>

        <section className="intro-strip" id="about"><p>Currently focused on</p><div><span>Backend development</span><i>·</i><span>Web applications</span><i>·</i><span>Data-driven solutions</span></div></section>
        <section className="content-section about-section"><div><p className="eyebrow"><span /> About me</p><h2>Curious about how<br /><em>systems come together.</em></h2></div><div className="about-copy"><p>I'm a D4 Informatics Engineering graduate from Universitas Airlangga with a technical background in web and system development.</p><p>My work spans Laravel, Node.js, PHP, MySQL, and Python. I enjoy understanding the problem behind a feature, shaping clear requirements, and translating business needs into reliable technical solutions.</p><a className="text-link" href="/cv/damar-cv.pdf">Read my CV <ArrowUpRight size={15} /></a></div></section>
        <section className="content-section projects-section" id="projects"><div className="section-head"><div><p className="eyebrow"><span /> Projects</p><h2>Projects with purpose.</h2></div><p className="section-note">A collection of systems, experiments, and collaborations from my development journey.</p></div><div className="project-segment"><div className="segment-heading"><span>01</span><h3>Internship experience</h3><p>Professional work completed during my internships at PIPTP Universitas Airlangga and Mayantara Media Group.</p></div><div className="project-grid">{internshipProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></div><div className="project-segment"><div className="segment-heading"><span>02</span><h3>Selected projects</h3><p>Academic, independent, and collaborative projects exploring web development, data, machine learning, and interactive applications.</p></div><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></div></section>
        <section className="content-section experience-section muted" id="experience"><p className="eyebrow"><span /> Experience</p><div className="section-head"><h2>Learning by<br /><em>building for real people.</em></h2><p className="section-note">Internships and project work have taught me to combine implementation with communication, testing, and iteration.</p></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.date}><div className="timeline-date">{item.date}</div><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div></article>)}</div></section>
        <section className="content-section skills-section" id="skills"><div className="section-head"><div><p className="eyebrow"><span /> Skills</p><h2>Tools for turning<br /><em>ideas into systems.</em></h2></div><p className="section-note">Technologies and methods I can discuss confidently and continue to develop through practice.</p></div><div className="skill-grid">{skillGroups.map(([group, ...skills]) => <div className="skill-group" key={group}><h3>{group}</h3>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>)}</div></section>
        <section className="contact-section muted" id="contact"><div><p className="eyebrow"><span /> Contact</p><h2>Let's build something<br /><em>useful together.</em></h2></div><div className="contact-details"><p>Have a project, opportunity, or system problem to talk through?</p><a className="email-link" href="mailto:damarwidyansyah@gmail.com">damarwidyansyah@gmail.com <ArrowUpRight size={17} /></a><div className="socials"><a href="https://www.linkedin.com/in/muhammad-damar-widyansyah" aria-label="LinkedIn"><ExternalLink size={18} /></a><a href="https://github.com/damarwdsyh003" aria-label="GitHub"><ExternalLink size={18} /></a><a href="mailto:damarwidyansyah@gmail.com" aria-label="Email"><AtSign size={18} /></a></div></div></section>
      </main>
      <footer><span>© 2026 Damar's Digital Space</span><span>Built with curiosity.</span></footer>
    </div>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projectDetails[slug]

  if (!project) {
    return <main className="not-found"><p className="eyebrow"><span /> Project not found</p><h1>This project page does not exist.</h1><Link className="button button-primary" to="/">Back home <ArrowUpRight size={16} /></Link></main>
  }

  return <main className="project-detail"><div className="detail-top"><button className="back-link" onClick={() => navigate(-1)}>← Back</button><span className="detail-index">Project / {String(Object.keys(projectDetails).indexOf(slug) + 1).padStart(2, '0')}</span></div><header className="detail-hero"><p className="eyebrow"><span /> {project.category}</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p></header><div className="detail-layout"><aside><p className="detail-label">Role</p><p>{project.role}</p><p className="detail-label">Technology</p><div className="tag-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></aside><div className="detail-content"><section><p className="detail-label">Overview</p><p>{project.context}</p></section><section><p className="detail-label">Responsibilities</p><ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section><section className="detail-note"><p>{project.note}</p></section></div></div><div className="detail-footer"><Link to="/#projects">← View all projects</Link><Link to="/">Home <ArrowUpRight size={15} /></Link></div></main>
}

function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectDetail />} /></Routes>
}

export default App
