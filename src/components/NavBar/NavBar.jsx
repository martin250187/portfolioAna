/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { BiSun, BiMoon } from "react-icons/bi";
import { useState } from "react";

function NavBar(props) {
    const { darkMode, toggleDarkMode } = props;

    const [isNavOpen, setIsNavOpen] = useState(false);

    const navItems = [
        { name: "About", link: "./" },
        { name: "Works", link: "./works" },
        { name: "Resume", link: "./resume" },
        { name: "Contact", link: "./contact" },
    ];

    return (
        <header className="h-28 flex xs:px-5 2xl:px-16 py-2 justify-end items-center font-poppins bg-white dark:bg-slate-900 dark:text-gray-100 pr-12">
            <nav>
                {/* Mobile Menu */}
                <section className="items-center flex lg:hidden">
                    <div
                        onClick={toggleDarkMode}
                        className="hover:text-red transition-all duration-300 hover:translate-x-1 rounded-md drop-shadow-md mr-7 bg-white dark:bg-slate-900 cursor-pointer p-1 ease-in-out"
                    >
                        {darkMode ? <BiMoon size="30px" /> : <BiSun size="30px" />}
                    </div>
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 bg-gray-600 dark:bg-gray-100 "></span>
                        <span className="block h-0.5 w-8 bg-gray-600 dark:bg-gray-100 "></span>
                        <span className="block h-0.5 w-8 bg-gray-600 dark:bg-gray-100 "></span>
                    </div>
                    <div className={`bg-white dark:bg-slate-900 ${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600 dark:text-gray-100"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col text-black dark:text-gray-100 text-xl items-center justify-between min-h-[250px]">
                            {navItems.map((item, index) => (
                                <li onClick={()=> setIsNavOpen(!isNavOpen)} className="my-8 hover:text-red transition-all duration-300 hover:translate-x-1" key={index}>
                                    <Link className="" to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                {/* Desktop Menu */}
                <div className="flex items-center " >
                    <ul className="hidden text-xl space-x-14 lg:flex">
                        {navItems.map((item, index) => (
                            <li className="my-8 hover:text-red transition-all duration-300 hover:translate-x-1" key={index}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div
                        onClick={toggleDarkMode}
                        className=" hover:text-red transition-all duration-300 hover:translate-x-1 ml-14 rounded-md drop-shadow-md bg-white dark:bg-slate-900 cursor-pointer p-1 ease-in-out xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block "
                    >
                        {darkMode ? <BiMoon size="30px" /> : <BiSun size="30px" />}
                    </div>
                </div>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </header>
    );
}

export default NavBar;
