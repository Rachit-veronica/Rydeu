import React, { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuestionCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Link} from "react-router-dom";
import { faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { faShareNodes, faMessage } from '@fortawesome/free-solid-svg-icons';
import {useMediaQuery} from '@material-ui/core';
import isActive from './CheckWindowSize';

export default function Home() {

       const [iSWindowSizeChanged, setiSWindowSizeChanged] = useState(false);

       useEffect(()=>{
         function handler(){
          setiSWindowSizeChanged(testing.matches);

         }
        const testing = window.matchMedia("(max-width : 700px)");
        testing.addEventListener("change",handler);
        return () => {
          testing.removeEventListener("change",handler)
        }
       },[])

      const [sideBarStyle, setsideBarStyleSize] = useState({
        position: 'absolute',
        width: '70%',
        height: '15%',
        right: '15%',
        top: '70%',
        border: '1px solid black',
        backgroundColor: 'white',    
        borderRadius: '20px',
        });
        
      
      const [sideBarStyleResponsive, setsideBarStyleSizeResponsive] = useState( {
        position: 'absolute',
        width: '80%',
        height: '30%',
        right: '15%',
        top: '82%',
        border: '1px solid black',
        backgroundColor: 'white',    
        borderRadius: '20px'
        });

        
      const [sideBarStyleResponsive2, setsideBarStyleSizeResponsive2] = useState( {
        position: 'absolute',
        width: '80%',
        height: '60%',
        right: '10%',
        top: '160%',
        border: '1px solid black',
        backgroundColor: 'white',    
        borderRadius: '20px'
              });

        const [sideBarStyleResponsive4, setsideBarStyleSizeResponsive4] = useState( {
          position: 'absolute',
          width: '80%',
          height: '30%',
          right: '10%',
          top: '120%',
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


      // -------------------------------------------


      const [sideBar1Style, setsideBar1StyleSize] = useState( {
        position: 'absolute',
        width: '70%',
        height: '15%',
        right: '15%',
        top: '105%',
        border: '1px solid black',
        backgroundColor: 'white',    
        borderRadius: '20px'
      });

      const [ToggleBtn1, setToggleBtn1] = useState( {
        position: 'absolute',
        fontSize: '60px',
        marginTop: '1%',
        right: '5.5%',
        cursor : 'pointer'
      });

      const [Arrowbutton1, setArrowbutton1] = useState(faAngleDown);
      const [ShowMediaIcons1, setShowMediaIcons1] = useState(false);



// ----------------------------------



const [sideBar2Style, setsideBar2StyleSize] = useState( {
  position: 'absolute',
  width: '70%',
  height: '15%',
  right: '15%',
  top: '140%',
  border: '1px solid black',
  backgroundColor: 'white',    
  borderRadius: '20px',
});

const [ToggleBtn2, setToggleBtn2] = useState( {
  position: 'absolute',
  fontSize: '60px',
  marginTop: '1%',
  right: '5.5%',
  cursor : 'pointer'
});

const [Arrowbutton2, setArrowbutton2] = useState(faAngleDown);
const [ShowMediaIcons2, setShowMediaIcons2] = useState(false);
const [ShowWindowSizeChangeCard2, setShowWindowSizeChangeCard2] = useState(sideBarStyle);
const [ShowWindowSizeChangeCard3, setShowWindowSizeChangeCard3] = useState(sideBar1Style); 
const [ShowWindowSizeChangeCard4, setShowWindowSizeChangeCard4] = useState(sideBar2Style); 


function CardCompoenent(props) {
  
  if(props.windowSize === 'half'){
    setShowWindowSizeChangeCard2(sideBarStyleResponsive)
  }else(
    setShowWindowSizeChangeCard2(sideBarStyle)
  )
  
  return (
<div className="card2" style={ShowWindowSizeChangeCard2}>
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
                <a id="tele"><img  src="/image/telegram.jpg" alt="" srcset="" /><h3>Telegram</h3></a>
                <a id="whatsapp"><img src="/image/whatsapp.png" alt="" srcset="" /><h3>Whatsapp</h3></a>
                <a id="live"><img src="/image/live_chat.png" alt="" srcset="" /><h3>Live chat</h3></a>
              </>
            ) : (
              true
            )}
          </div>
        </span>
      </div>
  )
            }
function SocialMediaCard(props){

  if(props.windowSize === 'half'){
    setShowWindowSizeChangeCard3(sideBarStyleResponsive4)
  }else(
    setShowWindowSizeChangeCard3(sideBar1Style)
  )
  return(
    <div className="card3" style={ShowWindowSizeChangeCard3}>
    <a>
      <FontAwesomeIcon
        id="question1"
        icon={faShareNodes}
      ></FontAwesomeIcon>
    </a>
    <h1>Social</h1>
    <h4>Lorem ipsum dolor sit amet</h4>
    <a className="toggle-btn" style={ToggleBtn1} onClick={ScrollDownMenu1}>
      <FontAwesomeIcon icon={Arrowbutton1}></FontAwesomeIcon>
    </a>
    <span className="dots">
      <div className="travel">
        {ShowMediaIcons1 ? (
          <>
            <a id="facebook"><img  src="/image/facebook.jpg" alt="" srcset="" /><h3>Facebook</h3></a>
            <a id="instagram"><img src="/image/instagram_logo.png" alt="" srcset="" /><h3>Instagram</h3></a>
            <a id="twitter"><img src="/image/twitter.png" alt="" srcset="" /><h3>Twitter</h3></a>
            <a id="linkedin"><img src="/image/linkedin.png" alt="" srcset="" /><h3>Linkedin</h3></a>
          </>
        ) : (
          true
        )}
      </div>
    </span>
  </div>
  );
}

function FormBar(props){

  if(props.windowSize === 'half'){
    setShowWindowSizeChangeCard4(sideBarStyleResponsive2)
  }else(
    setShowWindowSizeChangeCard4(sideBar2Style)
  )

  return(
    <div className="card4" style={ShowWindowSizeChangeCard4}>
        <a>
          <FontAwesomeIcon
            id="question1"
            icon={faMessage}
          ></FontAwesomeIcon>
        </a>
        <h1>Send Query</h1>
        <h4>Lorem ipsum dolor sit amet</h4>
        <a className="toggle-btn" style={ToggleBtn2} onClick={ScrollDownMenu2}>
          <FontAwesomeIcon icon={Arrowbutton2}></FontAwesomeIcon>
        </a>
        <span className="dots">
          <div className="travel">
            {ShowMediaIcons2 ? (
              <>
                <form action="#">
                  <div id='fname'>
                  <label for="fname">First&nbsp;name</label><br/>
                  <input type="text" id="fname" name="fname" /><br/>
                  </div>
                  <div id='lname'>
                  <label for="lname">Last&nbsp;name</label><br/>
                  <input type="text" id="lname" name="lname" /><br/>
                  </div>
                  <div id='sname'>
                  <label for="sname">Subject</label><br/>
                  <input type="text" id="sname" name="sname" /><br/>
                  </div>
                  <div id='oname'>
                  <label for="oname">Order&nbsp;No.</label><br/>
                  <input type="text" id="oname"/><br/>
                  </div>
                  <div id='pname'>
                  <label for="pname">Your&nbsp;Query</label><br/>
                  <textarea id="w3review" name="w3review" rows="5" cols="60"></textarea>
                  </div>
                  <input  id='submit' type="submit" value="Submit"/>
                </form>
              </>
            ) : (
              true
            )}
          </div>
        </span>
      </div>
  );
}
// ----------------------------------


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

      {iSWindowSizeChanged ?  <CardCompoenent windowSize="half"/> : <CardCompoenent windowSize="fullScreen" /> }
      

      {/* ----------------------------------------- */}

      {iSWindowSizeChanged ? <SocialMediaCard windowSize="half"/> : <SocialMediaCard windowSize="fullScreen"/>}


      {/* ------------------------ */}

      {iSWindowSizeChanged ? <FormBar windowSize="half"/> : <FormBar windowSize="fullScreen"/>}


      {/* ------------------------ */}

      <div className="free" style = {{top:'220%', position:'absolute'}}><h1>Rachit Gupta</h1></div>


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

  // ----------------------------

  function ScrollDownMenu1(){
    let updatedValue1 = {};
    updatedValue1 = {height:"30%"};
    setsideBar1StyleSize(sideBar1Style => ({
        ...sideBar1Style,
        ...updatedValue1
    }))
    if(Arrowbutton1.iconName === 'angle-up'){
        updatedValue1 = {height:"15%"};
        setsideBar1StyleSize(sideBar1Style => ({
            ...sideBar1Style,
            ...updatedValue1
        }));
        setArrowbutton1(faAngleDown);
        setShowMediaIcons1(false);
    }else{
        setArrowbutton1(faAngleUp);
        setShowMediaIcons1(true);
    }

  }
  // ------------------------------

  function ScrollDownMenu2(){
    let updatedValue2 = {};
    updatedValue2 = {height:"70%"};
    setsideBar2StyleSize(sideBar2Style => ({
        ...sideBar2Style,
        ...updatedValue2
    }))
    if(Arrowbutton2.iconName === 'angle-up'){
        updatedValue2 = {height:"15%"};
        setsideBar2StyleSize(sideBar2Style => ({
            ...sideBar2Style,
            ...updatedValue2
        }));
        setArrowbutton2(faAngleDown);
        setShowMediaIcons2(false);
    }else{
        setArrowbutton2(faAngleUp);
        setShowMediaIcons2(true);
    }

  }
  // ------------------------------

}
