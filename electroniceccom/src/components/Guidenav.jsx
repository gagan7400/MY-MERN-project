import React from 'react'
import './guidenav.css'
export default function Guidenav() {
  return (
    <div>
      <nav id='nav'>
        <div id='lang'>
        <div className='dropdown'>
         <div className='dropdown-toggle' role='button'>English</div>
        </div>
        <div className='dropdown'>
         <div className='dropdown-toggle'role='button'>U.S Dollar</div>
        </div>
        </div>
         <div className='helpline'>
            <div>Become a seller</div>
            <div>|</div>
            <div>Login to seller</div>
            <div>Helpline +01 234 535 543</div>
         </div>
      </nav>
    </div>
  )
}
