import { useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string;
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
    tags: "UI Design, Dashboard, Data visualization",
    image: "/images/project-dashboard.jpg",
    href: "https://google.com" // ADD THIS LINE
  },
  {
    id: 2,
    title: "Entome",
    description: "Employee Management Application · UI System",
    tags: "UI Design, Dashboard, Internal Tool",
    image: "/images/project-mobile.jpg",
    href: "https://google.com"// ADD THIS LINE
  },
  {
    id: 3,
    title: "Entolic System",
    description: "Corporate Website · UI Design",
    tags: "UI Design, Web Interface, Responsive Design",
    image: "/images/Gemini_Generated_Image_yecu7cyecu7cyecu.png",
    href: "https://google.com" // ADD THIS LINE
  },
];

const ProjectsEditor = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const updateProject = (
    id: number,
    field: keyof Project,
    value: string
  ) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  };

  const handleSave = () => {
    console.log("Updated Projects:", projects);
    alert("Projects updated");
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-display font-bold mb-8">
        Edit Projects
      </h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4"
          >
            {/* Project Heading */}
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
              label="Tags (comma separated)"
              value={project.tags}
              onChange={(e) =>
                updateProject(project.id, "tags", e.target.value)
              }
            />

            <Input
              label="Image Path"
              value={project.image}
              onChange={(e) =>
                updateProject(project.id, "image", e.target.value)
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

const Textarea = ({ label, ...props }: TextareaProps) => (
  <div>
    <label className="block text-sm text-nova-muted mb-2">
      {label}
    </label>
    <textarea
      rows={3}
      {...props}
      className="w-full bg-nova-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-nova-purple transition"
    />
  </div>
);

export default ProjectsEditor;