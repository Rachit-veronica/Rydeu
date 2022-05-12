import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuestionCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Link} from "react-router-dom";
import { faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';


export default function Home() {
   
   

      const [sideBarStyle, setsideBarStyleSize] = useState( {
        position: 'absolute',
        width: '70%',
        height: '15%',
        right: '15%',
        top: '60%',
        border: '1px solid black',
        backgroundColor: 'white',    
        borderRadius: '20px'
      });

      const [ToggleBtn, setToggleBtn] = useState( {
        position: 'absolute',
        fontSize: '60px',
        marginTop: '1%',
        right: '5.5%',
        cursor : 'pointer'
      });

      const [Arrowbutton, setArrowbutton] = useState(faAngleDown);
      const [ShowMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div>
      <div className="main_page_bg">
        <a>
          <img src="image/bg.jpg" alt="" />
        </a>
      </div>
      <div className="main_page">
        <h1>Hello, how can we help you?</h1>
        <h3>Find Travel guide, FAQ, chat,</h3>
      </div>
      <div className="card">
        <a>
          <FontAwesomeIcon
            id="question"
            icon={faQuestionCircle}
          ></FontAwesomeIcon>
        </a>
        <h1>FAQ</h1>
        <h4>Lorem ipsum dolor sit amet</h4>
      </div>
      <div className="card1">
        <a>
          <FontAwesomeIcon id="question" icon={faAddressBook}></FontAwesomeIcon>
        </a>
        <h1>Travel Guide</h1>
        <h4>Lorem ipsum dolor sit amet</h4>
      </div>
      <div className="card2" style={sideBarStyle}>
        <a>
          <FontAwesomeIcon
            id="question1"
            icon={faAddressBook}
          ></FontAwesomeIcon>
        </a>
        <h1>Travel Guide</h1>
        <h4>Lorem ipsum dolor sit amet</h4>
        <a className="toggle-btn" style={ToggleBtn} onClick={ScrollDownMenu}>
          <FontAwesomeIcon icon={Arrowbutton}></FontAwesomeIcon>
        </a>
        <span className="dots">
          <div className="travel">
            {ShowMediaIcons ? (
              <>
                <img id="tele" src="/image/telegram.jpg" alt="" srcset="" />
                <img id="whatsapp" src="/image/whatsapp.png" alt="" srcset="" />
                <img id="live" src="/image/live_chat.png" alt="" srcset="" />
              </>
            ) : (
              true
            )}
          </div>
        </span>
      </div>
    </div>
  );

  function ScrollDownMenu(){
    let updatedValue = {};
    updatedValue = {height:"30%"};
    setsideBarStyleSize(sideBarStyle => ({
        ...sideBarStyle,
        ...updatedValue
    }))
    if(Arrowbutton.iconName === 'angle-up'){
        updatedValue = {height:"15%"};
        setsideBarStyleSize(sideBarStyle => ({
            ...sideBarStyle,
            ...updatedValue
        }));
        setArrowbutton(faAngleDown);
        setShowMediaIcons(false);
    }else{
        setArrowbutton(faAngleUp);
        setShowMediaIcons(true);
    }

  }
//   function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
// onClick={moreless}

//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }
}
