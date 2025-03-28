
export default function HomePage() {
  return (
    <div className="text-white">

      {/* Main content with higher z-index */}
      <div className="container text-center mt-5 mb-20 relative z-10">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-3 text-lg">
          Hello! I’m a web developer specializing in building modern and responsive web applications.  
          Feel free to explore my work, learn about me, and get in touch!
        </p>
      </div>
    </div>
  );
}