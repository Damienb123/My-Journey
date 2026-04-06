import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import smolagent from '../../assets/smolagent.png';
import bias_analysis from '../../assets/bias_analysis.png';
import pagingvirtualmemory from '../../assets/pagingvirtualmemory.png';
import linerenderer from '../../assets/LineRenderingApp.png';
import ProjectCard from '../../common/ProjectCard';
import developerjourney from '../../assets/DevelopersJourney.png';
import foodie from '../../assets/FoodiePage.png';
import DigitalWave from '../../assets/DigitalWave.png';
import recipeorganizer from '../../assets/recipeorganizer.png';
import personallogo from '../../assets/personallogo.png';
import Soundwaveprototypes from '../../assets/Soundwaveprototypes.png';
import UXresearchstudy from '../../assets/UXresearchstudy.png';
import Mealswipes from '../../assets/Mealswipes.png';
import FoodieMockup from '../../assets/FoodieMockup.png';
import LePalaiNewFeature from '../../assets/LePalaiNewFeature.png';
import AIWeatherAgent from '../../assets/ai-weather-agent.png';
import { aiResearchSection as research } from './aiResearchSection';

const researchCards = [
  { title: research.overviewTitle, items: research.overviewBullets },
  { title: research.focusTitle, items: research.focusBullets },
  { title: research.outcomesTitle, items: research.outcomesBullets },
].filter((card) => Array.isArray(card.items) && card.items.length > 0);

const aiProjects = [
  {
    src: smolagent,
    link: 'https://github.com/Damienb123/smolagent-training-model',
    h3: 'AI-Training Model',
    p: 'SmolAgents framework',
    summary: 'Certification project: contextual recommendations with a Hugging Face agent.',
    tags: ['Python', 'Hugging Face', 'Agents'],
  },
  {
    src: bias_analysis,
    link: 'https://github.com/Damienb123/Bias-Mitigation-Research',
    h3: 'Clinical QA & bias study',
    p: 'Independent study — EHR AI',
    summary: 'RAG-style pipeline with fairness and interpretability analysis on demographic slices.',
    tags: ['Python', 'RAG', 'Healthcare AI'],
  },
  {
    src: AIWeatherAgent,
    link: 'https://github.com/Damienb123/agentic-developer-project',
    h3: 'Supportive weather checking agent',
    p: 'AI Weather Agent',
    summary: 'An AI agent that supports users intuitively checking what the weather is like in real time using a public API.',
    tags: ['Python', 'React', 'Vite', 'MCP Server', 'OpenWeather API', 'OpenAI API'],
  },
];

const devProjects = [
  {
    src: foodie,
    link: 'https://github.com/Software-Engineering-Project-Team/online_shopping_system',
    h3: 'Foodie',
    p: 'Grocery store app',
    summary: 'Team-built shopping flow with database-backed catalog and checkout.',
    tags: ['React', 'MySQL', 'Team'],
  },
  {
    src: developerjourney,
    link: 'https://github.com/Damienb123/developer-journey',
    h3: 'Developer Journey',
    p: 'Personal blog',
    summary: 'Articles and notes on learning full-stack development.',
    tags: ['React', 'Content'],
  },
  {
    src: linerenderer,
    link: 'https://github.com/Damienb123/WebGL-line-renderer',
    h3: 'WebGL Line Renderer',
    p: 'Interactive graphics',
    summary: 'Browser-based line rendering and interaction experiments.',
    tags: ['WebGL', 'JavaScript'],
  },
  {
    src: DigitalWave,
    link: 'https://github.com/Damienb123/Login-Page',
    h3: 'Responsive login',
    p: 'UI-focused auth screen',
    summary: 'Mobile-first layout and form UX for a branded sign-in experience.',
    tags: ['HTML', 'CSS', 'Responsive'],
  },
  {
    src: recipeorganizer,
    link: 'https://github.com/CS-3743-Database-Systems-Team/Recipe-Organizer-MySQLdatabase',
    h3: 'Recipe Organizer',
    p: 'Database design',
    summary: 'Relational schema and queries supporting recipe search and organization.',
    tags: ['MySQL', 'SQL', 'Backend'],
  },
  {
    src: pagingvirtualmemory,
    link: 'https://github.com/Damienb123/paging_virtual_memory',
    h3: 'Paging & virtual memory',
    p: 'OS concepts',
    summary: 'Simulation of paging and address translation for coursework.',
    tags: ['C', 'Operating systems'],
  },
];

