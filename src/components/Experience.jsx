import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section id="experience" className="section section--tint">
      <div className="container">
        <SectionHeading title="Work experience" intro="Most recent first." color="var(--violet)" />

        <ol className="timeline">
          <motion.span
            className="timeline-line"
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              className="job"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <span className={`job-dot ${i === 0 ? "job-dot--live" : ""}`} aria-hidden="true" />
              <div className="job-head">
                <h3>{job.role}</h3>
                <span className="job-period">{job.period}</span>
              </div>
              <p className="job-company">{job.company}</p>
              <p>{job.summary}</p>
              <ul className="job-points">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <ul className="chips" aria-label="Tools used">
                {job.tools.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
