import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["C", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Flask"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Supabase", "SQL"],
  },
  {
    title: "AI & Algorithms",
    items: ["OpenCV", "A*", "BFS", "Zobrist Hashing"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "npm"],
  },
];

const TechStackSection = () => (
  <SectionWrapper id="tech">
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
      Tech <span className="text-primary">Stack</span>
    </h2>
    <div className="h-1 w-12 bg-primary rounded-full mb-10" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
        >
          <h3 className="font-display text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
            {cat.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TechStackSection;
