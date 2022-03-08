import React from 'react'
import './Header.css'

const Header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />    
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                    
            </a>
        </div>
    </header>
  )
}

export default Header