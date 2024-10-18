import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "2f6c782f-dcf8-4789-9ae0-00cc67d85081");
      
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          }).then((res) => res.json());
      
      
          if (res.success) {
          console.log("success",res)
          setResult(res.message);
            event.target.reset();
          } else {
            console.log("Error", res);
            setResult(res.message);
          }
        }
    
  return (
    <div className='contact'>
       <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusantium magnam, quam corporis illo consequuntur ipsum, sint, rerum officia tempore ut! Ut, blanditiis suscipit. Laboriosam!</p>
        <ul>
            <li> <img src={mail_icon} alt="" /> Contact@greatstack</li>
            <li> <img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li> <img src={location_icon} alt="" />77 massachusets Ave, Cambridge <br /> MA 02139, United States</li>
        </ul>
       </div>
       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder=' Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Mobile Number' required/>
            <label>Write your message here</label>
            <textarea name="message" id="" rows="6" placeholder='Enter Your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>

        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact