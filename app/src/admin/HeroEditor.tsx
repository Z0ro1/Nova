import { useState } from "react";

const HeroEditor = () => {
  const [headline, setHeadline] = useState(
    "Immersive digital experiences."
  );
  const [subtext, setSubtext] = useState(
    "I design and build interactive websites, apps, and motion systems—clean, fast, and memorable."
  );

  const handleSave = () => {
    console.log({ headline, subtext });
    alert("Saved (connect this to backend next)");
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-display font-bold mb-8">
        Edit Hero Section
      </h1>

      <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5">
        <div>
          <label className="block text-sm text-nova-muted mb-2">
            Headline
          </label>
          <input
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nova-purple transition"
          />
        </div>

        <div>
          <label className="block text-sm text-nova-muted mb-2">
            Subtext
          </label>
          <textarea
            rows={4}
            value={subtext}
            onChange={(e) => setSubtext(e.target.value)}
            className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nova-purple transition"
          />
        </div>

        <button
          onClick={handleSave}
          className="btn-primary mt-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default HeroEditor;