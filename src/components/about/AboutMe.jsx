import React from 'react';
import './aboutMe.css';
/* import next from '../assets/images/next.svg';
import docs from '../assets/docs/EDUNJOBI-EMMANUEL_CV.pdf';
 */
const AboutMe = () => {
  return (
    <div className="col-12 col-md-8 mt-4 mt-xl-0">
      {/* <img src={next} height="15px" alt="Next" /> */}
      <span className="greentext ms-2">
        <b>About me</b>
      </span>
      {/* <a href={docs} download={docs} style={{ textDecoration: 'none' }}>
        <span className="resume ms-2 bluetext vietnamPro">
          <small>See my Curriculum Vitae</small>
        </span>
      </a> */}
      <div className="px-3 px-md-4">
        <p className="description mt-2">
           Hey there! I'm a Fullstack Developer, turning digital dreams into reality. I mix tech and creativity to craft seamless online experiences.  Think of me as a digital storyteller, creating interfaces and backends that just work. Explore my digital playground, where innovation meets simplicity. Ready to make your ideas click? Let's do it!
        </p>
        <div className="mt-5 text-light">
          <div className="greentext fw-bold">FRONT-END TECHNOLOGIES</div>
          <div className="d-flex">
            <div className="maintain-box bgorange">Html</div>
            <div className="maintain-box ms-1 bglightblue">Css</div>
            <div className="maintain-box ms-1 bgbrown">Javascript</div>
          </div>
          <div className="d-flex mt-1">
            <div className="maintain-box bgorange">Bootstrap</div>
            <div className="maintain-box ms-1 bglightblue">React</div>
            <div className="maintain-box ms-1 bgbrown">Typescript</div>
          </div>
        </div>
        <div className="text-light">
          <div className="mt-4 greentext fw-bold">BACK-END TECHNOLOGIES</div>
          <div className="d-flex">
            <div className="maintain-box bgorange">Node Js</div>
            <div className="maintain-box ms-1 bglightblue">MongoDB</div>
            <div className="maintain-box ms-1 bgbrown">Mysql</div>
          </div>
          <div className="d-flex mt-1">
            <div className="maintain-box bgorange">Bash </div>
            <div className="maintain-box ms-1 bglightblue">C</div>
            <div className="maintain-box ms-1 bgbrown">Python</div>
          </div>
        </div>
        <div className="text-light">
          <div className="mt-4 greentext fw-bold">OTHERS</div>
          <div className="d-flex">
            <div className="maintain-box bgorange">Jquery</div>
            <div className="maintain-box ms-1 bglightblue">Github</div>
            <div className="maintain-box ms-1 bgbrown">Docker</div>
          </div>
          <div className="d-flex mt-1">
            <div className="maintain-box bgorange">Introuction</div>
            <div className="maintain-box ms-1 bglightblue">to</div>
            <div className="maintain-box ms-1 bgbrown">Cybersecurity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
