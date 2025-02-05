export default function Portfolio() {
    // Sample portfolio projects (Replace with your actual projects)
    const projects = [
      {
        title: "Project One",
        image: "https://via.placeholder.com/300",
        deployedLink: "https://yourproject1.com",
        githubLink: "https://github.com/yourprofile/project1",
      },
      {
        title: "Project Two",
        image: "https://via.placeholder.com/300",
        deployedLink: "https://yourproject2.com",
        githubLink: "https://github.com/yourprofile/project2",
      },
      {
        title: "Project Three",
        image: "https://via.placeholder.com/300",
        deployedLink: "https://yourproject3.com",
        githubLink: "https://github.com/yourprofile/project3",
      },
      {
        title: "Project Four",
        image: "https://via.placeholder.com/300",
        deployedLink: "https://yourproject4.com",
        githubLink: "https://github.com/yourprofile/project4",
      },
      {
        title: "Project Five",
        image: "https://via.placeholder.com/300",
        deployedLink: "https://yourproject5.com",
        githubLink: "https://github.com/yourprofile/project5",
      },
      {
        title: "Project Six",
        image: "https://via.placeholder.com/300",
        deployedLink: "https://yourproject6.com",
        githubLink: "https://github.com/yourprofile/project6",
      },
    ];
  
    return (
      <div className="container mx-auto mt-5">
        <h1 className="text-3xl font-bold text-center">My Portfolio</h1>
  
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
              <div className="mt-3 flex justify-between">
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }