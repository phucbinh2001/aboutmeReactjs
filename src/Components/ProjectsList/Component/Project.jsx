import React from "react";
import PropTypes from "prop-types";

Project.Propstype = {
  projectList: PropTypes.array,
};
function Project({ projectList }) {
  console.log("projectlist", projectList);
  //   return <></>;
  return (
    <>
      {projectList.map((project) => (
        <div id={project.id} className="card">
          <a href={"https://" + project.link}>
            <img src="https://loremflickr.com/640/360" alt="" />
          </a>
        </div>
      ))}
    </>
  );
}

export default Project;
