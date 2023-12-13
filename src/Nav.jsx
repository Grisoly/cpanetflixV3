import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
      return () => {
        window.removeEventListener("scroll", null);
      };
    }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo"
      src="https://i.imgur.com/4nC45CI.png"
      alt="cpanetflixlogo" />

      <img 
      className="nav__avatar" 
      src="https://gravatar.com/avatar/de1b9b85fa912f9804c4544c5540aa1b?s=40&d=wavatar&r=x" 
      alt="avatar" />

    </div>
  )
}

export default Nav