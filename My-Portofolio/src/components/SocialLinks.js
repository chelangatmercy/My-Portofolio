const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-transform duration-200"
    aria-label={label}
  >
    <i className={`${icon} text-4xl`}></i>
  </a>
);