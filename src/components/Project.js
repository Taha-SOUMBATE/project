import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

function Project({ id, image, name, source }) {
  return (
    <div className="animate__animated animate__slideInUp">
      
      <div className="card mb-3 p-2" style={{ maxWidth: "900px" }}>
        <div className="g-0 text-center align-items-center ">
          <div className="">
            <h6 className="card-title text-center">{id}</h6>
            <div className="image">
              <img src={image} className="img-fluid rounded-start project-img" alt={name} />
            </div>
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>

              <div className="mt-3 align-text-bottom">
              
                  <a href={source} target="_blank" rel="noreferrer" className="link btn gap-4">
                    Source Code <AiOutlineGithub  />
                  </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
