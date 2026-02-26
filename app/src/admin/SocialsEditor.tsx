import { useState } from "react";

type Contact = {
  id: number;
  title: string;
  value: string;
  href: string;
};

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const initialContacts: Contact[] = [
  {
    id: 1,
    title: "Email",
    value: "sauravahire15@gmail.com",
    href: "mailto:sauravahire15@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    value: "Let’s connect professionally",
    href: "#",
  },
  {
    id: 3,
    title: "Instagram",
    value: "View marketing work",
    href: "#",
  },
  {
    id: 4,
    title: "Github",
    value: "Explore my repositories",
    href: "#",
  },
  {
    id: 5,
    title: "Freelance",
    value: "Hire me & view profile",
    href: "#",
  },
  {
    id: 6,
    title: "X",
    value: "Follow my dev journey",
    href: "#",
  },
];

const ContactEditor = () => {
  const [contacts, setContacts] =
    useState<Contact[]>(initialContacts);

  const updateContact = (
    id: number,
    field: keyof Contact,
    value: string
  ) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, [field]: value } : c
      )
    );
  };

  const handleSave = () => {
    console.log("Updated Contacts:", contacts);
    alert("Contact section updated");
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-display font-bold mb-8">
        Edit Contact Section
      </h1>

      <div className="space-y-6">
        {contacts.map((contact, index) => (
          <div
            key={contact.id}
            className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4"
          >
            <h2 className="text-lg font-semibold text-nova-purple mb-2">
              Contact {String(index + 1).padStart(2, "0")}
            </h2>

            <Input
              label="Title"
              value={contact.title}
              onChange={(e) =>
                updateContact(
                  contact.id,
                  "title",
                  e.target.value
                )
              }
            />

            <Input
              label="Display Text"
              value={contact.value}
              onChange={(e) =>
                updateContact(
                  contact.id,
                  "value",
                  e.target.value
                )
              }
            />

            <Input
              label="Link (href)"
              value={contact.href}
              onChange={(e) =>
                updateContact(
                  contact.id,
                  "href",
                  e.target.value
                )
              }
            />
          </div>
        ))}
      </div>

      <button onClick={handleSave} className="btn-primary mt-8">
        Save All Changes
      </button>
    </div>
  );
};

const Input = ({ label, ...props }: InputProps) => (
  <div>
    <label className="block text-sm text-nova-muted mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nova-purple transition"
    />
  </div>
);

export default ContactEditor;