import { useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  tag1: string;
  tag2: string;
  tag3: string;
  image: string;
  href: string;
};

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = {
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const initialProjects: Project[] = [
  {
    id: 1,
    title: "EduCore",
    description: "Academic CRM",
    tag1: "UI Design",
    tag2: "Dashboard",
    tag3: "Data Visualization",
    image: "/images/project-dashboard.jpg",
    href: "https://google.com",
  },
  {
    id: 2,
    title: "Entome",
    description: "Employee Management Application · UI System",
    tag1: "UI Design",
    tag2: "Dashboard",
    tag3: "Internal Tool",
    image: "/images/project-mobile.jpg",
    href: "https://google.com",
  },
  {
    id: 3,
    title: "Entolic System",
    description: "Corporate Website · UI Design",
    tag1: "UI Design",
    tag2: "Web Interface",
    tag3: "Responsive Design",
    image: "/images/Gemini_Generated_Image_yecu7cyecu7cyecu.png",
    href: "https://google.com",
  },
];

const ProjectsEditor = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const updateProject = (id: number, field: keyof Project, value: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const handleImageUpload = (id: number, file: File) => {
    const imageUrl = URL.createObjectURL(file);
    updateProject(id, "image", imageUrl);
  };

  const handleSave = () => {
    console.log("Updated Projects:", projects);
    alert("Projects updated 🚀");
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-display font-bold mb-8">Edit Projects</h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4"
          >
            <h2 className="text-lg font-semibold text-nova-purple mb-2">
              Project {String(index + 1).padStart(2, "0")}
            </h2>

            <Input
              label="Title"
              value={project.title}
              onChange={(e) =>
                updateProject(project.id, "title", e.target.value)
              }
            />

            <Textarea
              label="Description"
              value={project.description}
              onChange={(e) =>
                updateProject(project.id, "description", e.target.value)
              }
            />

            <Input
              label="Tag 1"
              value={project.tag1}
              onChange={(e) =>
                updateProject(project.id, "tag1", e.target.value)
              }
            />

            <Input
              label="Tag 2"
              value={project.tag2}
              onChange={(e) =>
                updateProject(project.id, "tag2", e.target.value)
              }
            />

            <Input
              label="Tag 3"
              value={project.tag3}
              onChange={(e) =>
                updateProject(project.id, "tag3", e.target.value)
              }
            />

            {/* Image Upload */}
            <div>
              <label className="block text-sm text-nova-muted mb-2">
                Upload Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageUpload(project.id, file);
                }}
                className="block w-full text-sm text-nova-muted
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-xl file:border-0
                  file:text-sm file:font-semibold
                  file:bg-nova-purple file:text-white
                  hover:file:bg-purple-600"
              />

              {project.image && (
                <img
                  src={project.image}
                  alt="Preview"
                  className="mt-4 rounded-xl w-48 h-28 object-cover border border-white/10"
                />
              )}
            </div>

            <Input
              label="Project Link (href)"
              value={project.href}
              onChange={(e) =>
                updateProject(project.id, "href", e.target.value)
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
      rows={3}
      {...props}
      className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nova-purple transition"
    />
  </div>
);

export default ProjectsEditor;