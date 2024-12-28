import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/mylocal.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2a8ecadb-6a6c-4ed2-bebd-48d17c861a2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
          <h3>Send us message <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> katshuvachristian@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +257 62 61 74 91</li>
                <li><img src={location_icon} alt="" /> Bwiza 5/35 <br /> Bujumbura BURUNDI</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact