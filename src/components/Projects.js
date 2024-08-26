import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-gray-200 p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center header">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            id="project1"
            className="bg-gray-800 text-white p-6 shadow-lg rounded-lg w-64 h-[31rem] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-400">Project 1</h3>
            <p className="mb-2 text-yellow-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque metus eu libero venenatis, at faucibus leo malesuada.
              Integer non bibendum tortor, id dignissim lectus.
            </p>
            <ul className="list-disc list-inside mb-2 text-green-300">
              <li>Feature 1: Lorem ipsum dolor sit amet.</li>
              <li>Feature 2: Consectetur adipiscing elit.</li>
              <li>Feature 3: Nullam scelerisque metus eu libero.</li>
            </ul>
            <p className="mb-2 text-pink-300">
              Technologies used: React, Tailwind CSS, Node.js.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-600 transition duration-300"
            >
              Learn more
            </a>
          </div>

          <div
            id="project2"
            className="bg-gray-700 text-white p-6 shadow-lg rounded-lg w-64 h-[31rem] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-2 text-green-400">Project 2</h3>
            <p className="mb-2 text-pink-300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <ul className="list-disc list-inside mb-2 text-yellow-300">
              <li>Feature 1: Sed ut perspiciatis unde omnis iste.</li>
              <li>Feature 2: Totam rem aperiam, eaque ipsa quae ab illo.</li>
              <li>Feature 3: Nemo enim ipsam voluptatem quia voluptas.</li>
            </ul>
            <p className="mb-2 text-blue-300">
              Technologies used: Angular, Bootstrap, Firebase.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-600 transition duration-300"
            >
              Learn more
            </a>
          </div>

          <div
            id="project3"
            className="bg-gray-900 text-white p-6 shadow-lg rounded-lg w-64 h-[31rem] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-2 text-pink-400">Project 3</h3>
            <p className="mb-2 text-green-300">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur.
            </p>
            <ul className="list-disc list-inside mb-2 text-blue-300">
              <li>Feature 1: Quis autem vel eum iure reprehenderit.</li>
              <li>Feature 2: Qui in ea voluptate velit esse.</li>
              <li>Feature 3: Nihil molestiae consequatur, vel illum.</li>
            </ul>
            <p className="mb-2 text-yellow-300">
              Technologies used: Vue.js, Tailwind CSS, Express.js.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-600 transition duration-300"
            >
              Learn more
            </a>
          </div>

          <div
            id="project4"
            className="bg-gray-800 text-white p-6 shadow-lg rounded-lg w-64 h-[31rem] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-2 text-yellow-400">
              Project 4
            </h3>
            <p className="mb-2 text-blue-300">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-disc list-inside mb-2 text-pink-300">
              <li>Feature 1: At vero eos et accusamus et iusto.</li>
              <li>Feature 2: Odio dignissimos ducimus qui blanditiis.</li>
              <li>Feature 3: Voluptatum deleniti atque corrupti.</li>
            </ul>
            <p className="mb-2 text-green-300">
              Technologies used: Svelte, Tailwind CSS, Python.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-600 transition duration-300"
            >
              Learn more
            </a>
          </div>

          <div
            id="project5"
            className="bg-gray-700 text-white p-6 shadow-lg rounded-lg w-64 h-[31rem] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-2 text-indigo-400">
              Project 5
            </h3>
            <p className="mb-2 text-pink-300">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit.
            </p>
            <ul className="list-disc list-inside mb-2 text-green-300">
              <li>Feature 1: Neque porro quisquam est.</li>
              <li>Feature 2: Qui dolorem ipsum quia dolor sit amet.</li>
              <li>Feature 3: Consectetur, adipisci velit, sed quia.</li>
            </ul>
            <p className="mb-2 text-yellow-300">
              Technologies used: Ruby on Rails, Tailwind CSS, MySQL.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-600 transition duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
