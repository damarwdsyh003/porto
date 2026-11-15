# Damar's Digital Space --- Portfolio Website Blueprint

**Document version:** 1.0\
**Status:** Ready for implementation\
**Project type:** Personal developer portfolio\
**Owner:** Muhammad Damar Widyansyah\
**Primary language:** English

------------------------------------------------------------------------

## 1. Project Overview

Damar's Digital Space is a personal portfolio website designed to
showcase software development projects, technical capabilities,
internship experience, and a developing interest in System Analysis and
Business Analysis.

The website combines a lightweight, stylized low-poly 3D workspace with
a conventional, accessible portfolio layout. The 3D scene supports the
visual identity; it must not obstruct navigation, readability, or access
to project information.

### 1.1 Goals

-   Present the owner as a Backend and Web Developer.
-   Showcase selected projects across Laravel, Python, Node.js, and
    React.js.
-   Explain project context, responsibilities, implementation, and
    outcomes.
-   Present internship and project experience clearly.
-   Communicate an emerging interest in System Analysis and Business
    Analysis without overstating professional experience or credentials.
-   Provide a professional link suitable for CVs, LinkedIn, and job
    applications.
-   Remain usable on mid-range mobile devices and non-high-end desktop
    computers.

### 1.2 Positioning

**Current focus:** Backend & Web Development\
**Technical interests:** Web Development, Data Processing, and Machine
Learning\
**Future direction:** System Analysis & Business Analysis

**Suggested tagline:**

> Building Digital Solutions, Exploring Systems, Creating Impact.

### 1.3 Design principles

1.  3D is a visual enhancement, not the primary navigation mechanism.
2.  Conventional navigation and readable content take priority.
3.  Mobile responsiveness and accessibility are part of the initial
    implementation.
4.  The website should remain useful when WebGL is unavailable.
5.  Project claims, metrics, datasets, and outcomes must be accurate and
    verifiable.
6.  The structure should make it easy to add projects, experience, and
    certifications later.

------------------------------------------------------------------------

## 2. Confirmed Product Decisions

  -----------------------------------------------------------------------
  Area                                Decision
  ----------------------------------- -----------------------------------
  Visual style                        Low-poly 3D, simple geometric
                                      objects

  Color direction                     Light, white, beige, natural
                                      lighting

  Navigation                          Conventional menu; 3D is decorative

  Mobile 3D                           Simplified 3D scene

  3D asset approach                   Start with a ready-made model and
                                      customize it

  Website language                    English

  Page structure                      Single-page home plus individual
                                      project detail pages

  Repository                          Private GitHub repository

  Visual priority                     Visual-first, followed by
                                      performance optimization

  Frontend                            React.js + Vite

  Styling                             Tailwind CSS

  3D                                  Three.js + React Three Fiber + Drei

  Animation                           GSAP, used selectively

  Routing                             React Router

  Icons                               Lucide React

  Hosting                             Cloudflare Pages
  -----------------------------------------------------------------------

**Runtime baseline:** Use a supported Node.js LTS release and npm. Pin
dependencies through the lockfile and verify compatibility when
installing or upgrading packages.

------------------------------------------------------------------------

## 3. Information Architecture

### 3.1 Home page

Route: `/`

The home page is a single-page portfolio with the following sections:

1.  Hero
2.  About Me
3.  Projects
4.  Experience
5.  Skills
6.  Contact
7.  Footer

### 3.2 Project detail pages

Route pattern: `/projects/:slug`

Suggested initial routes:

-   `/projects/sipendaki`
-   `/projects/lecturer-certification`
-   `/projects/mooc-unair`
-   `/projects/rt-rw-application`
-   Additional projects can be added when their content and evidence are
    ready.

Each project detail page should include:

1.  Project title and short summary
2.  Project overview
3.  Problem statement or context
4.  Objectives
5.  Role and responsibilities
6.  Technology stack
7.  System design or architecture, where relevant
8.  Implementation details
9.  Screenshots or demo media
10. Challenges and solutions
11. Outcome and limitations
12. Repository or live demo link, only when available and safe to share

