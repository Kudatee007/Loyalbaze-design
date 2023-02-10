import React, { useState } from 'react';
import "./Loyal.css";
import loyalBlaze from "./img/Frame 1000004057.svg";
import profile from "./img/Iconsax/Linear/profilecircle.svg";
import mailBox from "./img/Icon.svg";
import people from "./img/Frame 1000004213.svg";
import confirm from "./img/Group 243.svg";

const Loyal = () => {

    const [expand, setExpand] = useState(true)

    function getAccess ()  {
       setExpand(!expand)
        
    }
  return (
    <div className="loyal1">
      <div className="nav">
        <img src={loyalBlaze} alt="" />
        <button className="btnRequest">Request a call</button>
      </div>
      <div className="loyalPage">
        <h1 className="loyalHeader">
          Turn your best customers into <span>Loyal fans</span>
        </h1>
        <p>
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Join the waiting list now to be among
          the first to experience the future of customer loyalty.
        </p>
        <div className="inputName">
          <img src={profile} alt="" />
          <input type="text" placeholder="Tell us your name" />
        </div>
        <div className="inputEmail">
          <img src={mailBox} alt="" />
          <input type="text" placeholder="Enter your email address" />
        </div>
        <button className="btnAccess" onClick={getAccess}>Get early access</button>
        <div className={expand ? "confirm" : "confirm confirm-NX"}>
          <img src={confirm} alt="" />
          <h5>Congratulations</h5>
          <p>
            Great move! You're one step closer to getting your hands on the
            product. Please check your mail for more information.
          </p>
        </div>
        <div className="peopleJoined">
          <img src={people} alt="" />
          <h5>+57 Joined</h5>
        </div>
      </div>
    </div>
  );
};

export default Loyal;
