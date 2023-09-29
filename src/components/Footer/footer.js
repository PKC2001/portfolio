import React from 'react'
import './footer.css';

const footer = () => {
  var year = new Date().getFullYear()
  return (
    <footer className='footer'>
        Copyright &#169;{year}. All rights Reserved
    </footer>
  )
}

export default footer