### 3.3 Navigation

Recommended desktop navigation:

-   Home
-   About
-   Projects
-   Experience
-   Skills
-   Contact

The navigation should use anchor links on the home page. Project cards
navigate to their own detail routes. On mobile, use a compact menu with
keyboard-accessible controls.

------------------------------------------------------------------------

## 4. Visual Design System

### 4.1 Art direction

The visual concept is a warm, minimal, low-poly digital workspace. The
hero scene may contain:

-   Desk
-   Monitor
-   Laptop
-   Chair
-   Books
-   Desk lamp
-   Plant
-   A small number of decorative objects

Keep the scene composed and uncluttered. Use a camera angle that clearly
presents the workspace without requiring visitors to rotate or explore
it.

### 4.2 Color palette

  Token         Hex         Usage
  ------------- ----------- ----------------------
  Warm White    `#F7F5F0`   Main background
  Soft Beige    `#EAE4D8`   Secondary surfaces
  Muted Sand    `#C7BBA8`   Borders and accents
  Warm Gray     `#746B5E`   Secondary text
  Charcoal      `#383831`   Main text
  Sage Accent   `#9C9B82`   Small accent details

Maintain sufficient text contrast. Do not use the muted palette for
small text unless contrast is adequate.

### 4.3 Typography

Suggested typography:

-   Headings: Plus Jakarta Sans
-   Body: Inter
-   Code snippets: JetBrains Mono

Prefer locally hosted font files in the production build where
practical. If using an external font service during development, provide
a suitable fallback.

### 4.4 UI characteristics

-   Border radius: approximately 12--18px
-   Subtle shadows, not heavy neumorphism
-   Consistent spacing based on an 8px scale
-   Lucide icons
-   Restrained hover transitions
-   Clear focus states for keyboard navigation
-   Consistent button, card, and section-heading styles

------------------------------------------------------------------------

## 5. Section Specifications

### 5.1 Hero

**Purpose:** Immediately communicate identity, role, and value.

Suggested copy:

**Hello, I'm Muhammad Damar Widyansyah.**\
**Backend & Web Developer**

> I build web applications, explore data-driven solutions, and design
> systems that solve real-world problems.

Primary CTA: `Explore Projects`\
Secondary CTA: `Download CV`

Layout:

-   Desktop: text on the left, 3D workspace on the right.
-   Mobile: text first, simplified 3D visual below or beside it.
-   Keep the headline, role, and CTA visible without requiring
    interaction with the 3D scene.

### 5.2 About Me

Include:

-   Short professional biography
-   D4 Informatics Engineering education at Universitas Airlangga
-   Web development experience
-   Interest in system design and business processes
-   CV download link

Aim for approximately 80--120 words. Keep the content factual and
current.

### 5.3 Projects

Project cards should show:

-   Project name
-   Short description
-   Category
-   Technology tags
-   Thumbnail
-   `View Details` link

Potential project inventory:

  -----------------------------------------------------------------------
  Project                 Category                Notes
  ----------------------- ----------------------- -----------------------
  SIPendaki --- 7 Summit  Python / Machine        Thesis project;
  East Java               Learning                portfolio
                                                  reconstruction needs
                                                  transparent
                                                  synthetic-data
                                                  disclosure

  Lecturer Certification  Laravel / Backend       Include only verified
  System                                          features and
                                                  contributions

  MOOC Universitas        Web Development         Describe testing,
  Airlangga                                       fixes, and features
                                                  accurately

  RT/RW Letter            Full Stack Web          Web-based citizen
  Application             Development             letter application

  School Violation Record Node.js / React         Internship project
  System                                          

  Laundry Management      Node.js / React         Internship project
  System                                          
  -----------------------------------------------------------------------

