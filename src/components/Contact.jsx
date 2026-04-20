import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <p>Email: ramkrishna7710@gmail.com</p>
      <p>Phone: +91-7710892809</p>

      <div className="flex space-x-4 mt-4 text-2xl">
        <a href="https://github.com/ramkrishna7710/"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ramkrishna7710/"><FaLinkedin /></a>
      </div>
    </section>
  );
}