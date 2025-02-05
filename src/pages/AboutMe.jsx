export default function AboutMe() {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-3xl font-bold">About Me</h1>
        
        {/* Profile Image */}
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="rounded-full mx-auto mt-4 w-40 h-40 object-cover"
        />
  
        {/* Bio Section */}
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Hi, I’m [Your Name], a passionate web developer with experience in building 
          modern, responsive, and user-friendly web applications. I specialize in React, 
          JavaScript, and backend technologies such as Node.js and PostgreSQL.
        </p>
  
        {/* Additional Info */}
        <p className="mt-2 text-lg">
          I enjoy solving complex problems, learning new technologies, and creating 
          impactful applications that enhance user experience.
        </p>
      </div>
    );
  }