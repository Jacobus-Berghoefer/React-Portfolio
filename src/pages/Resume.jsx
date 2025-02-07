export default function Resume() {
    return (
      <div className="container mx-auto mt-5 text-center">
        <h1 className="text-3xl font-bold">Resume</h1>
  
        {/* Downloadable Resume Link */}
        <div className="mt-4">
          <a
            href="/Jacobus-Berghoefer-Resume.pdf" // Replace with actual resume file path
            download
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download My Resume
          </a>
        </div>
  
        {/* Proficiencies Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Technical Skills & Proficiencies</h2>
          <ul className="mt-3 text-lg">
            <li>✅ HTML5, CSS3, JavaScript, TypeScript</li>
            <li>✅ React, Redux</li>
            <li>✅ Node.js, Express</li>
            <li>✅ PostgreSQL</li>
            <li>✅ REST APIs, Browser APIs</li>
            <li>✅ BootStrap, Tailwind</li>
            <li>✅ Git, GitHub, CI/CD</li>
            <li>✅ Agile Development & Scrum</li>
          </ul>
        </div>
      </div>
    );
  }