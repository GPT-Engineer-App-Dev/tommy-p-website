import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold">Thomas Pinckney</h1>
        <p className="text-xl text-gray-600">Software Engineer | Web Developer | Technology Enthusiast</p>
      </header>

      <section className="my-10">
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Thomas Pinckney" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <p>Hi, I'm Thomas Pinckney, a passionate software engineer with a knack for developing scalable web applications and engaging user interfaces. I have a strong foundation in computer science and a proven track record in front-end and back-end development.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Project One</h3>
              <p>A description of Project One can go here, highlighting the main objectives and the technology stack used.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Project Two</h3>
              <p>A brief overview of Project Two, its goals, and the tools and languages applied in its creation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
        <div className="flex justify-center space-x-4">
          <a href="#!" className="text-2xl">
            <FaLinkedin />
          </a>
          <a href="#!" className="text-2xl">
            <FaGithub />
          </a>
          <a href="mailto:thomas@example.com" className="text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </section>

      <footer className="text-center my-10">
        <p>&copy; {new Date().getFullYear()} Thomas Pinckney. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
