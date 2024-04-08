import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import About from "./views/About/About";
import Works from "./views/Works/Works";
import Resume from "./components/Resume/Resume";
import Contact from "./views/Contact/Contact";

function App() {
  const [darkMode, setDarkmode] = useState(true);

  const { pathname } = useLocation();

  const toggleDarkMode = () => {
    const element = document.documentElement;
    setDarkmode(!darkMode);
    if (darkMode) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  return (
    <div className="font-poppins bg-white dark:bg-slate-900 dark:text-gray-100 transition duration-300">
      {pathname !== "/resume" && <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
      <div className="flex">
      {pathname !== "/resume" && <SideBar />}
        <div className="flex w-full justify-around h-[calc(100vh-112px)]">
          <Routes>
            <Route path={"/"} element={<About />} />
            <Route path={"/works"} element={<Works />} />
            <Route path={"/resume"} element={<Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
