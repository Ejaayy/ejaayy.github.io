import SectionWrapper from "./SectionWrapper";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "San Sakay – Commuter Platform",
    desc: "Real-time ride availability and route-based matching system built during a hackathon.",
    tags: ["React", "Node.js", "Real-time"],
  },
  {
    title: "Blanc Business Management System",
    desc: "Full-stack system digitizing inventory, sales, payments, and operations for a business client.",
    tags: ["React", "Node.js", "MongoDB", "Full-Stack"],
  },
  {
    title: "Travel Quotation System",
    desc: "Automated dynamic pricing and client-ready PDF quotation generator.",
    tags: ["React", "Express", "PDF Generation"],
  },
  {
    title: "Stock Portfolio Manager",
    desc: "Flask-based stock trading simulator with authentication and portfolio tracking.",
    tags: ["Flask", "Python", "Finance"],
  },
  {
    title: "Lab Reservation System",
    desc: "Seat reservation system using React, Node.js, MongoDB, and Mongoose.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI & Computer Vision Projects",
    desc: "Sokobot Solver using A*, BFS, GBFS + OpenCV interactive object-tracking game.",
    tags: ["Python", "OpenCV", "A*", "BFS"],
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
      Featured <span className="text-primary">Projects</span>
    </h2>
    <div className="h-1 w-12 bg-primary rounded-full mb-10" />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:glow-border transition-all duration-300"
        >
          <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {p.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/Ejaayy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
          >
            <ExternalLink size={13} /> View on GitHub
          </a>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
