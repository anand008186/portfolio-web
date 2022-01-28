import React from 'react';
import Typical from "react-typical"
import profilePic from "../Images/profilepic.png"
import bgshape from  "../Images/shape-bg.png"
import Navbar from './Navbar';
import '../App.css'


function Home() {
  return (<div className='home fluid-container' id='Home'>
         <Navbar/>
         <div className="profile-container row  ">
         <div className="profile-detail col-lg-8 col-md-8 col-sm-12 order-md-1 order-sm-2 d-flex flex-column justify-content-center align-items-center">
         <ul className='list-unstyled  d-flex'>
               <li className='mx-2'><a href="#" ><i className="bi bi-facebook" style={{fontSize: "1.5rem" , color: "white"}}></i></a></li>
               <li className='mx-2'><a href="https://www.instagram.com/anand_.ranjan/?hl=en" target="_blank"><i className="bi bi-instagram" style={{fontSize: "1.5rem" , color: "white"}}></i></a></li>
               <li className='mx-2'><a href="https://www.linkedin.com/in/anand-ranjan-351b6b201/" target="_blank"><i className="bi bi-linkedin" style={{fontSize: "1.5rem" , color: "white"}}></i></a></li>
               <li className='mx-2'><a href=""><i className="bi bi-twitter" style={{fontSize: "1.5rem" , color: "white"}}></i></a></li>
           </ul>
           <h5>Hii I'm <span style={{color:"red"}}>ANAND</span> </h5>
           <h2><strong><Typical
             loop={Infinity}
             wrapper= 'p'
             steps={['Mern Developer 😎',
               2000,
               'Full Stack Developer 🌈',
               2000,
               'Finance Enthusiast 😉',
               2000,
               'Trader 🚀',
               2000]}></Typical></strong>
           </h2>
           <p>Knack of building creative and powerful applications with front end and back end operations using different frameworks</p>
           <div className='profile-options d-flex justify-content-center mt-5' >
           <a  className="btn btn-lg  btn-outline-light shadow-none  rounded-pill mx-3" href='#Contact'>Hire Me </a>
           <button type="button" className="btn btn-lg btn-danger shadow-none rounded-pill mx-3 ">Resume</button>
           </div>

         </div>
         <div className="profile-img  col-lg-4 col-md-4 col-sm-12 order-md-2  order-sm-1  d-flex justify-content-center align-items-center">
           <img src={profilePic} alt="profilePic" className='profilePic img-fluid rounded-circle border-0' />
         </div>
         <div className='col-12 order-3 px-0 '><img src={bgshape} alt="" className='shape-img img fluid' /></div>
         </div>
         <a href="#Home"><i className="bi bi-arrow-up-circle-fill goTop" style={{fontSize:"2rem",color:'red'}}></i></a>
           
  </div>);
}

export default Home;
