import React from "react";

function ProjectItem({ name, about, technologies }) {
  let techUsed = technologies.map( tech => {
    return <span>{ tech }</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techUsed}
      </div>
    </div>
  );
}

export default ProjectItem;
