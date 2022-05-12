import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars , faUser, faCircleDot} from '@fortawesome/free-solid-svg-icons';

export default function navbar() {

  return (
    <div> 
                <div className="navbar">
                <div className="brand-title">brand name</div>
                <a href='#' className='toggle-button'onClick={call}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
                </a>
            <div className="navbar-link">
                <ul>
                    <li><a><FontAwesomeIcon icon={faCircleDot}></FontAwesomeIcon> Help</a></li>
                    <li><a><img src='image/us.jpg' width={23}></img> Deutsch</a></li>
                    <li><a className='line'>EUR</a></li>
                    <li><a><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a></li>
                </ul>
            </div>
            </div>
            {/* <i class="fa-thin fa-circle-dashed"></i> */}
    </div>
  )
function call() { 
  // console.log("hello world");
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-link')[0]
  toggleButton.addEventListener('click', ()=> {
  navbarLinks.classList.toggle('active')
      });
}
      
}