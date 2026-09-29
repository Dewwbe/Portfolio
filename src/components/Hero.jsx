import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";

const markColors = ["var(--magenta)", "var(--marigold)", "var(--teal)"];
const dev = (p) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${p}.svg`;
const orbit = [
  { name: "React", src: dev("react/react-original") },
  { name: "Python", src: dev("python/python-original") },
  { name: "NestJS", src: dev("nestjs/nestjs-original") },
  { name: "Docker", src: dev("docker/docker-original") },
  { name: "PostgreSQL", src: dev("postgresql/postgresql-original") },
  { name: "Flutter", src: dev("flutter/flutter-original") },
];

const ease = [0.22, 1, 0.36, 1];

function Portrait() {
  const [failed, setFailed] = useState(false);
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  return (
    <div className="portrait">
      <motion.div
        className="portrait-orbit"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        {orbit.map((t, i) => {
          const angle = (i / orbit.length) * 2 * Math.PI;
          return (
            <motion.span
              key={t.name}
              className="orbit-chip"
              style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <img src={t.src} alt="" loading="lazy" onError={(e) => { e.currentTarget.replaceWith(Object.assign(document.createElement("b"), { textContent: t.name.slice(0, 2) })); }} />
            </motion.span>
          );
        })}
      </motion.div>

      <motion.div
        className="portrait-frame"
        initial={{ scale: 0.85, opacity: 0, borderRadius: "50%" }}
        animate={{
          scale: 1,
          opacity: 1,
          borderRadius: ["42% 58% 63% 37% / 41% 44% 56% 59%", "58% 42% 38% 62% / 55% 38% 62% 45%", "42% 58% 63% 37% / 41% 44% 56% 59%"],
        }}
        transition={{
          scale: { duration: 0.9, ease },
          opacity: { duration: 0.9 },
          borderRadius: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {!failed ? (
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setFailed(true)} />
        ) : (
          <span className="portrait-fallback" role="img" aria-label={`${profile.name} initials`}>{initials}</span>
        )}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % profile.roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="hero-hello" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            Hi, I'm {profile.name}
          </motion.p>

          <h1 className="mantra" aria-label={profile.mantra.join(" ")}>
            {profile.mantra.map((word, i) => (
              <span className="mantra-line" key={word} aria-hidden="true">
                <motion.span
                  className="mantra-mark"
                  style={{ background: markColors[i] }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.55, delay: 0.35 + i * 0.28, ease }}
                />
                <motion.span
                  className="mantra-word"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.28, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <span>{profile.title}</span>
            <span className="role-sep" aria-hidden="true" />
            <span className="role-rotator" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.roles[roleIndex]}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p className="hero-statement" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: 0.6, ease }}>
            {profile.statement}
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.6, ease }}>
            <a className="btn btn-primary" href="#projects">See my work</a>
            <a className="btn btn-ghost" href="#contact"><Mail size={18} aria-hidden="true" /> Get in touch</a>
            <a className="btn btn-link" href={profile.cv} download><Download size={18} aria-hidden="true" /> Download CV</a>
          </motion.div>
        </div>

        <Portrait />
      </div>
    </section>
  );
}
