export default function MyProject({ title, image, deployedLink, githubLink }) {
    return (
      <div className="border rounded-lg shadow-lg p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <div className="mt-3 flex justify-between">
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    );
  }
  