import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/blog'}>Blogs</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>contact</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
