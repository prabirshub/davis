import './Portfolio.scss'
import { portfolioInfo } from '../../Data'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section className='portfolio section-padding' id='portfolio'>
      <div className='section-title' data-aos='fade-up'>
        <h4>Portfolio</h4>
      </div>

      <div className='portfolio__container wrapper'>
        {portfolioInfo.map(({ id, img }) => (
          <a href='#' className='portfolio__card' key={id} data-aos='zoom-out'>
            <img src={img} alt='portfolio' />
          </a>
        ))}
      </div>
    </section>
  )
}
export default Portfolio
