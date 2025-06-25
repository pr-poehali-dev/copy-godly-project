import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Contact {
  id: number;
  platform: string;
  handle: string;
  icon: string;
  color: string;
}

const ContactsSection = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      platform: "Telegram",
      handle: "@ghost_protocol",
      icon: "MessageCircle",
      color: "neon-crimson",
    },
    {
      id: 2,
      platform: "ProtonMail",
      handle: "ghost@protonmail.com",
      icon: "Mail",
      color: "neon-red",
    },
    {
      id: 3,
      platform: "Signal",
      handle: "+7-999-GHOST",
      icon: "Phone",
      color: "neon-burgundy",
    },
    {
      id: 4,
      platform: "Discord",
      handle: "GhostProtocol#0001",
      icon: "MessageSquare",
      color: "neon-crimson",
    },
  ]);

  const [editingContact, setEditingContact] = useState<number | null>(null);

  const updateContact = (id: number, field: keyof Contact, value: string) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, [field]: value } : contact,
      ),
    );
  };

  const addContact = () => {
    const newContact: Contact = {
      id: Math.max(...contacts.map((c) => c.id)) + 1,
      platform: "Новая платформа",
      handle: "@newhandle",
      icon: "MessageCircle",
      color: "neon-crimson",
    };
    setContacts([...contacts, newContact]);
    setEditingContact(newContact.id);
  };

  const removeContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold neon-red mb-2 text-hover">
            <Icon name="Wifi" className="inline mr-2" size={32} />
            Связь
          </h2>
          <div className="w-16 h-px bg-neon-red mx-auto"></div>
        </div>

        <div className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 scan-line smooth-hover">
          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center space-x-4 p-4 bg-dark-red/50 rounded-lg smooth-hover"
              >
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br from-${contact.color}/20 to-${contact.color}/10`}
                >
                  <Icon
                    name={contact.icon as any}
                    size={20}
                    className={`text-${contact.color}`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  {editingContact === contact.id ? (
                    <div className="space-y-1">
                      <input
                        type="text"
                        value={contact.platform}
                        onChange={(e) =>
                          updateContact(contact.id, "platform", e.target.value)
                        }
                        onBlur={() => setEditingContact(null)}
                        className="bg-transparent text-sm font-code text-gray-400 border-0 outline-0 w-full"
                      />
                      <input
                        type="text"
                        value={contact.handle}
                        onChange={(e) =>
                          updateContact(contact.id, "handle", e.target.value)
                        }
                        onBlur={() => setEditingContact(null)}
                        className={`bg-transparent font-orbitron font-semibold text-${contact.color} border-0 outline-0 w-full`}
                        autoFocus
                      />
                    </div>
                  ) : (
                    <div
                      className="space-y-1 cursor-pointer text-hover"
                      onClick={() => setEditingContact(contact.id)}
                    >
                      <div className="text-sm font-code text-gray-400">
                        {contact.platform}
                      </div>
                      <div
                        className={`font-orbitron font-semibold text-${contact.color} truncate`}
                      >
                        {contact.handle}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => removeContact(contact.id)}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                  title="Удалить контакт"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={addContact}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-red/10 border border-neon-red/30 rounded-lg text-neon-red font-code button-hover"
            >
              <Icon name="Plus" size={16} />
              <span>ДОБАВИТЬ КОНТАКТ</span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-sm font-code text-gray-500">
              <Icon name="Shield" size={16} />
              <span>Все коммуникации зашифрованы • Время ответа: 24ч</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
