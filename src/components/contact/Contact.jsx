import './Contact.scss'
import { contactInfo } from '../../Data'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section className='contact section-padding' id='contact'>
      <div className='section-title' data-aos='fade-up'>
        <h4>Contact</h4>
      </div>

      <div className='contact__container wrapper'>
        <div className='contact__left' data-aos='fade-right'>
          <h3>Just say hello</h3>

          <form action='#'>
            <input type='text' placeholder='Your Name' required />
            <input type='email' placeholder='Your Email' required />
            <input type='text' placeholder='Subject' required />
            <textarea
              name='message'
              placeholder='Message'
              id='#'
              cols='30'
              rows='10'
            ></textarea>

            <button className='btn'>Send Messgae</button>
          </form>
        </div>
        <div className='contact__right' data-aos='zoom-in-left'>
          <h3>Contact Info</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            mollitia rerum cumque, maiores.
          </p>

          <div className='contact__info-container'>
            {contactInfo.map(({ name, info, icon }) => (
              <div className='contact__info-card' key={name} data-aos='fade-in'>
                <div className='contact__info-icon'>
                  <img src={icon} alt={name} />
                </div>
                <div className='contact__info-text'>
                  <h4>{name}</h4>
                  <p>{info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='contact__copyright'>
        &copy; 2024. Designed by Prabir Singh. All right reserved.
      </div>
    </section>
  )
}
export default Contact
