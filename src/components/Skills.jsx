const skills = {
  Languages: ["C", "C++", "JavaScript"],
  Frontend: ["HTML", "CSS", "Bootstrap", "React"],
  Backend: ["Node.js", "Express"],
  Database: ["MongoDB", "SQL"],
  Concepts: ["DSA", "REST APIs", "MVC", "CRUD"],
  Tools: ["Git", "GitHub", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.keys(skills).map((category) => (
          <div key={category} className="bg-white dark:bg-gray-800  p-4 rounded">
            <h3 className="font-semibold mb-2">{category}</h3>
            <p>{skills[category].join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}