import './Skills.scss'
import { skillsInfo } from '../../Data'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section className='skills section-padding'>
      <div className='section-title' data-aos='fade-up'>
        <h4>Skills</h4>
      </div>

      <div className='skills__container wrapper'>
        <div className='skills__left' data-aos='fade-right'>
          <h2>
            All the skills that I have in that field of work are mentioned.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            libero deleniti incidunt enim dolorum eos facilis obcaecati odit ad
            non, accusantium, recusandae sit quisquam dolor repudiandae,
            quibusdam ipsa rerum. obcaecati odit ad non, accusantium, recusandae
            sit quisquam dolor repudiandae, quibusdam ipsa rerum
          </p>
        </div>
        <div className='skills__right'>
          {skillsInfo.map(({ name, percent }) => (
            <div className='skills__card' key={name} data-aos='fade-up'>
              <h3>{name}</h3>
              <span>{percent}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills
