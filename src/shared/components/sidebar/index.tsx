import { useState } from "react";
import { Link } from "react-router-dom";

type TogglesSideBar = {
  darkMode: boolean;
  sideMenuOpen: boolean;
  pagesMenuOpen: boolean;
  togglePagesMenu: any;
  toggleSideMenu: any;
};

export default function SideBar(data: TogglesSideBar) {
  const [sideMenuName, setSideMenuName] = useState("");

  return (
    <>
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
            ConversaoVendas
          </Link>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <Link
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 dark:text-gray-100"
                to="/"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
          </ul>

          <ul>
            {/* <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                href="tables.html"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                <span className="ml-4">Conversao</span>
              </a>
            </li> */}

            <li className="relative px-6 py-3">
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors focus:ring-2 focus:ring-gray-500 focus:shadow-outline-purple rounded-sm p-1 duration-150 dark:hover:text-gray-200"
                onClick={() => {
                  data.togglePagesMenu();
                  setSideMenuName("menu-conversion");
                }}
              >
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <span className="ml-4">Conversao</span>
                </span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {data.pagesMenuOpen && sideMenuName == "menu-conversion" && (
                <ul
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                  aria-label="submenu"
                >
                  <li className="px-2 py-1 hover:text-gray-800 dark:hover:text-gray-200">
                    <Link to="/app/conversation">Pedidos</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative px-6 py-3">
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 focus:ring-2 focus:ring-gray-500 focus:shadow-outline-purple rounded-sm p-1 dark:hover:text-gray-200"
                onClick={() => {
                  data.togglePagesMenu();
                  setSideMenuName("menu-ranking");
                }}
              >
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <span className="ml-4">Ranking </span>
                </span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {data.pagesMenuOpen && sideMenuName == "menu-ranking" && (
                <ul
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                  aria-label="submenu"
                >
                  <li className="px-2 py-1 hover:text-gray-800 dark:hover:text-gray-200">
                    <Link to="/app/conversation">Pedidos</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {data.sideMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={data.toggleSideMenu}
        ></div>
      )}
      <aside
        className={`fixed inset-y-0 z-20 w-64 mt-16 bg-white dark:bg-gray-800 transform ${data.sideMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform`}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
            ConversaoVendas
          </Link>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <Link
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 dark:text-gray-100"
                to="/"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
