const Home = () => (
  <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-120px)] py-16 text-center md:text-left">
    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in-up">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-4">
        Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Mercy Chelangat</span>
      </h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Turning Ideas into Code
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        I'm an aspiring web developer passionate about building beautiful and functional web applications.
      </p>
      <a
        href="#projects"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        View My Work
      </a>
    </div>
    <div className="md:w-1/2 flex justify-center animate-fade-in-right">
      <img
        src="https://placehold.co/400x400/A78BFA/FFFFFF?text=Your+Photo"
        alt="Your Professional Photo"
        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-4 border-indigo-500 dark:border-indigo-400"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/A78BFA/FFFFFF?text=Placeholder+Image"; }}
      />
    </div>
  </section>
);