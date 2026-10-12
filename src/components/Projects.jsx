import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import { featuredProjects, otherProjects } from "../data/portfolio.js";

function Cover({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const [c1, c2] = project.palette;
  const [imageFailed, setImageFailed] = useState(false);

  if (project.image && !imageFailed) {
    return (
      <div ref={ref} className="cover">
        <motion.img
          style={{ y }}
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  // Illustrated cover used until a real screenshot is added.
  return (
    <div ref={ref} className="cover cover--art" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }} role="img" aria-label={`${project.name} illustration`}>
      <span className="cover-grid" aria-hidden="true" />
      <motion.span className="cover-icon" style={{ y }} aria-hidden="true">
        <Icon name={project.icon} size={96} strokeWidth={1.4} />
      </motion.span>
      <div className="cover-chips" aria-hidden="true">
        {project.stack.slice(0, 4).map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function FeaturedProject({ project, index }) {
  return (
    <motion.article
      className={`feature ${index % 2 ? "feature--flip" : ""}`}
      style={{ "--accent": project.palette[0] }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Cover project={project} />

      <div className="feature-body">
        <h3>{project.name}</h3>
        <p className="feature-tagline">{project.tagline}</p>

        <dl className="feature-story">
          <dt>The problem</dt>
          <dd>{project.problem}</dd>
          <dt>What I built</dt>
          <dd>{project.solution}</dd>
        </dl>

        <ul className="results">
          {project.results.map((r) => (
            <li key={r.label}>
              <strong>{r.value}</strong>
              <span>{r.label}</span>
            </li>
          ))}
        </ul>

        <ul className="chips" aria-label="Tech stack">
          {project.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>

        {project.link && (
          <a className="btn btn-primary btn-sm" href={project.link} target="_blank" rel="noreferrer">
            View application <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          title="Featured work"
          intro="Seven projects that show how I approach a problem, from architecture to measurable results."
          color="var(--magenta)"
        />

        <div className="features">
          {featuredProjects.map((p, i) => <FeaturedProject key={p.id} project={p} index={i} />)}
        </div>

        <Reveal>
          <h3 className="more-title">More projects</h3>
        </Reveal>
        <ul className="more-list">
          {otherProjects.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="more-head">
                <h4>{p.name}</h4>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}>
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
              <p>{p.text}</p>
              <ul className="chips chips--small" aria-label="Tech stack">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
