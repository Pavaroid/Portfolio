import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      name: "Proyek Saya",
      description:
        "Project ini adalah sebuah website portfolio pribadi yang bertujuan untuk menampilkan proyek-proyek, pencapaian, dan pengalaman profesional saya. Website ini dibangun menggunakan React dan dioptimalkan untuk performa dan responsivitas, sehingga memberikan pengalaman pengguna yang mulus di berbagai perangkat.",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      {Projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