The list is an initial content inventory, not a requirement to publish
every project immediately. Confirm ownership, confidentiality, available
screenshots, and permission before publishing project materials.

### 5.4 Thesis project disclosure

The original SIPendaki source code and dataset are no longer available.
If the project is reconstructed for portfolio demonstration:

-   Clearly label it as a reconstruction.
-   Clearly identify generated data as synthetic.
-   Do not describe synthetic data as original Google Maps or Twitter/X
    data.
-   Do not present new simulated metrics as original thesis results.
-   Do not claim that the reconstruction reproduces the original model
    performance unless this has been independently verified.
-   Distinguish historical thesis methodology from the implementation of
    the new demo.

Suggested disclosure:

> The original research dataset and source code are no longer available.
> This portfolio version is a reconstruction using synthetic data
> created for demonstration purposes. Its outputs and evaluation metrics
> are not presented as the original research findings.

Historical thesis context may be described separately and accurately,
including the original research methodology and scope, while making
clear that it is historical information.

### 5.5 Experience

Use a vertical timeline or compact experience cards.

Potential entries:

-   PIPTP Universitas Airlangga --- Programmer Intern,
    September--December 2025
-   Mayantara Media Group --- Web Developer Intern, three-month
    internship
-   RT/RW Digital Administration Project --- project experience

For each entry include:

-   Organization or project
-   Position or role
-   Dates or duration
-   Responsibilities
-   Tools and technologies
-   Verifiable outcomes

Do not imply that a project engagement was formal employment if it was
not.

### 5.6 Skills

Group skills by category rather than displaying an unstructured logo
wall.

  Category   Skills
  ---------- --------------------------------------------------
  Backend    PHP, Laravel, Node.js, Python
  Frontend   React.js, JavaScript, HTML, CSS
  Database   MySQL, SQLite
  Tools      Git, Docker, Playwright
  Analysis   Requirements analysis, UML, ERD, problem solving

Only list technologies and methods that can be discussed confidently in
an interview. Skills under development can be labeled
`Currently Exploring`.

### 5.7 Contact

Include:

-   Professional email
-   LinkedIn
-   GitHub
-   CV download
-   Optional contact form, if a suitable form service or backend is
    configured

Do not expose private contact details or secrets in client-side code.

------------------------------------------------------------------------

## 6. Technical Architecture

### 6.1 Application architecture

The initial website does not require a custom backend or database.

-   React renders the interface.
-   Project, experience, and skills content is stored in local
    JavaScript or JSON data modules.
-   React Router handles project detail routes.
-   React Three Fiber renders the 3D scene.
-   Cloudflare Pages serves the built static website.

### 6.2 Data flow

``` text
Visitor
  |
  v
React Application
  |
  +--> UI Components
  |
  +--> Local Content Data
  |      +--> Projects
  |      +--> Experience
  |      +--> Skills
  |
  +--> 3D Workspace
  |      +--> React Three Fiber
  |      +--> Three.js / WebGL
  |
  +--> React Router
         +--> Home
         +--> Project Detail
  |
  v
Vite Production Build
  |
  v
Cloudflare Pages
```

### 6.3 Recommended project structure

``` text
damar-portfolio/
├── public/
│   ├── models/
│   │   └── workspace.glb
│   ├── images/
│   │   └── projects/
│   ├── icons/
│   ├── cv/
│   │   └── damar-cv.pdf
│   └── _redirects
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SectionHeading.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── three/
│   │   ├── Workspace.jsx
│   │   ├── WorkspaceScene.jsx
│   │   ├── CameraController.jsx
│   │   └── FallbackScene.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── experience.js
│   │   └── skills.js
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── package-lock.json
└── vite.config.js
```

------------------------------------------------------------------------

## 7. Dependencies

### 7.1 Core

  Package              Purpose
  -------------------- -----------------------------------
  `react`              UI library
  `react-dom`          DOM rendering
  `vite`               Development server and build tool
  `react-router-dom`   Client-side routing

