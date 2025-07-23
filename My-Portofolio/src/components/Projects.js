const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Store",
            image:"https://placehold.co/600x400/4F46E5/FFFFFF?text=E-commerce+Store",
            description: "A full-stack e-commerce application with user authentication, product listings, shopping cart, and checkout functionality.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            codeLink: "#",
            demoLink: "#",
        },
        {
            id: 2,
            title: "Task Management App",
            image: "https://placehold.co/600x400/4F46E5/FFFFFF?text=Task+Manager",
            description: "A simple and intuitive task management application with drag-and-drop functionality and real-time updates",
            techStack:["Vue.js", "Firebase", "CSS3"],
            codeLink: "#",
            demoLink: "#",
        },
        {
            id: 3,
            title: "Weather Dashboard",
            image: "https://placehold.co/600x400/4F46E5/FFFFFF?text=Weather+Dashboard",
            description: "An interactive weather dashboard fetching real-time weather data from an external API.",
            techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
            codeLink: "#",
            demoLink: "#",
        },
        
    ];
    return (
     <section id="projects" className="py-16 animate-fade-in">
       <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        My Projects
       </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
     </section>     
    );
};