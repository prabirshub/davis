import './Navbar.scss'
import Logo from '../../assets/logo.png'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <header className='navbar'>
      <div className='navbar__container wrapper'>
        <a href='#' className='navbar__logo' onClick={() => setShowNav(false)}>
          <img src={Logo} alt='logo' />
        </a>

        <div className='navbar__links'>
          <ul className={`${showNav ? 'show' : ''}`}>
            <li onClick={() => setShowNav(false)}>
              <a href='#'>home</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href='#about'>about</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href='#resume'>resume</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href='#portfolio'>portfolio</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href='#contact'>contact</a>
            </li>
          </ul>

          <div className='navbar__phone'>
            <FaPhoneAlt />
            <span>+1 2324 434355</span>
          </div>

          <div className='navbar__menu' onClick={() => setShowNav(!showNav)}>
            {showNav ? <IoMdClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Navbar
