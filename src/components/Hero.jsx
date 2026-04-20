export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <img
        src="/rk.jpg"
        alt="profile"
        className="rounded-full w-40 h-40 mb-4 border-4 border-blue-500"
      />
      <h1 className="text-4xl font-bold">Ramkrishna Sharma</h1>
      <p className="text-xl text-gray-400">Aspiring SDE | Full Stack Developer</p>
      <p className="mt-3 max-w-xl">
        Cyber Security enthusiast with MERN stack experience.
      </p>

      <div className="mt-6 space-x-4">
        <a href="#projects" className="bg-blue-500 px-6 py-2 rounded">
          View Projects
        </a>
        <a href="#contact" className="border px-6 py-2 rounded">
          Contact Me
        </a>
      </div>

      <div>
        <div className="mt-6 space-x-4">
          <a href="/resume.pdf" target="_blank" className="border px-6 py-2 rounded">
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download="Ramkrishna_Sharma_Resume.pdf"
            className="bg-green-500 px-6 py-2 rounded"
          >
            Download Resume
          </a>
        </div>
      </div>


    </section>
  );
}
