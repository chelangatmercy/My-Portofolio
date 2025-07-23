const NavLink = ({ href, text, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200 rounded-md md:rounded-none"
  >
    {text}
  </a>
);