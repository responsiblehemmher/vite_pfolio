import React from 'react';
import './projects.css';
/* import next from '../assets/images/next.svg'; */

const Projects = () => {
  return (
    <div className="mt-3">
      <div className="d-flex align-items-baseline">
        {/* <img src={next} height="15px" alt="" /> */}
        <span className="ms-2 greentext">
          <b>Projects</b>
        </span>
      </div>
      <div className="d-flex align-items-center flex-column justify-content-center">
        <div className="mt-3 d-flex row2 flex-wrap gap-3">
          <div className="project-box text-light p-2 rounded">
            <h5 className="mt-2 text-center">Transportation App</h5>
            <div className="d-flex justify-content-center align-items-center">
              <p className="px-2">
                <small>Elevate your travel with Cargenie. Smart transportation at your fingertips.</small>
              </p>
            </div>
            <div className="d-flex mx-auto gap-1 justify-content-center align-items-center">
              <div className="smaller-maintain-box bgorange">React</div>
              <div className="smaller-maintain-box bglightblue">Node js</div>
              <div className="smaller-maintain-box bgbrown">MongoDB</div>
            </div>
            <div className="d-flex justify-content-between lightgreentext my-2">
              <div>
                <small>
                  <a rel="noreferrer" href="https://github.com/Kvngstar/Cargenie-Transports-frontend-" target="_blank" style={{ textDecoration: 'none' }} className="lightgreentext">Github Repo</a>
                </small>
              </div>
              <div>
                <small>
                  <a rel="noreferrer" target="_blank" href="https://mycargenie.herokuapp.com" style={{ textDecoration: 'none' }} className="lightgreentext">Live Demo</a>
                </small>
              </div>
            </div>
          </div>
          <div className="project-box text-light p-2 rounded">
            <h5 className="mt-2 text-center">Ivory Homes</h5>
            <div className="d-flex justify-content-center align-items-center">
              <p className="px-2">
                <small>Find your dream home at Ivory Homes. Your perfect property awaits.</small>
              </p>
            </div>
            <div className="d-flex mx-auto gap-1 justify-content-center align-items-center">
              <div className="smaller-maintain-box bgorange">React</div>
            </div>
            <div className="d-flex justify-content-between my-2">
              <div>
                <small title="Private repository" className="lightgreentext">Github Repo</small>
              </div>
              <div>
                <small>
                  <a rel="noreferrer" href="https://www.ivoryhomesng.com" target="_blank" style={{ textDecoration: 'none' }} className="lightgreentext">Live Demo</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
