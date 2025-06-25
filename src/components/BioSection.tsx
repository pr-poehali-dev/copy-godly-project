import { useState } from "react";
import Icon from "@/components/ui/icon";

const BioSection = () => {
  const [name, setName] = useState("John Matrix");
  const [description, setDescription] = useState(
    "Elite OSINT specialist with 10+ years of experience in digital reconnaissance and cyber intelligence. Specialized in advanced search techniques, social engineering analysis, and threat assessment.",
  );
  const [skills, setSkills] = useState([
    "Social Media Intelligence",
    "Dark Web Investigation",
    "Digital Forensics",
    "HUMINT Analysis",
    "Threat Intelligence",
  ]);

  const [editingName, setEditingName] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold neon-cyan mb-2">
            <Icon name="User" className="inline mr-2" size={32} />
            BIO.EXE
          </h2>
          <div className="w-16 h-px bg-neon-cyan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-cyber-gray to-cyber-dark neon-border p-8 scan-line">
              <div className="w-full h-full bg-gradient-to-br from-neon-green/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                <Icon
                  name="Shield"
                  size={120}
                  className="text-neon-green opacity-60"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {editingName ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setEditingName(false)}
                onKeyDown={(e) => e.key === "Enter" && setEditingName(false)}
                className="bg-transparent text-2xl font-orbitron font-bold neon-green border-0 outline-0 w-full"
                autoFocus
              />
            ) : (
              <h3
                className="text-2xl font-orbitron font-bold neon-green cursor-pointer hover:opacity-80"
                onClick={() => setEditingName(true)}
              >
                {name}
              </h3>
            )}

            {editingDescription ? (
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={() => setEditingDescription(false)}
                className="bg-transparent text-gray-300 font-code leading-relaxed border-0 outline-0 w-full h-32 resize-none"
                autoFocus
              />
            ) : (
              <p
                className="text-gray-300 font-code leading-relaxed cursor-pointer hover:opacity-80"
                onClick={() => setEditingDescription(true)}
              >
                {description}
              </p>
            )}

            <div className="space-y-3">
              <h4 className="text-lg font-orbitron neon-cyan">
                Specializations:
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm font-code"
                  >
                    <div className="w-2 h-2 bg-neon-green rounded-full neon-pulse"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
