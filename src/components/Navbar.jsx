import React from 'react';

function Navbar() {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid d-flex justify-content-center mt-5 pt-2 ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      
      <ul className="navbar-nav mx-auto  mb-lg-0 ">
        <li className="nav-item active">
          <a className="nav-link  mx-3" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#About">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#Resume">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#Contact">Contact Me</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>);
}

export default Navbar;
