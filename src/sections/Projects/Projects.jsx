import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p, summary, tags = [], index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <div className={styles.imageWrap}>
          <img
            className={styles.thumb}
            src={src}
            alt={`${h3} project preview`}
          />
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{h3}</h3>
          <p className={styles.subtitle}>{p}</p>
          {summary ? <p className={styles.summary}>{summary}</p> : null}
          {tags.length > 0 ? (
            <ul className={styles.tags}>
              {tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </a>
    </motion.article>
  );
}

export default ProjectCard;
