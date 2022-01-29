import React from 'react';

export default function Resume() {
  return <div className='fluid-container  d-flex flex-column align-items-center' id="Resume">
     <h1><strong>Resume</strong> </h1>
     <p>My Formal Bio Details</p>
     <div className='hline my-4 '></div>
  <div className="resume-box row mt-5">
    <div className='col-lg-4 col-md-4 col-sm-12 px-0'>
    
  {/* <!-- Nav tabs --> */}
<ul className="resume-list nav nav-pills flex-column  align-items-start " id="myTab" role="tablist">
  <li className="nav-item " role="presentation">
  <i className="bi bi-book-fill firsti " style={{fontSize:"1.2rem" , color:"white"}}></i>
 <a className='nav-link active mt-2'id="home-tab" data-bs-toggle="pill" data-bs-target="#education"  role="tab" aria-controls="home" aria-selected="true">Education</a>
    
    
  </li>
  <li className="nav-item " role="presentation">
  <i className="bi bi-pc-display-horizontal" style={{fontSize:"1.2rem" , color:"white"}}></i>
    <a className="nav-link" id="profile-tab" data-bs-toggle="pill" data-bs-target="#programming-skills" role="tab" aria-controls="profile" aria-selected="false">Programming SKills</a>
  
  </li>
  <li className="nav-item " role="presentation">
  <i className="bi bi-bar-chart-line-fill" style={{fontSize:"1.2rem" , color:"white"}}></i>
    <a className="nav-link" id="messages-tab" data-bs-toggle="pill" data-bs-target="#projects" role="tab" aria-controls="messages" aria-selected="false">Projects</a>
   
  </li>
  <li className="nav-item " role="presentation">
  <i className="bi bi-palette-fill lasti" style={{fontSize:"1.2rem" , color:"white"}}></i>
  <a className="nav-link mb-2" id="settings-tab" data-bs-toggle="pill" data-bs-target="#interests" role="tab" aria-controls="settings" aria-selected="false">Interests</a>
    
  </li>
</ul>
</div>



{/* <!-- Tab panes --> */}
<div className='col-lg-8 col-md-8 col-sm-12 tab-home '>
<div className="tab-content d-flex align-items-center ">
  <div className="tab-pane active " id="education" role="tabpanel" aria-labelledby="home-tab">
    <ul>
      <li> 
         <div className='d-flex justify-content-between'><h6>IIT Roorkee</h6> <span>2020-2024</span> </div>
        <p>METALLURGICAL AND MATERIAL ENGINEERING </p>
        </li>
      <li>
      <div className='d-flex justify-content-between'><h6>Senior High School</h6><span>2017-2019</span></div>
        <p>R P S SCHOOL, MAKANPUR BIHARSHARIF NALANDA BIHAR</p>
      </li>
      <li>
      <div className='d-flex justify-content-between'><h6>Junior High School</h6><span>2015-2017</span></div>
        <p>CAMBRIDGE SCHOOL, PAHARPURA</p>
      </li>
    </ul>
  </div>
  <div className="tab-pane " id="programming-skills" role="tabpanel" aria-labelledby="profile-tab">
    <div className="row">
    <div className="col-6-md col-lg-6 col-sm-6">
      <ul>
        <li>
          <div className="info">HTML</div>
          <div className="pline" id='pline1'></div>
        </li>
        <li>
        <div className="info">CSS</div>
        <div className="pline" id='pline2'></div>
        </li>
        <li>
        <div className="info">Javascript</div>
        <div className="pline" id='pline3'></div>
        </li>
        <li>
        <div className="info">Mongo Db</div>
        <div className="pline" id='pline4'></div>
        </li>
        <li>
          <div className="info">React JS</div>
          <div className="pline" id='pline5'></div>
        </li>
      </ul>
    </div>
    <div className="col-lg-6 col-6-md col-sm-6 ">
    <ul>
        <li>
        <div className="info">Node JS</div>
        <div className="pline" id='pline6'></div>
        </li>
        <li>
        <div className="info">Express JS</div>
        <div className="pline" id='pline7'></div>
        </li>
        <li>
        <div className="info">Python</div>
        <div className="pline" id='pline8'></div>
        </li>
        <li>
        <div className="info">C++</div>
        <div className="pline" id='pline9'></div>
        </li>
      </ul>
    </div>
    </div>
    
  </div>
  <div className="tab-pane" id="projects" role="tabpanel" aria-labelledby="messages-tab">
  <ul>
      <li> 
         <div className='d-flex justify-content-between'><h6><a href="https://anand008186.github.io/portfolio-web" target="_blank" rel="noopener noreferrer"> Personal Portfolio Website</a></h6> <span>2022</span> </div>
        <p><strong>Technologies Used: React JS,Bootstrap</strong></p>
        </li>
      <li>
      <div className='d-flex justify-content-between'><h6><a href="https://anand-mernapp.herokuapp.com" target="_blank" rel="noopener noreferrer">Mern App</a></h6>  <span>2021</span></div>
        <p><strong>Technologies Used: React JS,Node JS, Express JS, Mongo Db, Bootstrap</strong></p>
      </li>
      <li>
      <div className='d-flex justify-content-between align-items-center'><h6>Weather Broadcasting Website</h6><span>2021</span></div>
        <p><strong>Technologies Used: Nodejs, Express JS ,Weather APIs</strong></p>
      </li>
    </ul>
  </div>
  <div className="tab-pane" id="interests" role="tabpanel" aria-labelledby="settings-tab">
  <ul>
      <li> 
         <div className='d-flex justify-content-between'><h6>Athletics</h6></div>
        <p>Apart from being a tech enthusiast and coder , I love to play sports and have great passion especially for atheletics. I believe that a healthy mind can only exist in healthy body.   </p>
        </li>
      <li>
      <div className='d-flex justify-content-between'><h6>Movies and Music</h6></div>
        <p>Watching science-fiction movies , crime-film movies like Gangs of Wasseypur and listening music are something i can never compromise with.They give relaxation to mind whenever i feel stress and tired.</p>
      </li>
      <li>
      <div className='d-flex justify-content-between'><h6>Investing and Trading</h6></div>
        <p>I believe investing is best to get financial freedom and i always try to invest my savings in stock market.  </p>
      </li>
    </ul>
  </div>
</div>
</div>
  </div>
</div>
}
