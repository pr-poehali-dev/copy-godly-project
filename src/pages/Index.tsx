import { useState } from "react";
import CyberHeader from "@/components/CyberHeader";
import BioSection from "@/components/BioSection";
import ShopSection from "@/components/ShopSection";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("bio");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "bio":
        return <BioSection />;
      case "shop":
        return <ShopSection />;
      case "contacts":
        return <ContactsSection />;
      default:
        return <BioSection />;
    }
  };

  return (
    <div className="min-h-screen bg-darker-red overflow-hidden">
      {/* Matrix background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-neon-red"
              style={{
                left: `${Math.random() * 100}%`,
                height: "100%",
                animation: `matrix-rain ${3 + Math.random() * 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <CyberHeader
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <div className="flex-1">{renderActiveSection()}</div>

        {/* Footer */}
        <footer className="py-8 text-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-neon-red to-transparent mx-auto mb-4"></div>
          <p className="text-xs font-code text-gray-600">
            СТАТУС СИСТЕМЫ: ОНЛАЙН • ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ:{" "}
            {new Date().toLocaleDateString("ru-RU")}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
