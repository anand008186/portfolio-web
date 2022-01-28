import React from 'react';
import myPic from "../Images/me.jpg"

function About() {
  return (<div className='container-fluid my-5' id='About'>
  <div className="about my-5 d-flex flex-column align-items-center">
     <h1><strong>About Me</strong> </h1>
     <p>Why Choose Me?</p>
     <div className='hline my-4'></div>
     <div className="about-box row mt-5">
         <div className="col-5-lg col-md-5 col-sm-12 px-0  ">  
       <img src={myPic} alt="Me" className='aboutPic img-fluid'/>
       </div>
       <div className="col-5-lg col-md-5 col-sm-12  px-4 py-5 d-flex flex-column">
         <p>Full stack web developer having background knowledge of MERN Stack with Redux and Django python framework along with knack of building applications efficiently and development of secure and maintainable websites.Also have knowledge of c++ language and its DSA to implement in the software development  with utmost efficiency </p>
      <h4>Some Highlights are</h4>
      <ul>
        <li><span>Full Stack Web development</span> </li>
        <li><span>Interactive front end websites as per design</span></li>
        <li><span>React</span></li>
        <li><span>Django</span></li>
        <li><span>Building REST API</span></li>
        <li><span>Managing Databases</span></li>
        <li><span>C++ and its dsa</span></li>
      </ul>
       
  </div>
     </div>
            

</div>
</div>);
  

}

export default About;
