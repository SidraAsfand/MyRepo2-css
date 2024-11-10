import React from 'react'

import { VscMail } from "react-icons/vsc";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Header from '@/components/Header';
import Footer from '@/components/Footer';




export default function Contact() {
  return (
    <>
    <Header/>
    <div className='contact'>
      
    
      <div className='contactCard'>
        <h1 className='title'>Contact Us</h1>

        <div className='contactInfo'>
          <div className='contactItem'>
            <VscMail  />
            <span>smartgirlbarbie28@gmail.com</span>
          </div>

          <div className='contactItem'>
            <FaPhone  />
            <span>+923147267306</span>
          </div>

          <div className='contactItem'>
          <FaMapMarkerAlt  />
            <span>bolton Market, Karachi, Pakistan</span>
          </div>
        </div>

        <form className='contactForm'>
          <div>
            <label className='label'>Name</label>
            <input type="text" placeholder="Your Name" className='input' />
          </div>
          <div>
            <label className='label'>Email</label>
            <input type="email" placeholder="Your Email" className='input' />
          </div>
          <div>
            <label className='label'>Message</label>
            <textarea placeholder="Your Message" className='textarea' ></textarea>
          </div>
          <button type="submit" className='submitButton'>
            Send Message
          </button>
        </form>
      </div>
    </div>
 <Footer/>
 </>
  );
}
