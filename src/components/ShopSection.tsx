import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}

const ShopSection = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "Digital Footprint Analysis",
      description:
        "Complete online presence investigation and vulnerability assessment",
      price: "$299",
      icon: "Search",
    },
    {
      id: 2,
      title: "Social Media Intelligence",
      description: "Deep dive into social networks and relationship mapping",
      price: "$199",
      icon: "Users",
    },
    {
      id: 3,
      title: "Threat Assessment Report",
      description: "Comprehensive security evaluation and risk analysis",
      price: "$499",
      icon: "Shield",
    },
    {
      id: 4,
      title: "Dark Web Monitoring",
      description:
        "Continuous surveillance of underground networks and marketplaces",
      price: "$399",
      icon: "Eye",
    },
  ]);

  const [editingService, setEditingService] = useState<number | null>(null);

  const updateService = (id: number, field: keyof Service, value: string) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, [field]: value } : service,
      ),
    );
  };

  return (
    <section id="shop" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold neon-purple mb-2">
            <Icon name="ShoppingCart" className="inline mr-2" size={32} />
            SERVICES.DB
          </h2>
          <div className="w-16 h-px bg-neon-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="relative group">
              <div className="bg-cyber-gray/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:neon-border transition-all duration-300 scan-line">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-lg">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-neon-purple"
                    />
                  </div>
                  {editingService === service.id ? (
                    <input
                      type="text"
                      value={service.price}
                      onChange={(e) =>
                        updateService(service.id, "price", e.target.value)
                      }
                      onBlur={() => setEditingService(null)}
                      className="bg-transparent text-2xl font-orbitron font-bold neon-green border-0 outline-0 text-right w-20"
                      autoFocus
                    />
                  ) : (
                    <span
                      className="text-2xl font-orbitron font-bold neon-green cursor-pointer hover:opacity-80"
                      onClick={() => setEditingService(service.id)}
                    >
                      {service.price}
                    </span>
                  )}
                </div>

                {editingService === service.id ? (
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) =>
                      updateService(service.id, "title", e.target.value)
                    }
                    onBlur={() => setEditingService(null)}
                    className="bg-transparent text-xl font-orbitron font-semibold text-white border-0 outline-0 w-full mb-2"
                  />
                ) : (
                  <h3
                    className="text-xl font-orbitron font-semibold text-white mb-2 cursor-pointer hover:opacity-80"
                    onClick={() => setEditingService(service.id)}
                  >
                    {service.title}
                  </h3>
                )}

                {editingService === service.id ? (
                  <textarea
                    value={service.description}
                    onChange={(e) =>
                      updateService(service.id, "description", e.target.value)
                    }
                    onBlur={() => setEditingService(null)}
                    className="bg-transparent text-gray-400 font-code text-sm leading-relaxed border-0 outline-0 w-full h-20 resize-none"
                  />
                ) : (
                  <p
                    className="text-gray-400 font-code text-sm leading-relaxed cursor-pointer hover:opacity-80"
                    onClick={() => setEditingService(service.id)}
                  >
                    {service.description}
                  </p>
                )}

                <button className="w-full mt-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/50 rounded font-code text-neon-purple hover:bg-neon-purple/10 transition-all duration-300">
                  INITIATE ORDER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
