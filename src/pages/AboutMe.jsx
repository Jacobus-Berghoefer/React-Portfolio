export default function AboutMe() {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-3xl font-bold">About Me</h1>
        
        {/* Profile Image */}
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQE1OY8mmLIGDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731603939887?e=1744243200&v=beta&t=weijaA6PLVqYDCu-yHJ8bQkgf-Z2NKgBMPghjBR89WQ" 
          alt="Jacobus Berghoefer" 
          className="rounded-full mx-auto mt-4 w-40 h-40 object-cover"
        />
  
        {/* Bio Section */}
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Hi, I’m Jacobus Berghoefer, a passionate web developer with experience in building 
          modern, responsive, and user-friendly web applications. I specialize in React, 
          TypeScript, and backend technologies such as Node.js and PostgreSQL.
        </p>
  
        {/* Additional Info */}
        <p className="mt-2 max-w-2xl text-lg mx-auto">
          I enjoy solving complex problems, learning new technologies, and creating 
          impactful applications that enhance user experience.
        </p>
      </div>
    );
  }