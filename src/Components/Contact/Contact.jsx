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

    formData.append("access_key", "d48056d9-0ee8-4e92-bd10-23602e8597d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-col">
           <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
           <p>Thank you for reaching out to us! We value your feedback, inquiries, and suggestions. Please fill out the form below with your details and message, and our team will get back to you as soon as possible. Your satisfaction is our priority, and we look forward to assisting you.</p>
           <ul>
            <li> <img src={mail_icon} alt="" />infodesk@srmist.edu.in</li>
            <li> <img src={phone_icon} alt="" />+91 44 27417000</li>
            <li> <img src={location_icon} alt="" />SRM Nagar, Kattankulathur - 603 203
            Chengalpattu District, Tamil Nadu</li>
           </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                <label>Write Your Message</label>
                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact