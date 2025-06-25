import { useState } from "react";

interface CyberHeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const CyberHeader = ({ activeSection, onSectionChange }: CyberHeaderProps) => {
  const [title, setTitle] = useState("GHOST_PROTOCOL");
  const [subtitle, setSubtitle] = useState("СПЕЦИАЛИСТ OSINT");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingSubtitle, setIsEditingSubtitle] = useState(false);

  return (
    <header className="relative py-8 px-6">
      <div className="cyber-grid absolute inset-0 opacity-20"></div>

      <div className="relative z-10 text-center">
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsEditingTitle(false)}
            onKeyDown={(e) => e.key === "Enter" && setIsEditingTitle(false)}
            className="bg-transparent text-4xl md:text-6xl font-orbitron font-black neon-red border-0 outline-0 text-center w-full"
            autoFocus
          />
        ) : (
          <h1
            className="text-4xl md:text-6xl font-orbitron font-black neon-red cursor-pointer text-hover"
            onClick={() => setIsEditingTitle(true)}
          >
            {title}
          </h1>
        )}

        {isEditingSubtitle ? (
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            onBlur={() => setIsEditingSubtitle(false)}
            onKeyDown={(e) => e.key === "Enter" && setIsEditingSubtitle(false)}
            className="bg-transparent text-lg md:text-xl font-code neon-crimson border-0 outline-0 text-center w-full mt-2"
            autoFocus
          />
        ) : (
          <p
            className="text-lg md:text-xl font-code neon-crimson mt-2 cursor-pointer text-hover"
            onClick={() => setIsEditingSubtitle(true)}
          >
            {subtitle}
          </p>
        )}

        <div className="w-32 h-px bg-gradient-to-r from-transparent via-neon-red to-transparent mx-auto mt-4 mb-6"></div>

        <nav className="flex justify-center space-x-6 mt-8">
          <button
            onClick={() => onSectionChange("bio")}
            className={`px-6 py-2 border rounded font-code button-hover ${
              activeSection === "bio"
                ? "bg-neon-red/20 border-neon-red text-neon-red"
                : "bg-gradient-to-r from-neon-crimson/20 to-neon-red/20 border-neon-crimson/50 text-neon-crimson"
            }`}
          >
            Био
          </button>
          <button
            onClick={() => onSectionChange("shop")}
            className={`px-6 py-2 border rounded font-code button-hover ${
              activeSection === "shop"
                ? "bg-neon-burgundy/20 border-neon-burgundy text-neon-burgundy"
                : "bg-gradient-to-r from-neon-burgundy/20 to-neon-red/20 border-neon-burgundy/50 text-neon-burgundy"
            }`}
          >
            Услуги
          </button>
          <button
            onClick={() => onSectionChange("contacts")}
            className={`px-6 py-2 border rounded font-code button-hover ${
              activeSection === "contacts"
                ? "bg-neon-red/20 border-neon-red text-neon-red"
                : "bg-gradient-to-r from-neon-red/20 to-neon-crimson/20 border-neon-red/50 text-neon-red"
            }`}
          >
            Связь
          </button>
        </nav>
      </div>
    </header>
  );
};

export default CyberHeader;
