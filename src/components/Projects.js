import React from "react";
import data from "../data.js";

import Project from "./Project.js";
import { useState } from "react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState(""); 

  
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="container-fluid  p-5 min-vh-100">
     
      <form className="d-flex justify-content-center" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control w-50 mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery} 
          onChange={handleSearchInputChange}
        />
        <button className="btn m-1 butt my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
   

      <div className="row m-5">
        {data.ProjectsData.filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase())).map((project) => {
          return (
            <div className="col-md-6 d-flex justify-content-center" key={project.id}>
              <Project
                id={project.id}
                image={project.img}
                name={project.name}
                stack={project.stack}
                live={project.live}
                source={project.source}
                desc={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
