import { useState, useEffect } from "react";

export default function CodeAnimation() {
  const [currentLine, setCurrentLine] = useState(0);
  const codeLines = [
    "const sofuf = {",
    "  mission: 'Transform ideas into reality',",
    "  services: ['Web Dev', 'Mobile Apps', 'AI'],",
    "  experience: '10+ years',",
    "  clients: 'Happy developers worldwide'",
    "}",
    "",
    "sofuf.buildAmazingThings() // ✨",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (codeLines.length + 2));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6 text-left max-w-2xl mx-auto shadow-2xl">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm ml-4">sofuf-app.js</span>
      </div>
      <div className="font-mono text-sm">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${index <= currentLine ? "opacity-100" : "opacity-30"}`}
          >
            <span className="text-gray-500 mr-4">{(index + 1).toString().padStart(2, "0")}</span>
            <span className="text-green-400">{line}</span>
            {index === currentLine && <span className="animate-pulse text-white">|</span>}
          </div>
        ))}
      </div>
    </div>
  );
} 