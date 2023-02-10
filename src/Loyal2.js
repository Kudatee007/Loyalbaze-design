import React from "react";
import "./Loyal2.css";
import house from './img/Iconsax/Bold/Vector.svg'
import call from './Iconsax/Bold/Vector.svg'

const Loyal2 = () => {
  return (
    <div className="loyal2">
      <div className="loyalPage2">
        <div className="loyalDiv1">
          <h1>What we do</h1>
          <p>
            Loyalbaze, empowers businesses to offer digital, mobile-first
            loyalty programs to their customers. With our AI Powered platform,
            you can easily create and manage custom loyalty and rewards
            programs, track customer engagement, and gain valuable insights to
            improve your business.
          </p>
        </div>
        <div className="loyalDiv2">
          <h2>Book a Consultation with us</h2>
          <div className="inputs">
            <div className="inputText">
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="inputText">
              <input type="text" placeholder="Enter your work email" />
            </div>
            <div className="inputText">
              <input type="text" placeholder="Mobile number" />
            </div>
            <div className="inputText">
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="inputText">
              <select name="" id="" placeholder="HHH">
                <option value="">Select Country</option>
                <option value="">NIG</option>
                <option value="">USA</option>
                <option value="">GER</option>
                <option value="">FRA</option>
                <option value="">AUS</option>
              </select>
            </div>
            <div className="textArea">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Drop a message....."
              ></textarea>
            </div>
          </div>
          <button className="btnSendReq">Send Request</button>
        </div>
      </div>
      <footer>
        <hr className="line"/>
        <div className="footer">
            <div className="house">
              <img src={house} alt="" />
              <h5>2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</h5>
            </div>
            <div className="baze">
                <h5>Loyalbaze is almost here.</h5>
            </div>
            <div className="call">
               <img src={call} alt="" />
               <h5>+234 903 618 9485</h5>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Loyal2;
