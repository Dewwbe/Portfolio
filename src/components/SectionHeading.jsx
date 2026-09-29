import Reveal from "./Reveal.jsx";

export default function SectionHeading({ title, intro, color = "var(--magenta)" }) {
  return (
    <Reveal className="section-heading">
      <h2>
        <span className="heading-mark" style={{ background: color }} aria-hidden="true" />
        {title}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
