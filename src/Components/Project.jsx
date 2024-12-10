// import React from 'react'
import project from "./data/projects.json";

const Project = () => {
  return (
    <>
      <div className="Container project my-3" id="project">
        <h1 className="exText">Projects</h1>
        <div
          className="row d-flex justify-content-center align-items-center"
          // style={{
          //   marginLeft: "170px",
          // }}
        >
          {project.map((res, i) => {
            return (
              <div className="my-4  col-md-4 col-lg-4 mx-3" key={i}>
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "26rem",
                    height: "26rem",
                    borderRadius: "10px",
                    border: "2px solid rgb(101,175,0.5)",
                    backgroundColor: "rgb(33, 33, 33)",
                    boxShadow: "5px 10px 20px rgba(101, 175, 10, 0.5)",
                  }}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <div className="img d-flex justify-content-center align-items-center p-3">
                    <img
                      style={{
                        height: "220px",
                        width: "200px",
                        border: "3px solid rgb(101,175,0.5)",

                        borderRadius: "10px",
                      }}
                      src={res.imageSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{res.title}</h5>
                    <p className="card-text">{res.description}</p>
                    <div
                      className="d-flex justify-content-around
                    "
                    >
                      <a
                        href={res.demo}
                        className="btn btn-primary"
                        style={{ width: "120px" }}
                      >
                        Demo
                      </a>
                      <a
                        href={res.source}
                        className="btn btn-danger"
                        style={{ width: "120px" }}
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
