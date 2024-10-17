import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import SideBar from "./SideBar";

export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [notificationsMenuOpen, setNotificationsMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);
  const togglePagesMenu = () => setPagesMenuOpen(!pagesMenuOpen);
  const toggleNotificationsMenu = () => setNotificationsMenuOpen(!notificationsMenuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${sideMenuOpen ? "overflow-hidden" : ""}`}
    >
      <SideBar
        darkMode={darkMode}
        pagesMenuOpen={pagesMenuOpen}
        sideMenuOpen={sideMenuOpen}
        togglePagesMenu={togglePagesMenu}
        toggleSideMenu={toggleSideMenu}
      />
      <div className="flex-1 flex flex-col">
        <Header
          darkMode={darkMode}
          notificationsMenuOpen={notificationsMenuOpen}
          profileMenuOpen={profileMenuOpen}
          toggleNotificationsMenu={toggleNotificationsMenu}
          toggleProfileMenu={toggleProfileMenu}
          toggleSideMenu={toggleSideMenu}
          toggleTheme={toggleTheme}
        />

        <main className="h-full pb-16 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
