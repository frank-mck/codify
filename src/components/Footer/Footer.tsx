import React from 'react';
import './Footer.css';
import '../../styles/App.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-elements'>
        <p>
          Designed & developed by 
          <a href='https://github.com/frank-mck'
           style={{textDecoration: 'none', color: 'rgb(177, 177, 177)'}}
           > Frank Mckenna</a>
        </p>
        <a href='https://github.com/frank-mck/productivity-app-ts'><img 
          style={{width: '20px', height: '20px', marginLeft: '.3rem'}}
          src ='https://image.flaticon.com/icons/png/512/25/25657.png'
          alt='github-repo'
        ></img></a>
      </div>
    </div>
  )
}
