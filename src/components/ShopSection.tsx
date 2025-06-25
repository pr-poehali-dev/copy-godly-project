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
      title: "Анализ цифрового следа",
      description:
        "Полное исследование онлайн-присутствия и оценка уязвимостей",
      price: "25000₽",
      icon: "Search",
    },
    {
      id: 2,
      title: "Разведка в соцсетях",
      description: "Глубокий анализ социальных сетей и построение карты связей",
      price: "15000₽",
      icon: "Users",
    },
    {
      id: 3,
      title: "Отчет по оценке угроз",
      description: "Комплексная оценка безопасности и анализ рисков",
      price: "40000₽",
      icon: "Shield",
    },
    {
      id: 4,
      title: "Мониторинг Dark Web",
      description:
        "Непрерывное наблюдение за подпольными сетями и торговыми площадками",
      price: "30000₽",
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
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold neon-burgundy mb-2 text-hover">
            <Icon name="ShoppingCart" className="inline mr-2" size={32} />
            Услуги
          </h2>
          <div className="w-16 h-px bg-neon-burgundy mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="relative group">
              <div className="bg-cyber-gray/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 scan-line smooth-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-neon-burgundy/20 to-neon-crimson/20 rounded-lg">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-neon-burgundy"
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
                      className="bg-transparent text-2xl font-orbitron font-bold neon-red border-0 outline-0 text-right w-24"
                      autoFocus
                    />
                  ) : (
                    <span
                      className="text-2xl font-orbitron font-bold neon-red cursor-pointer text-hover"
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
                    className="text-xl font-orbitron font-semibold text-white mb-2 cursor-pointer text-hover"
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
                    className="text-gray-400 font-code text-sm leading-relaxed cursor-pointer text-hover"
                    onClick={() => setEditingService(service.id)}
                  >
                    {service.description}
                  </p>
                )}

                <button className="w-full mt-4 py-2 bg-gradient-to-r from-neon-burgundy/20 to-neon-crimson/20 border border-neon-burgundy/50 rounded font-code text-neon-burgundy button-hover">
                  ЗАКАЗАТЬ УСЛУГУ
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
