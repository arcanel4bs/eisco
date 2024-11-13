import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects.json'

function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-8 text-center text-[#4A0404] font-montserrat">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects
