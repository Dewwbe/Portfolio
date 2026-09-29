import { motion } from "framer-motion";
import { GraduationCap, Award, Compass } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { about } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About me" color="var(--marigold)" />

        <div className="about-grid">
          <Reveal className="about-bio">
            {about.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}

            <h3 className="about-sub"><GraduationCap size={20} aria-hidden="true" /> Education</h3>
            <ul className="edu-list">
              {about.education.map((e) => (
                <li key={e.school}>
                  <strong>{e.school}</strong>
                  <span>{e.detail}</span>
                  <span className="muted">{e.period}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="about-side">
            <Reveal className="exploring" delay={0.1}>
              <h3 className="about-sub"><Compass size={20} aria-hidden="true" /> What I'm exploring</h3>
              <ul>
                {about.exploring.map((x, i) => (
                  <motion.li
                    key={x.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                  >
                    <strong>{x.label}</strong>
                    <span>{x.detail}</span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="certs" delay={0.2}>
              <h3 className="about-sub"><Award size={20} aria-hidden="true" /> Certifications & research</h3>
              <ul className="cert-list">
                {about.certifications.map((c) => (
                  <li key={c.name}>
                    {c.name}
                    {c.issuer && <span className="muted">, {c.issuer}</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
