import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CircleCheck, CircleAlert, LoaderCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/portfolio.js";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const empty = { from_name: "", reply_to: "", subject: "", message: "" };

function validate(v) {
  const errors = {};
  if (!v.from_name.trim()) errors.from_name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.reply_to)) errors.reply_to = "Enter a valid email address, e.g. name@example.com.";
  if (v.message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}

export default function Contact() {
  const formRef = useRef(null);
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS keys are missing. Copy .env.example to .env and fill in your keys.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...values, to_name: profile.firstName }, { publicKey: PUBLIC_KEY });
      setStatus("sent");
      setValues(empty);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const field = (name, label, props = {}) => (
    <div className={`field ${errors[name] ? "field--error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      {props.as === "textarea" ? (
        <textarea id={name} name={name} rows={5} value={values[name]} onChange={update} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />
      ) : (
        <input id={name} name={name} value={values[name]} onChange={update} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} {...props} />
      )}
      {errors[name] && <span id={`${name}-err`} className="field-error">{errors[name]}</span>}
    </div>
  );

  return (
    <section id="contact" className="section section--ink">
      <div className="container">
        <SectionHeading
          title="Let's work together"
          intro="Have a role, a project or a question? Send a message and I'll reply by email."
          color="var(--marigold)"
        />

        <div className="contact-grid">
          <Reveal className="contact-info">
            <a className="contact-line" href={`mailto:${profile.email}`}>
              <Mail size={20} aria-hidden="true" /> {profile.email}
            </a>
            <p className="contact-line"><MapPin size={20} aria-hidden="true" /> {profile.location}</p>

            <ul className="socials">
              <li><a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={22} /></a></li>
              <li><a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={22} /></a></li>
              <li><a href={profile.socials.medium} target="_blank" rel="noreferrer" aria-label="Medium"><FaMedium size={22} /></a></li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form ref={formRef} className="contact-form" onSubmit={submit} noValidate>
              <div className="field-row">
                {field("from_name", "Name", { autoComplete: "name" })}
                {field("reply_to", "Email", { type: "email", autoComplete: "email" })}
              </div>
              {field("subject", "Subject (optional)")}
              {field("message", "Message", { as: "textarea" })}

              <motion.button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={status === "sending"}
                whileTap={{ scale: 0.97 }}
              >
                {status === "sending" ? (
                  <><LoaderCircle size={18} className="spin" aria-hidden="true" /> Sending message</>
                ) : (
                  <><Send size={18} aria-hidden="true" /> Send message</>
                )}
              </motion.button>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.p key="ok" role="status" className="form-note form-note--ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <CircleCheck size={18} aria-hidden="true" /> Message sent. I'll reply to the email you entered.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p key="err" role="alert" className="form-note form-note--err" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <CircleAlert size={18} aria-hidden="true" /> The message didn't send. Try again, or email {profile.email} directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
