import React, { useEffect, useState } from "react";
import projectAPI from "../../Api/projectApi";
import Project from "./Component/Project";

function ProjectList() {
  const [Filter, setFilter] = useState("all");
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    const featchProject = async () => {
      const projectList = await projectAPI.getAll();
      setProjects(projectList);
    };

    featchProject();
  }, [Filter]);

  return (
    <div class="page5 row" id="sp">
      <div class="center">
        <h2>Sản phẩm</h2>
        <div class="catalog">
          <span onclick="show(spall)">Tất cả</span>
          <span onclick="show(spweb)">Website</span>
          <span onclick="show(sppts)">Photoshop</span>
        </div>
        <div class="sanpham" id="sanpham">
          <Project projectList={Projects} />
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
