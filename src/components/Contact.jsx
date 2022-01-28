import React ,{useState} from 'react';
import mailPic from "../Images/mail.jpeg";
import emailJs from "emailjs-com";

function Contact() {
  const [User ,setUser] =useState({name:"",email:"",subject:"",message:""});
  const eventHandle = (e) =>{
    const {name,value} = e.target ;
    setUser({...setUser , [name] : value})
    console.log(User);
  }

  const postMail = (e) =>{
     e.preventDefault();
     if(User.name && User.email && User.subject && User.message ){
      emailJs.sendForm("service_zh5ef07","template_gup464q",e.target , "user_Sx9OLgc5iILzuG60lFW1k")
      .then((response) => {
       if ( response ) {
         console.log(response.text);
         window.alert("MESSAGE SENT") ;
        }
      },(error) => {
       console.log(error.text);
       window.alert("MESSAGE NOT SENT SUCCESSFULLY") ;
   })
   setUser({name:"",email:"",subject:"",message:""});
     }
     else{
      window.alert("PLEASE FILL REQUIRED FIELDS")
     } 

    
  
  }
  return (<div className='container-fluid' id='Contact'>
  <div className="contact mt-5 d-flex flex-column align-items-center">
     <h1><strong>Contact Me</strong> </h1>
     <p>Let's keep in touch</p>
     <div className='hline'></div>
     <div className="contact-box row pd-2">
         <div className="col-6-lg col-md-6 col-sm-12  ">  
       <h2>Get In Touch 🤓</h2>
       <ul className='list-unstyled  d-flex'>
             <li className='mx-2'><a href="#" ><i className="bi bi-facebook" style={{fontSize: "1rem" , color: "white"}}></i></a></li>
             <li className='mx-2'><a href="https://www.instagram.com/anand_.ranjan/?hl=en" target="_blank"><i className="bi bi-instagram" style={{fontSize: "1rem" , color: "white"}}></i></a></li>
             <li className='mx-2'><a href="https://www.linkedin.com/in/anand-ranjan-351b6b201/" target="_blank"><i className="bi bi-linkedin" style={{fontSize: "1rem" , color: "white"}}></i></a></li>
             <li className='mx-2'><a href="#"><i className="bi bi-twitter" style={{fontSize: "1rem" , color: "white"}}></i></a></li>
         </ul>
         
           <img src={mailPic} className='mailPic img-fluid' alt="mailPic" />
         
       </div>
       <div className="col-6-lg col-md-6 col-sm-12">


<div className="contact-form mb-md-0 px-3 py-5 text-center ">
    <form  id="contact-form" name="contact-form" onSubmit={postMail} >
                <div className="form-floating mb-3 ">
                  <input type="text" className="form-control shadow-none" id="floatingPassword" placeholder="Name" name="name" value={User.name} onChange={eventHandle}/>
                  <label htmlFor="floatingInput"> Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control shadow-none" id="floatingInput" placeholder="name@example.com" name="email" value={User.email} onChange={eventHandle}/>
                  <label htmlFor="floatingInput">Email address</label>
               </div>
                <div className="form-floating mb-3">
                    <input type="text" id="subject" name="subject" className="form-control shadow-none" placeholder='subject' value={User.subject} onChange={eventHandle}/>
                    <label htmlFor="subject" >Subject</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea shadow-none" placeholder='Message' value={User.message} onChange={eventHandle}></textarea>
                    <label htmlFor="message">Your message</label>
                </div>
                <button type="submit" className="btn btn-md mb-3" ><i class="bi bi-envelope-fill"></i><span><strong> Message</strong></span> </button>
    </form>
    </div>
       
  
            </div>
            </div>
            </div>


</div>);
}

export default Contact;
