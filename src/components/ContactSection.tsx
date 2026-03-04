import SectionWrapper from "./SectionWrapper";
import { Mail, Github, Linkedin, Sparkles } from "lucide-react";

const ContactSection = () => (
  <SectionWrapper id="contact" className="text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
      Get In <span className="text-primary">Touch</span>
    </h2>
    <div className="h-1 w-12 bg-primary rounded-full mb-6 mx-auto" />

    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
      <Sparkles size={14} />
      Open to Internships & AI/SWE Roles
    </div>

    <p className="text-muted-foreground max-w-md mx-auto mb-10">
      I'm always excited to connect with fellow developers, recruiters, and anyone working on interesting problems.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="mailto:painganedrienejames@gmail.com"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        <Mail size={18} />
        Send Email
      </a>
      <a
        href="https://linkedin.com/in/edrienejamespaingan"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
      >
        <Linkedin size={18} />
        LinkedIn
      </a>
      <a
        href="https://github.com/Ejaayy"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
      >
        <Github size={18} />
        GitHub
      </a>
    </div>
  </SectionWrapper>
);

export default ContactSection;
