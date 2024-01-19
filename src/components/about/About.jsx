import './About.scss'
import Img from '../../assets/about.jpg'
import { aboutInfo } from '../../Data'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
    <section className='about section-padding' id='about'>
      <div className='section-title' data-aos='fade-up'>
        <h4>About me</h4>
      </div>

      <div className='about__container wrapper'>
        <div className='about__left' data-aos='fade-right'>
          <div className='about__left-img'>
            <img src={Img} alt='about davis' />
          </div>
        </div>
        <div className='about__right' data-aos='zoom-in-up'>
          <h2>Hi there! I&apos;m Edward Davis</h2>
          <h4>Creative Developer & Designer</h4>
          <p>
            I am a creative developer and visual designer with a strong focus on
            digital branding. Visual design seeks to attract, inspire, create
            desires and motivate people to respond to message, with a view to
            making a favorable impact.
          </p>

          <div className='about__right-info-container'>
            {aboutInfo.map(({ name, detail }) => (
              <div className='about__right-info' key={name}>
                <p>{name}</p>
                <p>: {detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
