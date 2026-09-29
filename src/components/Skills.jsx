import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/portfolio.js";

const tileColors = ["#FF2E7E", "#FFB020", "#00E5FF", "#3B82F6", "#8B5CF6", "#FF7A45"];

function monogram(name) {
  const clean = name.replace(/[^A-Za-z0-9+ ]/g, " ").trim().split(/\s+/);
  return (clean.length > 1 ? clean[0][0] + clean[1][0] : clean[0].slice(0, 2)).toUpperCase();
}

function SkillTile({ item, index }) {
  const [failed, setFailed] = useState(!item.icon);
  const color = tileColors[index % tileColors.length];
  return (
    <motion.li
      layout
      className="skill-tile"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.025, 0.3) }}
      whileHover={{ y: -4 }}
    >
      <span className="skill-icon">
        {failed ? (
          <span className="skill-mono" style={{ background: color }} aria-hidden="true">{monogram(item.name)}</span>
        ) : (
          <img src={item.icon} alt="" loading="lazy" onError={() => setFailed(true)} />
        )}
      </span>
      <span className="skill-name">{item.name}</span>
    </motion.li>
  );
}

export default function Skills() {
  const [active, setActive] = useState("all");
  const groups = active === "all" ? skillGroups : skillGroups.filter((g) => g.id === active);
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="skills" className="section section--tint">
      <div className="container">
        <SectionHeading
          title="Tools & technologies"
          intro={`${total} tools I've used across coursework, internships and personal projects. Pick a category to narrow the list.`}
          color="var(--teal)"
        />

        <div className="skill-tabs" role="tablist" aria-label="Skill categories">
          {[{ id: "all", label: "All" }, ...skillGroups].map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={active === g.id}
              className={`skill-tab ${active === g.id ? "is-active" : ""}`}
              onClick={() => setActive(g.id)}
            >
              {active === g.id && <motion.span layoutId="skill-tab-bg" className="skill-tab-bg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className="skill-tab-label">{g.label}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="skill-groups">
          <AnimatePresence mode="popLayout">
            {groups.map((g) => (
              <motion.div layout key={g.id} className="skill-group" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3>{g.label}</h3>
                <ul className="skill-grid">
                  {g.items.map((item, i) => <SkillTile key={item.name} item={item} index={i} />)}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
