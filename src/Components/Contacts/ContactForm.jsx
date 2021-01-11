import React from 'react';
import emailjs from "emailjs-com";
import './ContactForm.css'

// npm install emailjs-com --save
// put the above code in the terminal to make sure emailjs works correctly

export default function ContactForm() {
    
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'thelesha_id', e.target, 'user_ILsTgtTDmBh1zgbKrAEMF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
       return(
           <div>
               <div className="container">
               <form onSubmit={sendEmail}>
                   <div className="row pt-5 mx-auto">
                       <div className="col-8 form-group mx-auto">
                        <p className="contactTitle">Name<span className="asterisk"> *</span></p>
                           <input type="text" className="form-control" placeholder="Name" name="name"/>
                       </div>
                       <div className="col-8 form-group pt-2 mx-auto">
                        <p className="contactTitle">Email<span className="asterisk"> *</span></p>
                           <input type="email" className="form-control" placeholder="Eamil Address" name="email"/>
                       </div>
                       <div className="col-8 form-group pt-2 mx-auto">
                        <p className="contactTitle">Subject<span className="asterisk"> *</span></p>
                           <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                       </div>
                       <div className="col-8 form-group pt-2 mx-auto">
                        <p className="contactTitle">Your Message<span className="asterisk"> *</span></p>
                           <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                       </div>
                       <div className="col-9 pt-3 mx-auto">
                           <input type="submit" className="btn btn-info" value="Send Message"/>
                            </div>
                        </div>
                    </form>
               </div>
           </div>
       )
}