import React from 'react';
import Navbar from '../Navbar/Navbar';
import emailjs from 'emailjs-com';


let style = {
	backgroundColor: "#275a53"
}

const Contact = () => {
    const sendEmail = (e) => {
        

        emailjs.sendForm('sr_sohan@22', 'template_ufacunl', e.target, 'user_9ufoY6H7TMASIZ2DFsq2G')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert('Done! We are contact you very soon')
          e.target.reset();

          e.preventDefault();
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="container"> 
               <div className="row"> 
                <div className="col-md-8  offset-md-2"> 
                        <form onSubmit={sendEmail} className="mt-5 p-4" style={style}>
                                <h2 className="text-center pb-3 text-white">Contact Me</h2>
                            <div className="form-group"> 
                                <input name="name"  placeholder="Your Name" className="form-control" />
                            
                            </div>
                            <div className="form-group"> 
                                <input name="email"  placeholder="Your Email" className="form-control" />
                            </div>
                            <div className="form-group"> 
                                <input name="subject"  placeholder="Your Subject" className="form-control" />
                            </div>
                            <div className="form-group"> 
                                <textarea name="message" placeholder="Your Message" className="form-control"   cols="30" rows="5"></textarea>
                            </div>
                            
                            <div className="form-group"> 
                                <input type="submit" className="btn btn-success btn-block" value="Send"/>
                            </div>
                        </form>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Contact;