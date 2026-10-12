import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { activities } from "../data/portfolio.js";

function Photo({ photo, index }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <motion.figure
      className="activity-photo"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <img src={photo.src} alt={photo.alt} loading="lazy" onError={() => setFailed(true)} />
    </motion.figure>
  );
}

export default function Activities() {
  return (
    <section id="activities" className="section">
      <div className="container">
        <SectionHeading
          title="Intracurricular activities"
          intro="Hackathons and competitions I've taken part in alongside my studies."
          color="var(--marigold)"
        />

        <ul className="activity-list">
          {activities.items.map((a, i) => (
            <motion.li
              key={a.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3>{a.event}</h3>
              <p>{a.project}</p>
              {a.note && <span className="activity-note">{a.note}</span>}
            </motion.li>
          ))}
        </ul>

        <div className="activity-gallery">
          {activities.photos.map((p, i) => <Photo key={p.src} photo={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
