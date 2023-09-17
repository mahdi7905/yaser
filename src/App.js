import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

import './App.css';

import yaser from './assets/yaser.jpg';
import poster1 from './assets/atee.jpg'
import poster2 from './assets/apealing.jpg'
import poster3 from './assets/asab.jpg'
import poster4 from './assets/nasha.jpg'
import poster5 from './assets/bridal.jpg'
import Whatsapp from './svg/Whatsapp';
import Insta from './svg/Insta';




function App() {
  const form = useRef();
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    name: '',
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_4jtfg3s', 'template_kxrqfdu', form.current, 'trFfGNf4DIojAiCsg')
      .then((result) => {
        setFormData({
            email: '',
            subject: '',
            message: '',
            name: ''
         })
         setLoading(false)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <>
      <section className="bio">
        <img src={yaser} alt="yaser"/>
        <div className="data">
          <h2>Hi There!</h2>
          <h3>I am Yaser Mansur and I am a Film Maker</h3>
          <div className='socials'>
            <a href="https://instagram.com/yaser_mawsoul?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
              <Insta />
            </a>
            <span>
              <Whatsapp />
              +2348166463074
            </span>
          </div>
          <a href="/#contact" className="contact-button">Contact Me</a>
        </div>
      </section>
      <section className="skills-section">
        <h1 className="skills-header">Skills</h1>
        <div className="skills">
            <span>Film Making</span>
            <span>Cinematography</span>
            <span>Video Editing</span>
            <span>visual effects</span>
            <span>Videography</span>
            <span>Photography</span>
            <span>Sound Design</span>
        </div>
      </section>
      <section className="portfolio">
          <h1>Portfolio</h1>
          <div className="content">
              <div class="card">
                <img src={poster1} alt='poster'/>
                <a href='https://www.instagram.com/tv/CeJ1V1EIdej/' target="_blank" rel="noopener noreferrer">

                  view
                </a>
                  {/* <video src={ateey} controls poster={poster1} controlslist="nodownload" loading="lazy"></video> */}
              </div>
              <div className="card">
                  <img src={poster2} alt='poster'/>
                <a href='https://www.instagram.com/reel/Ck1PzqLo5-W/?igshid=NTc4MTIwNjQ2YQ==' target="_blank" rel="noopener noreferrer">
                  view
                </a>
              </div>
              <div className="card">
                  <img src={poster3} alt='poster'/>
                <a href='https://youtu.be/DnGFAwQg6y4?si=jiIR9D2YHK8HO9io' target="_blank" rel="noopener noreferrer">
                  view
                </a>
              </div>
              <div className="card">
                  <img src={poster4} alt='poster'/>
                <a href='https://www.instagram.com/reel/CwQfTnsoV68/' target="_blank" rel="noopener noreferrer">
                  view
                </a>
              </div>
              <div className="card">
                  <img src={poster5} alt='poster'/>
                <a href='https://www.instagram.com/tv/CX4cXN5I-qJ/' target="_blank" rel="noopener noreferrer">
                  view
                </a>
              </div>
          </div>
      </section>
      <section id='contact'>
        <h1>Contact Me!</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
            <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" name='user_email' placeholder='Enter You email' required/>
            <input value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} type="text" name='subject' placeholder='Subject' />
            <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} name="message" placeholder='Type in Your Message'></textarea>
            <button className='submitButton'>
              {
                loading ? 'Sending...' : 'Send'
              }
            </button>
        </form>
      </section>
    </>
  );
}
export default App