### 7.2 Styling and icons

  Package               Purpose
  --------------------- -------------------------------
  `tailwindcss`         Utility-first CSS
  `@tailwindcss/vite`   Tailwind integration for Vite
  `lucide-react`        Icon components

### 7.3 3D and animation

  Package                Purpose
  ---------------------- -----------------------------
  `three`                3D engine
  `@react-three/fiber`   React renderer for Three.js
  `@react-three/drei`    Common R3F helpers
  `gsap`                 UI and scroll animation

Install commands:

``` bash
npm install react-router-dom lucide-react gsap
npm install three @react-three/fiber @react-three/drei
npm install tailwindcss @tailwindcss/vite
```

Use the compatible versions resolved by npm and retain
`package-lock.json` for repeatable installs.

------------------------------------------------------------------------

## 8. Project Setup Guide

### 8.1 Prerequisites

Install:

-   Node.js LTS
-   npm
-   Git
-   Visual Studio Code (recommended)

Verify:

``` bash
node -v
npm -v
git --version
```

### 8.2 Create the Vite project

``` bash
npm create vite@latest damar-portfolio -- --template react
cd damar-portfolio
npm install
npm run dev
```

The development server should be available at:

`http://localhost:5173`

### 8.3 Configure Vite and Tailwind

`vite.config.js`:

``` javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

`src/index.css`:

``` css
@import "tailwindcss";

