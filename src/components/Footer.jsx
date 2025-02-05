export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-4 mt-6">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Twitter
          </a>
        </div>
      </footer>
    );
  }