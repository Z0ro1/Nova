import { Routes, Route } from "react-router-dom";
import Home from "./home";
import AdminLayout from "./admin/AdminLayout";
import HeroEditor from "./admin/HeroEditor";
import AboutEditor from "./admin/AboutEditor";
import ProjectsEditor from "./admin/ProjectsEditor";
import SocialsEditor from "./admin/SocialsEditor";

function App() {
  return (
    <Routes>
      {/* Portfolio */}
      <Route path="/" element={<Home />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HeroEditor />} />
        <Route path="hero" element={<HeroEditor />} />
        <Route path="about" element={<AboutEditor />} />
        <Route path="projects" element={<ProjectsEditor />} />
        <Route path="socials" element={<SocialsEditor />} />
      </Route>
    </Routes>
  );
}

export default App;