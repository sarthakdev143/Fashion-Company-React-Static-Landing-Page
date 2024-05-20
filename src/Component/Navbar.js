import React from 'react'
import './Navbar.css'
import './littles.css'

const Navbar = () => {
  return (
    <header className='center1'>
      <nav className='faic'>
        <ul type='none'>
          <li id='logo' className='pointer faic user-select-none'>
            <span class="material-symbols-outlined">
              change_history
            </span>
            <span class="material-symbols-outlined">
              adjust
            </span>
          </li>
        </ul>
        <ul type='none' className='faic gap'>
          <li className='user-select-none pointer'>Men</li>
          <li className='user-select-none pointer'>Women</li>
          <li className='user-select-none pointer'>Accessories</li>
          <li className='user-select-none pointer'>Winter</li>
          <li className='user-select-none pointer'>Sale</li>
        </ul>
        <ul type='none' className='user-select-none faic m-gap'>
          <li>
            <span class="material-symbols-outlined">
              search
            </span>
          </li>
          <li>
            <span class="material-symbols-outlined">
              favorite
            </span>
          </li>
          <li className='pointer'>Cart</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar