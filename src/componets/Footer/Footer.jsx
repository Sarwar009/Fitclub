import React from 'react'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>

        <hr />
        <div className='footer'>
            <div className='social-link'>
                <img src={Github} alt='Github' />
                <img src={Instagram} alt='Instagram' />
                <img src={LinkedIn} alt='LinkedIn' />
            </div>

            <div className='f-logo'>
                <img src={Logo} alt='Logo' />
            </div>
            
        </div>

        <div className='blur f-blur-1'></div>
        <div className='blur f-blur-2'></div>

    </div>
  )
}
