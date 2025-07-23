const Skills = () => {
    const skills = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
    { name: "React", icon: "fab fa-react", color: "text-blue-400" },
    { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-teal-500" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-red-600" },
    { name: "GitHub", icon: "fab fa-github", color: "text-gray-800 dark:text-gray-200" },
    { name: "MongoDB", icon: "fas fa-database", color: "text-green-700" },
    { name: "Firebase", icon: "fas fa-fire", color: "text-yellow-600" },
  ];
   return (
     <section id="skills" className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-xl mb-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <i className={`${skill.icon} text-5xl ${skill.color} mb-3`}></i>
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


