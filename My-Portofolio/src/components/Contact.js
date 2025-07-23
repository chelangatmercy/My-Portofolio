const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success or error'
    
    const handleChange = (e) => {
        setFormData({... formData,[e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:, formData');

        if (formData.name && formData.email && formData.message) {
            setMessage('Your message has been sent successfully!');
            setMessageType('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setMessage('Please fill in all fields.');
            setMessageType('error');
        }
          //clear messages after a few second
          setTimeout(() => {
            setMessage('');
            setMessageType('');
          }, 5000) ; 
    };
    return ( // Added return statement here
    <section id="contact" className="py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
        Get in Touch
      </h2>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            ></textarea>
          </div>
          {message && (
            <div
              className={`p-3 rounded-md ${
                messageType === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}
            >
              {message}
            </div>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Find Me On
          </h3>
          <div className="flex justify-center space-x-6">
            <SocialLink
              href="https://github.com/chelangat-mercy/chelangatmercy"
              icon="fab fa-github"
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/chelangatmercy"
              icon="fab fa-linkedin-in"
              label="LinkedIn"
            />
          </div>
          <div className="mt-8">
            <a
              href="/path/to/your/resume.pdf" // Replace with actual path to resume
              download
              className="inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l3-3m-3 3l-3-3m2.818-13.992A4.002 4.002 0 0010 4.002V4a2 2 0 00-2-2h-1a2 2 0 00-2 2v1m5 13.992A4.002 4.002 0 0114 20.002V20a2 2 0 012 2h1a2 2 0 012-2v-1m-5-13.992A4.002 4.002 0 0010 4.002V4a2 2 0 00-2-2h-1a2 2 0 00-2 2v1m5 13.992A4.002 4.002 0 0114 20.002V20a2 2 0 012 2h1a2 2 0 012-2v-1" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
