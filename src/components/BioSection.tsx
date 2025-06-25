import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

const BioSection = () => {
  const [name, setName] = useState("Джон Матрикс");
  const [description, setDescription] = useState(
    "Элитный специалист OSINT с 10+ летним опытом в цифровой разведке и киберанализе. Специализируюсь на продвинутых техниках поиска, анализе социальной инженерии и оценке угроз.",
  );
  const [skills, setSkills] = useState([
    "Разведка в социальных сетях",
    "Исследование Dark Web",
    "Цифровая криминалистика",
    "HUMINT анализ",
    "Анализ угроз",
  ]);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const [editingName, setEditingName] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold neon-crimson mb-2 text-hover">
            <Icon name="User" className="inline mr-2" size={32} />
            Биография
          </h2>
          <div className="w-16 h-px bg-neon-crimson mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-cyber-gray to-dark-red neon-border p-8 scan-line smooth-hover">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <div
                className="w-full h-full bg-gradient-to-br from-neon-red/20 to-neon-burgundy/20 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => fileInputRef.current?.click()}
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <Icon
                      name="Upload"
                      size={60}
                      className="text-neon-red opacity-60 mx-auto mb-2"
                    />
                    <p className="text-sm text-neon-red opacity-80">
                      Загрузить фото
                    </p>
                  </div>
                )}
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
                className="bg-transparent text-2xl font-orbitron font-bold neon-red border-0 outline-0 w-full"
                autoFocus
              />
            ) : (
              <h3
                className="text-2xl font-orbitron font-bold neon-red cursor-pointer text-hover"
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
                onKeyDown={(e) =>
                  e.key === "Enter" && setEditingDescription(false)
                }
                className="bg-transparent text-gray-300 font-code leading-relaxed border-0 outline-0 w-full h-32 resize-none"
                autoFocus
              />
            ) : (
              <p
                className="text-gray-300 font-code leading-relaxed cursor-pointer text-hover"
                onClick={() => setEditingDescription(true)}
              >
                {description}
              </p>
            )}

            <div className="space-y-3">
              <h4 className="text-lg font-orbitron neon-crimson text-hover">
                Специализация:
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    skill={skill}
                    onUpdate={(newSkill) => {
                      const newSkills = [...skills];
                      newSkills[index] = newSkill;
                      setSkills(newSkills);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({
  skill,
  onUpdate,
}: {
  skill: string;
  onUpdate: (skill: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(skill);

  const handleSave = () => {
    onUpdate(value);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center space-x-2 text-sm font-code smooth-hover">
      <div className="w-2 h-2 bg-neon-red rounded-full neon-pulse"></div>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          className="bg-transparent text-gray-300 border-0 outline-0 flex-1"
          autoFocus
        />
      ) : (
        <span
          className="text-gray-300 cursor-pointer text-hover"
          onClick={() => setIsEditing(true)}
        >
          {skill}
        </span>
      )}
    </div>
  );
};

export default BioSection;
