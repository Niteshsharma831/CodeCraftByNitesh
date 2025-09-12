import React from "react";
import ProjectsSection from "./ProjectsSection";

const AllProjectsPage = () => {
  return (
    <div className="pt-24">
      {/* Show all projects, maybe fetch from DB in future */}
      <ProjectsSection /> 
    </div>
  );
};

export default AllProjectsPage;