:root {
  font-family: "Inter", sans-serif;
  color: #383831;
  background: #F7F5F0;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

::selection {
  background: #C7BBA8;
  color: #383831;
}
```

### 8.4 Configure React Router

`src/main.jsx`:

``` jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

`src/App.jsx`:

``` jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
```

### 8.5 Initial page components

`src/pages/Home.jsx`:

``` jsx
function Home() {
  return (
    <main>
      <h1>Hello, I'm Damar.</h1>
      <p>Backend & Web Developer</p>
    </main>
  )
}

export default Home
```

`src/pages/ProjectDetail.jsx`:

``` jsx
import { useParams } from 'react-router-dom'

function ProjectDetail() {
  const { slug } = useParams()

  return (
    <main>
      <h1>Project Details</h1>
      <p>Project: {slug}</p>
    </main>
  )
}

export default ProjectDetail
```

These are temporary scaffolds. Replace them with the designed components
during implementation.

------------------------------------------------------------------------

## 9. 3D Asset Pipeline

### 9.1 Asset sources

Potential sources:

-   Sketchfab: https://sketchfab.com/
-   Poly Pizza: https://poly.pizza/
-   Blender: https://www.blender.org/

Check the license of each asset before using it. Record the asset
author, source URL, license, and any required attribution in the project
notes.

### 9.2 Customization workflow

``` text
Ready-made 3D model
        |
        v
Import into Blender
        |
        v
Remove unnecessary objects
        |
        v
Adjust geometry, scale, and composition
        |
        v
Apply beige / white materials
        |
        v
Optimize meshes and textures
        |
        v
Export as GLB
        |
        v
Integrate with React Three Fiber
```

### 9.3 Asset guidelines

-   Prefer a compact low-poly model.
-   Remove hidden or unnecessary geometry.
-   Use a small number of materials.
-   Avoid large, uncompressed textures.
-   Prefer baked lighting where suitable.
-   Consider Draco or Meshopt geometry compression.
-   Test the exported GLB in the browser before integrating it.
-   Keep a static image fallback for the scene.

The target GLB size is initially around 1--2 MB, but visual quality and
actual device performance should determine the final budget.

------------------------------------------------------------------------

## 10. 3D Implementation Baseline

Example `src/three/WorkspaceScene.jsx`:

``` jsx
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'

function WorkspaceModel() {
  const { scene } = useGLTF('/models/workspace.glb')

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, -1, 0]}
    />
  )
}

export default function WorkspaceScene() {
  return (
    <div className="h-[450px] w-full">
      <Canvas
        camera={{
          position: [5, 4, 7],
          fov: 40,
        }}
        dpr={[1, 1.5]}
        shadows={false}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={2}
        />

        <Suspense fallback={null}>
          <WorkspaceModel />
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/workspace.glb')
```

This is a starting point, not the final production configuration. Add
loading UI, error handling, reduced-motion behavior, responsive quality
settings, and a non-WebGL fallback before release.

------------------------------------------------------------------------

## 11. Performance and Responsive Strategy

Visual-first development does not mean ignoring performance until the
end. Establish a working visual scene first, then optimize it in
measured iterations.

### 11.1 Desktop

-   Full low-poly scene
-   Fixed or gently moving camera
-   Subtle parallax, if it does not distract
-   Baked or simple lighting
-   Restrained animation
-   No unnecessary real-time effects

### 11.2 Mobile

-   Simplified model or lower-detail variant
-   Lower device pixel ratio
-   Fewer materials and textures
-   No complex shadows
-   Minimal or disabled animation
-   Static image fallback if rendering is too slow or unsupported
-   Keep all portfolio content and navigation available

### 11.3 Optimization checklist

  Area            Strategy
  --------------- ------------------------------------------------
  3D geometry     Low-poly meshes
  Compression     Draco or Meshopt where appropriate
  Textures        Small dimensions; WebP or KTX2 where supported
  Lighting        Prefer baked lighting
  Shadows         Static or disabled on mobile
  Rendering       Adaptive device pixel ratio
  Animation       Pause when scene is off-screen
  Loading         Lazy-load the 3D scene
  Fallback        Static WebP image
  Accessibility   Respect `prefers-reduced-motion`

### 11.4 Performance targets

These are development goals, not measured results:

  Metric                                              Initial target
  -------------------------- ---------------------------------------
  Lighthouse Performance                                         90+
  Largest Contentful Paint                             ≤ 2.5 seconds
  Cumulative Layout Shift                                      ≤ 0.1
  Initial JS bundle                            Aim for ≤ 200 KB gzip
  3D asset                             Aim for approximately 1--2 MB
  Active mobile 3D scene       Aim for 30 FPS on agreed test devices

Measure on real devices and representative network conditions. Do not
sacrifice readability or core functionality merely to improve a score.

------------------------------------------------------------------------

## 12. GitHub and Version Control

Create a private repository named:

`damar-portfolio`

Initialize and push:

``` bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/USERNAME/damar-portfolio.git
git push -u origin main
```

Replace `USERNAME` with the GitHub account username.

Suggested `.gitignore`:

``` gitignore
node_modules
dist
.env
.env.*
!.env.example
.DS_Store
```

Never commit API keys, passwords, credentials, or private personal
information.

Use descriptive commits, for example:

-   `feat: add responsive navigation`
-   `feat: integrate low-poly workspace`
-   `feat: add project detail pages`
-   `style: implement warm minimalist design`
-   `perf: optimize mobile 3d rendering`
-   `fix: handle missing project route`

------------------------------------------------------------------------

## 13. Cloudflare Pages Deployment

1.  Push the project to the private GitHub repository.
2.  Sign in to Cloudflare Dashboard: https://dash.cloudflare.com/
3.  Open Workers & Pages.
4.  Create an application and select Pages.
5.  Connect the GitHub account.
6.  Select `damar-portfolio`.
7.  Configure the build.

  Setting                  Value
  ------------------------ -----------------
  Framework preset         Vite
  Build command            `npm run build`
  Build output directory   `dist`
  Root directory           `/`

Create `public/_redirects`:

``` text
/* /index.html 200
```

This provides an SPA fallback so direct navigation to project detail
routes can load the React application.

Cloudflare Pages will provide a `*.pages.dev` address. A custom domain
can be connected later; purchasing a custom domain is optional and is
not included in the free hosting setup.

------------------------------------------------------------------------

## 14. Development Roadmap

Estimated implementation schedule, assuming project content and a
suitable 3D asset are available:

  ------------------------------------------------------------------------
  Phase                 Scope                                     Estimate
  --------------------- --------------------- ----------------------------
  1\. Foundation        React, Vite,                             1--2 days
                        Tailwind, routing,    
                        layout                

  2\. 3D Environment    Select, customize,                       2--4 days
                        optimize, and         
                        integrate model       

  3\. Portfolio Content Home sections and                        3--4 days
                        project detail pages  

  4\. Interactions      Navigation, hover,                       1--2 days
                        scroll, transitions   

  5\. Optimization &    Responsive tests,                        2--3 days
  Deployment            fallback,             
                        performance,          
                        deployment            
  ------------------------------------------------------------------------

**Estimated total:** 9--15 working days.

The estimate may change depending on the 3D model, content readiness,
and the amount of custom animation.

### Phase 1 --- Foundation

-   [ ] Install Node.js, Git, and VS Code
-   [ ] Create React + Vite project
-   [ ] Install dependencies
-   [ ] Configure Tailwind CSS
-   [ ] Configure React Router
-   [ ] Create folder structure
-   [ ] Create private GitHub repository
-   [ ] Connect GitHub to Cloudflare Pages

### Phase 2 --- 3D Environment

-   [ ] Select a properly licensed low-poly workspace model
-   [ ] Customize the model in Blender
-   [ ] Export GLB
-   [ ] Integrate React Three Fiber
-   [ ] Implement camera and lighting
-   [ ] Add loading and error states
-   [ ] Add static fallback

### Phase 3 --- Portfolio Content

-   [ ] Build Hero
-   [ ] Build About Me
-   [ ] Build Projects
-   [ ] Build Experience
-   [ ] Build Skills
-   [ ] Build Contact
-   [ ] Build project detail template
-   [ ] Add verified project content and media

### Phase 4 --- Interactions

-   [ ] Implement responsive navigation
-   [ ] Add smooth scrolling
-   [ ] Add restrained hover effects
-   [ ] Add scroll animations
-   [ ] Verify project detail navigation
-   [ ] Respect reduced-motion preferences

### Phase 5 --- Optimization and Release

-   [ ] Test desktop layout
-   [ ] Test mobile layout
-   [ ] Test on a mid-range device
-   [ ] Test without WebGL
-   [ ] Optimize GLB and images
-   [ ] Run Lighthouse
-   [ ] Verify all links and downloads
-   [ ] Deploy to Cloudflare Pages

------------------------------------------------------------------------

## 15. Definition of Done

The first public release is ready when:

-   [ ] All planned portfolio sections are present.
-   [ ] The desktop 3D workspace renders correctly.
-   [ ] Mobile uses a simplified scene or fallback.
-   [ ] Project detail pages work when opened directly.
-   [ ] Navigation, buttons, and links work.
-   [ ] There are no broken assets.
-   [ ] Core content remains accessible without WebGL.
-   [ ] Keyboard navigation and focus states work.
-   [ ] Reduced-motion preferences are respected.
-   [ ] Performance has been tested on representative devices.
-   [ ] The GitHub repository remains private.
-   [ ] Cloudflare Pages deployment is successful.
-   [ ] Project claims and dataset disclosures are accurate.

------------------------------------------------------------------------

## 16. Immediate Next Step

Start with **Milestone 1: Build the foundation and visual prototype**.

The first deliverable should be a working responsive Hero section
containing:

1.  A functional conventional navbar.
2.  The approved English headline and introduction.
3.  A primary `Explore Projects` CTA and secondary `Download CV` CTA.
4.  A low-poly 3D workspace integrated into the layout.
5.  A simplified mobile layout.
6.  A static fallback for unsupported or low-performance devices.

Do not build every section before the Hero composition and 3D asset have
been validated.

**Project success criteria:** a distinctive, professional, lightweight
portfolio that communicates development experience clearly and can grow
with future System Analyst or Business Analyst experience and
certifications.
