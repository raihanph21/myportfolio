import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    //bg-gradient-to-r from-white to-zinc-900 to-50%
    <div id="projects" className="p-5 pt-20 pb-20">
      <h3 className="text-center font-bold text-3xl mb-10">My Projects</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {projects.map((x) => (
          <ProjectsCard
            projects={x}
            key={x.id}
            onClick={() => {
              setSelectedProject(x);
            }}
          />
        ))}
      </div>
      {/* pop up  */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-800 text-white max-w-lg w-full rounded-md p-2 lg:p-6 relative flex flex-col border border-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                onClick={() => {
                  setSelectedProject(null);
                }}
                className="self-end text-3xl mb-5 hover:cursor-pointer"
              >
                &times;
              </button>
              <img src={selectedProject.img}></img>
              <h2 className="text-center mt-2 mb-1">{selectedProject.name}</h2>
              <p className="text-justify">{selectedProject.description}</p>
              <div className="flex justify-between mt-3 *:border *:border-zinc-500 *:p-1 *:rounded-md">
                <a target="_blank" href={selectedProject.demo}>
                  Demo
                </a>
                <a target="_blank" href={selectedProject.github}>
                  Source
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
