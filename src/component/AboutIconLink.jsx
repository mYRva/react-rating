import {Link} from 'react-router-dom'
import React from 'react'

import {FaQuestion} from 'react-icons/fa'
function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to={{
            pathname: '/about', 
            seacrh: '?sort=name',
            hash: '#help'}} >
          <FaQuestion size={30} />
        </Link>
    </div>
  )
}

export default AboutIconLink