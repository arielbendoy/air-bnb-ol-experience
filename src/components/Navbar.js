import React from 'react'
import HomeLogo from '../img/airbnb.svg'

export default function Navbar() {
  return (
    <div>
      <nav>
        <a href='/'>
          <img src={HomeLogo} alt='airbnb' className='nav--logo' />
        </a>
      </nav>
    </div>
  )
}
