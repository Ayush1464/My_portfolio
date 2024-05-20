import React from 'react'
import { Link } from 'react-router-dom'

const Right = () => {
  return (
    <div className='right'>
        <ul>
          
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        </ul>
    </div>
  )
}

export default Right