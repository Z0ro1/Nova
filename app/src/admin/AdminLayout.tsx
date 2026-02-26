import { useState } from "react";
import { LayoutDashboard, FileText, FolderKanban, Share2 } from "lucide-react";

import HeroEditor from "./HeroEditor";
import AboutEditor from "./AboutEditor";
import ProjectsEditor from "./ProjectsEditor";
import SocialsEditor from "./SocialsEditor";

type Section = "hero" | "about" | "projects" | "socials";

const AdminLayout = () => {
  const [active, setActive] = useState<Section>("hero");

  return (
    <div className="min-h-screen bg-nova-dark text-nova-text flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-6">
        <h2 className="text-xl font-display font-bold text-nova-purple">
          NOVA Control
        </h2>

        <nav className="mt-10 space-y-2">
          <SidebarButton
            icon={<LayoutDashboard size={18} />}
            label="Hero"
            active={active === "hero"}
            onClick={() => setActive("hero")}
          />
          <SidebarButton
            icon={<FileText size={18} />}
            label="About"
            active={active === "about"}
            onClick={() => setActive("about")}
          />
          <SidebarButton
            icon={<FolderKanban size={18} />}
            label="Projects"
            active={active === "projects"}
            onClick={() => setActive("projects")}
          />
          <SidebarButton
            icon={<Share2 size={18} />}
            label="Socials"
            active={active === "socials"}
            onClick={() => setActive("socials")}
          />
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        {active === "hero" && <HeroEditor />}
        {active === "about" && <AboutEditor />}
        {active === "projects" && <ProjectsEditor />}
        {active === "socials" && <SocialsEditor />}
      </main>
    </div>
  );
};

type SidebarButtonProps = {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
};

const SidebarButton = ({
  icon,
  label,
  active,
  onClick,
}: SidebarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
        active
          ? "bg-white/5 text-nova-purple"
          : "hover:bg-white/5 text-nova-muted"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default AdminLayout;
