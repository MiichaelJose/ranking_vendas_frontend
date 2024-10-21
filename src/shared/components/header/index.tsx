import { TogglesHeader } from "@/shared/types/HeaderTypes";

export default function Header(data: TogglesHeader) {
  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* Mobile Hamburger */}
        <button
          className="p-1 mr-5 rounded-md md:hidden focus:outline-none"
          onClick={data.toggleSideMenu}
        >
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="var(--blueground)">
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zM3 10h14a1 1 0 110 2H3a1 1 0 110-2zM3 15h14a1 1 0 110 2H3a1 1 0 110-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Search Input */}
        <div className="flex justify-center items-center flex-1 lg:mr-32 h-10">
          <div className="relative w-full max-w-xl mr-6">
            <div className="absolute inset-y-0 flex items-center pl-2 h-full">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="var(--blueground)">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              className="w-full h-8 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
              type="text"
              placeholder="Search for projects"
            />
          </div>
        </div>

        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* Theme Toggle */}
          <li className="flex ">
            <button
              className="rounded-md transition-colors focus:ring-2 focus:ring-gray-500 focus:shadow-outline-purple"
              onClick={data.toggleTheme}
              aria-label="Toggle color mode"
            >
              {data.darkMode ? (
                <svg className="w-5 h-5" fill="var(--blueground)" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 016.293 13.293A8 8 0 013.707 6.707 7.978 7.978 0 0110 2z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="var(--blueground)" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a8 8 0 0010.586 10.586z" />
                </svg>
              )}
            </button>
          </li>

          {/* Notifications */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none"
              onClick={data.toggleNotificationsMenu}
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="var(--blueground)" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
            </button>
            {data.notificationsMenuOpen && (
              <ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700">
                <li className="flex">
                  <a
                    href="#"
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>Messages</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:bg-red-600">
                      13
                    </span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>Sales</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:bg-red-600">
                      2
                    </span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>Alerts</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Profile Menu */}
          <li className="relative">
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={data.toggleProfileMenu}
              aria-label="Account"
            >
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
              />
            </button>
            {data.profileMenuOpen && (
              <ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700">
                <li className="flex">
                  <a
                    href="#"
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Profile</span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Settings</span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Log out</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
