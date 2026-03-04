import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Code2, Brain, TrendingUp } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "CS @ DLSU" },
  { icon: Code2, label: "Full-Stack Dev" },
  { icon: Brain, label: "AI & Algorithms" },
  { icon: TrendingUp, label: "FinTech" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
      About <span className="text-primary">Me</span>
    </h2>
    <div className="h-1 w-12 bg-primary rounded-full mb-8" />

    <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
      <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
        <p>
          I'm a Computer Science student at <strong className="text-foreground">De La Salle University</strong> with
          hands-on experience building production-grade software. I work across the full stack—React, Node.js,
          Flask, MongoDB, and Supabase—delivering systems that solve real problems.
        </p>
        <p>
          My interests converge at the intersection of <strong className="text-foreground">artificial intelligence</strong>,{" "}
          <strong className="text-foreground">algorithmic problem-solving</strong> (A*, BFS, computer vision), and{" "}
          <strong className="text-foreground">financial technology</strong>. I've led investment research teams
          and built business management systems during internships, always driven by impact and scalability.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {highlights.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <Icon size={22} className="text-primary" />
            <span className="text-xs font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
