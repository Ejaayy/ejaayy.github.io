import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Systems Developer Intern",
    org: "Tap&Save",
    points: [
      "Built real-world business management systems end-to-end",
      "Reduced manual workflow time through full-stack automation",
      "Developed integrations across inventory, sales, and payments",
    ],
  },
  {
    role: "Front-End Engineer",
    org: "La Salle Computer Society",
    points: [
      "Built internal tools and web platforms for the organization",
      "Led technical initiatives and code reviews",
      "Organized workshops and hackathons for 200+ students",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
      Experience <span className="text-primary">&</span> Leadership
    </h2>
    <div className="h-1 w-12 bg-primary rounded-full mb-10" />

    <div className="grid md:grid-cols-2 gap-8">
      {/* Professional */}
      <div>
        <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-6">Professional</h3>
        <div className="relative border-l border-border pl-6 space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="absolute -left-[9px] w-[18px] h-[18px] rounded-full bg-card border-2 border-primary flex items-center justify-center" style={{ marginTop: i === 0 ? 0 : undefined }}>
                <Briefcase size={10} className="text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground">{exp.role}</h4>
              <p className="text-sm text-primary mb-2">{exp.org}</p>
              <ul className="space-y-1">
                {exp.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted-foreground">• {pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership & Finance */}
      <div>
        <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-6">Leadership & Finance</h3>
        <div className="space-y-4">
          {[
            { role: "Associate VP for Investment Research", org: "DLSU Organization" },
            { role: "Associate VP for Finance", org: "DLSU SPRINT" },
            { role: "Robotics Team Lead", org: "Senior High School" },
          ].map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <p className="font-display font-medium text-foreground text-sm">{item.role}</p>
              <p className="text-xs text-muted-foreground">{item.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
