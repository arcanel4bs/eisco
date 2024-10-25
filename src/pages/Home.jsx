import React from 'react';
// import { Link } from 'react-router-dom';
// import ProjectCard from '../components/ProjectCard';
// import ServiceCard from '../components/ServiceCard';
// import PresentationText from '../components/PresentationText';
import { FaBolt, FaBuilding, FaBoxes } from 'react-icons/fa';
// import landingpic1 from '../assets/lightbulb.jpg';
import projectsData from '../data/projects.json';
// import servicesData from '../data/services.json';
import UnderConstruction from '../components/UnderConstruction';

function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  const iconMap = {
    FaBolt,
    FaBuilding,
    FaBoxes
  };

  return (
    <div>
      <UnderConstruction />
    </div>
  );
}

export default Home;

