export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-4 mt-6">
        <p>© {new Date().getFullYear()} Jacobus Berghoefer. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/Jacobus-Berghoefer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jacobus-berghoefer/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/28029941/jacobus-b?tab=profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Stack Overflow
          </a>
        </div>
      </footer>
    );
  }