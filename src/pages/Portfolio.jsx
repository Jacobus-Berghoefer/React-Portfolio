export default function Portfolio() {
    const projects = [
      {
        title: "Weather Dashboard",
        image: "/weather-dashboard.png",
        deployedLink: "https://weather-dashboard-p5l7.onrender.com/",
        githubLink: "https://github.com/Jacobus-Berghoefer/Weather-Dashboard",
      },
      {
        title: "Company Employee Database",
        image: "/company-employee-database.png",
        deployedLink: "https://app.screencastify.com/v3/watch/mPIK4XDVYjK94HMHVkpz",
        githubLink: "https://github.com/Jacobus-Berghoefer/Company-Employee-Database",
      },
      {
        title: "Vehicle Builder",
        image: "/vehicle-builder.png",
        deployedLink: "https://app.screencastify.com/v3/watch/njZ7sCiI7HM52s2v5OaI",
        githubLink: "https://github.com/Jacobus-Berghoefer/vehicle-builder",
      },
      {
        title: "Economy Clicker Game",
        image: "/money-maker.png",
        deployedLink: "https://vincentt94.github.io/Money-Maker/",
        githubLink: "https://github.com/vincentt94/Money-Maker",
      },
      {
        title: "Rock Paper Scissors",
        image: "/rock-paper-scissors.png",
        deployedLink: "https://jacobus-berghoefer.github.io/Rock-Paper-Scissors/",
        githubLink: "https://github.com/Jacobus-Berghoefer/Rock-Paper-Scissors",
      },
      {
        title: "README Generator",
        image: "/readme-generator.png",
        deployedLink: "https://app.screencastify.com/v3/watch/AryAfpgm1S3OpgqRblR4",
        githubLink: "https://github.com/Jacobus-Berghoefer/README-Generator",
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