const uxProjects = [
  {
    src: personallogo,
    link: 'https://www.figma.com/design/kNStC3Yoz2ltj2bxgIrYvC/My-Logo?node-id=0-1&t=zvt5LJqbqC5wfAgG-1',
    h3: 'Personal logo',
    p: 'Brand mark',
    summary: 'Identity exploration in vector form for portfolio use.',
    tags: ['Figma', 'Branding'],
  },
  {
    src: Soundwaveprototypes,
    link: 'https://www.figma.com/design/Ye0CJ9Ryx9YUn1AcLr83B5/Music-App-Prototypes?node-id=0-1&t=tVuXRnSWSdJt7B7U-1',
    h3: 'Soundwave',
    p: 'Hi-fi app prototypes',
    summary: 'Screen flows and components for a music listening experience.',
    tags: ['Figma', 'Prototype', 'UX'],
  },
  {
    src: UXresearchstudy,
    link: 'https://www.figma.com/deck/bzIiDiLzRQC0HAk2vY5ElK/LepPal.ai-Case-Study?node-id=1-27&t=CQTRazICC99Dl3z4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    h3: 'LePal.ai case study',
    p: 'UX research deck',
    summary: 'Research synthesis and recommendations for an AI companion product.',
    tags: ['Research', 'Figma', 'Presentation'],
  },
  {
    src: Mealswipes,
    link: 'https://www.figma.com/proto/kYEK1j2epPfcHrXBltTgFy/Food-truck-Review-app-Prototypes?node-id=39-180&starting-point-node-id=39%3A180&t=nJ79qhOzl4RTPdFj-1',
    h3: 'Meal Swipes',
    p: 'Food-truck review app',
    summary: 'Clickable prototype for discovery, reviews, and truck profiles.',
    tags: ['Figma', 'Mobile UX'],
  },
  {
    src: FoodieMockup,
    link: 'https://www.figma.com/proto/gPEzBzymoX13NuKo7hLlKq/Online-Shopping-System--Landing-Page-?node-id=1-2&t=uRACOkLGS7RYcDHd-1',
    h3: 'Foodie landing',
    p: 'Marketing mockup',
    summary: 'Landing page layout aligned with the engineering grocery project.',
    tags: ['Figma', 'UI'],
  },
  {
    src: LePalaiNewFeature,
    link: 'https://www.figma.com/proto/CQRwWaNoRROLPBPC2lsTVW/LePal-New-Feature?node-id=5-46&t=dH4gXN0W4XD2tFu6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    h3: 'LePal.ai — find friends',
    p: 'New feature flow',
    summary: 'Search and connect flow extending the core companion experience.',
    tags: ['Figma', 'Feature design'],
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className={styles.container}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="sectionTitle" style={{ marginBottom: '2rem' }}>
        {research.sectionTitle}
      </h1>
      <p className={styles.description} style={{ marginBottom: '2rem' }}>
        {research.intro}
      </p>
      {researchCards.map((card) => (
        <div key={card.title} className={styles.courseListContainer}>
          <h2 className={styles.courseListTitle}>{card.title}</h2>
          <ul className={styles.courseList}>
            {card.items.map((line, i) => (
              <li key={`${card.title}-${i}`}>{line}</li>
            ))}
          </ul>
        </div>
      ))}

      <h1 className="sectionTitle" style={{ marginBottom: '2rem' }}>
        Artificial Intelligence
      </h1>
      <p className={styles.description} style={{ marginBottom: '2rem' }}>
        Work on agentic AI with a focus on real-world impact, interpretability, and
        responsible deployment from Hugging Face agent certification to clinical QA
        pipelines on EHR data, bias mitigation, and visual analytics across demographics.
      </p>
      <div className={styles.projectsContainer}>
        {aiProjects.map((proj, index) => (
          <ProjectCard key={proj.h3} {...proj} index={index} />
        ))}
      </div>

      <h1 className="sectionTitle" style={{ marginTop: '4rem' }}>
        Software Development
      </h1>
      <p className={styles.description} style={{ marginBottom: '2rem' }}>
        Scalable, maintainable software with clean architecture, collaboration, and
        thoughtful UX — highlights below across full-stack and systems work.
      </p>
      <div className={styles.projectsContainer}>
        {devProjects.map((proj, index) => (
          <ProjectCard key={proj.h3} {...proj} index={index} />
        ))}
      </div>

      <h1
        className="sectionTitle"
        style={{ marginTop: '8rem', marginBottom: '2rem' }}
      >
        UX/UI
      </h1>
      <p className={styles.description} style={{ marginBottom: '2rem' }}>
        Design that feels personal and usable: research, prototyping, and
        user-centered iteration — Figma work spanning identity, apps, and case studies.
      </p>
      <div className={styles.projectsContainer}>
        {uxProjects.map((proj, index) => (
          <ProjectCard key={proj.h3} {...proj} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;

