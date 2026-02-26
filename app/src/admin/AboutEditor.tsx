import { useState } from "react";

type AboutForm = {
  headline: string;
  paragraph1: string;
  paragraph2: string;
  name: string;
  role: string;
  location: string;
  avatarUrl: string;
};

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = {
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const initialAbout: AboutForm = {
  headline: "Design-led product building.",
  paragraph1:
    "I design and build structured digital systems that feel intentional and precise.",
  paragraph2:
    "My focus is on clarity, motion, and scalable frontend architecture.",
  name: "Saurav Ahire",
  role: "UI/UX Designer & Frontend Developer",
  location: "India",
  avatarUrl: "/images/profile.jpg",
};

const AboutEditor = () => {
  const [form, setForm] = useState<AboutForm>(initialAbout);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Updated About Section:", form);
    alert("About section updated");
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-display font-bold mb-8">
        Edit About Section
      </h1>

      <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5">
        <Input
          label="Headline"
          name="headline"
          value={form.headline}
          onChange={handleChange}
        />

        <Textarea
          label="Paragraph 1"
          name="paragraph1"
          value={form.paragraph1}
          onChange={handleChange}
        />

        <Textarea
          label="Paragraph 2"
          name="paragraph2"
          value={form.paragraph2}
          onChange={handleChange}
        />

        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Role"
          name="role"
          value={form.role}
          onChange={handleChange}
        />

        <Input
          label="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
        />

        <Input
          label="Avatar URL"
          name="avatarUrl"
          value={form.avatarUrl}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleSave} className="btn-primary mt-8">
        Save All Changes
      </button>
    </div>
  );
};

const Input = ({ label, ...props }: InputProps) => (
  <div>
    <label className="block text-sm text-nova-muted mb-2">{label}</label>
    <input
      {...props}
      className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nova-purple transition"
    />
  </div>
);

const Textarea = ({ label, ...props }: TextareaProps) => (
  <div>
    <label className="block text-sm text-nova-muted mb-2">{label}</label>
    <textarea
      rows={4}
      {...props}
      className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nova-purple transition"
    />
  </div>
);

export default AboutEditor;
