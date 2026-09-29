import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icon.jsx";
import { strengths } from "../data/portfolio.js";

const colors = ["var(--magenta)", "var(--marigold)", "var(--teal)", "var(--cobalt)", "var(--violet)", "var(--tangerine)"];

export default function Strengths() {
  return (
    <section id="strengths" className="section">
      <div className="container">
        <SectionHeading title="Strengths" intro="What I bring to a team, backed by work you can see below." color="var(--cobalt)" />
        <ul className="strength-list">
          {strengths.map((s, i) => (
            <motion.li
              key={s.title}
              className="strength"
              style={{ "--accent": colors[i % colors.length] }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <span className="strength-icon"><Icon name={s.icon} size={24} /></span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
