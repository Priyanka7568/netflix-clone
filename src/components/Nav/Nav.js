import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://static.vecteezy.com/system/resources/previews/003/930/872/non_2x/green-emoji-square-smiling-face-icon-free-vector.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
