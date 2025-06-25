import { useState } from "react";

const CyberHeader = () => {
  const [title, setTitle] = useState("GHOST_PROTOCOL");
  const [subtitle, setSubtitle] = useState("OSINT SPECIALIST");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingSubtitle, setIsEditingSubtitle] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            className="bg-transparent text-4xl md:text-6xl font-orbitron font-black neon-green border-0 outline-0 text-center w-full"
            autoFocus
          />
        ) : (
          <h1
            className="text-4xl md:text-6xl font-orbitron font-black neon-green cursor-pointer hover:glitch transition-all duration-300"
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
            className="bg-transparent text-lg md:text-xl font-code neon-cyan border-0 outline-0 text-center w-full mt-2"
            autoFocus
          />
        ) : (
          <p
            className="text-lg md:text-xl font-code neon-cyan mt-2 cursor-pointer hover:opacity-80 transition-all duration-300"
            onClick={() => setIsEditingSubtitle(true)}
          >
            {subtitle}
          </p>
        )}

        <div className="w-32 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mt-4 mb-6"></div>

        {/* Navigation Menu */}
        <nav className="flex justify-center space-x-6 mt-8">
          <button
            onClick={() => scrollToSection("bio")}
            className="px-6 py-2 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/50 rounded font-code text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
          >
            BIO.EXE
          </button>
          <button
            onClick={() => scrollToSection("shop")}
            className="px-6 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border border-neon-purple/50 rounded font-code text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300"
          >
            SHOP.DB
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="px-6 py-2 bg-gradient-to-r from-neon-green/20 to-neon-lime/20 border border-neon-green/50 rounded font-code text-neon-green hover:bg-neon-green/10 hover:border-neon-green transition-all duration-300"
          >
            CONNECT.LOG
          </button>
        </nav>
      </div>
    </header>
  );
};

export default CyberHeader;
