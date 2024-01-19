import './Hero.scss'
import HeroImg from '../../assets/hero-img.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section className='hero'>
      <div className='hero__container wrapper'>
        <div className='hero__left' data-aos='fade-up'>
          <h3>Hello, I&apos;m</h3>
          <h1>
            Edward <br /> Devis
          </h1>
          <h2>Creative Developer & Designer</h2>
          <a href='#' className='btn'>
            Hire me
          </a>
        </div>
        <div className='hero__right' data-aos='fade-left'>
          <div className='hero__right-img'>
            <img src={HeroImg} alt='hero' />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
