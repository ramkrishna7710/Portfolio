const projects = [
  {
    title: "Great Hotels",
    desc: "Hotel listing app with CRUD, image upload & maps",
    tech: "Node, Express, MongoDB, EJS",
  },
  {
    title: "Student Record Management System",
    desc: "Manage student data, attendance & fees",
    tech: "MERN Stack",
  },
];

export default function Projects() {
  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white dark:bg-gray-800  p-5 rounded">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
            <p className="mt-2 text-sm">{p.tech}</p>

            <div className="mt-4 space-x-3">
              <button className="bg-blue-500 px-4 py-1 rounded">
                Live Demo
              </button>
              <button className="border px-4 py-1 rounded">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}