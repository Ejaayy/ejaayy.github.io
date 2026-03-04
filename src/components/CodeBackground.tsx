import { useEffect, useRef } from "react";

const codeSnippets = [
  "const app = express();",
  "import React from 'react';",
  "async function fetchData() {",
  "  return await db.query(sql);",
  "const [state, setState] = useState();",
  "export default App;",
  "npm install typescript",
  "git commit -m 'init'",
  "SELECT * FROM users;",
  "def train_model(data):",
  "  model.fit(X, y)",
  "docker build -t app .",
  "const router = useRouter();",
  "interface Props { id: string }",
  "forEach((item) => item.run());",
  "console.log('deployed');",
  "pip install tensorflow",
  "CREATE TABLE projects (",
  "  res.json({ success: true });",
];

const CodeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines: HTMLDivElement[] = [];
    const count = 18;

    for (let i = 0; i < count; i++) {
      const line = document.createElement("div");
      line.textContent = codeSnippets[i % codeSnippets.length];
      line.style.cssText = `
        position: absolute;
        white-space: nowrap;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: ${10 + Math.random() * 3}px;
        color: hsl(145 80% 42% / ${0.04 + Math.random() * 0.06});
        top: ${(i / count) * 100}%;
        left: ${-10 + Math.random() * 20}%;
        animation: code-drift ${30 + Math.random() * 40}s linear infinite;
        animation-delay: ${-Math.random() * 40}s;
      `;
      container.appendChild(line);
      lines.push(line);
    }

    return () => lines.forEach((l) => l.remove());
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" />;
};

export default CodeBackground;
