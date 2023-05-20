import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = ["Project 1", "Project 2"];
  return (
    <>      
      <p className="m-3 text-xl text-black">
        Hello everyone! Check out my projects!
      </p>
      <h2 className="ml-3 mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="ml-3 mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/`}
            key={project}
            className="border-2 border-black rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
