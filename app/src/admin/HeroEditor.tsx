import { useEffect, useState } from "react";

interface HeroData {
  line1: string;
  line2: string;
  highlight: string;
  description: string;
}

const HeroEditor = () => {
  // ✅ Default content (matches your PUT structure)
  const [hero, setHero] = useState<HeroData>({
    line1: "Immersive",
    line2: "digital",
    highlight: "experiences.",
    description: "I design and build interactive websites...",
  });

  const [loading, setLoading] = useState(true);

  // 🔥 GET hero from backend (overrides default if exists)
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/hero");
        if (!res.ok) throw new Error();
        const data = await res.json();
        setHero(data);
      } catch (err) {
        console.error("Using default hero content");
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setHero({
      ...hero,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await fetch("http://localhost:8080/api/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hero),
      });

      alert("Hero updated successfully 🚀");
    } catch (err) {
      console.error("Update failed");
    }
  };

  if (loading) return <p>Loading hero...</p>;

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-display font-bold mb-8">
        Edit Hero Section
      </h1>

      <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5">
        <div>
          <label className="block text-sm text-nova-muted mb-2">Line 1</label>
          <input
            name="line1"
            value={hero.line1}
            onChange={handleChange}
            className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm text-nova-muted mb-2">Line 2</label>
          <input
            name="line2"
            value={hero.line2}
            onChange={handleChange}
            className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm text-nova-muted mb-2">
            Highlight
          </label>
          <input
            name="highlight"
            value={hero.highlight}
            onChange={handleChange}
            className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm text-nova-muted mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            value={hero.description}
            onChange={handleChange}
            className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3"
          />
        </div>

        <button onClick={handleSave} className="btn-primary mt-4">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default HeroEditor;
