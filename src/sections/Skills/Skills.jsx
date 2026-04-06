import { motion } from 'framer-motion';
import styles from './SkillsStyles.module.css';

const SKILL_GROUPS = [
  {
    title: 'Design',
    items: [
      'Design Strategy',
      'Service Design',
      'Design System',
      'User Research',
      'UX Design',
      'UI Design',
      'Motion & Interactions',
    ],
  },
  {
    title: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Angular',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend & Tools',
    items: [
      'Node.js',
      'Express',
      'Python',
      'MySQL',
      'Git',
      'Jira',
      'Notion',
      'Figma',
      'MCP Server',
      'OpenAI API',
      'Cursor',
    ],
  },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      className={styles.container}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillsGrid}>
        {SKILL_GROUPS.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-32px' }}
            transition={{
              duration: 0.45,
              delay: groupIndex * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2>{group.title}</h2>
            <motion.div
              className={styles.chips}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-32px' }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.035, delayChildren: 0.04 },
                },
              }}
            >
              {group.items.map((label) => (
                <motion.span
                  key={label}
                  className={styles.chip}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
