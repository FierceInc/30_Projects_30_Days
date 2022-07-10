import React, { Component } from "react";
import picture2 from "./images/picture2.jpg";
import picture3 from "./images/picture3.jpg";
import picture4 from "./images/picture4.jpg";
import "./ExploreScreen.css";
export default class ExploreScreen extends Component {
 
  render() {

    return (
      <div className="over">
        <div className="image-grid-first">
          <div className="first-row">
            <div>
              <img src={picture2} alt="" id="picture"/>

              <div className="pic-hover" id="dic"></div>
            </div>
            <div>
              <img src={picture3} alt="" id="picture"/>
              <div className="pic-hover1"id="dic" ></div>
            </div>
          </div>
          <div className="second-row">
            <img src={picture4} alt="" id="picture"/>
            <div className="pic-hover2" id="dic"></div>
          </div>
        </div>
        <div className="normal-grid">
          <div>
            <img src={picture2} alt="" id="picture"/>
            <div className="pic-hover3" id="dic"></div>
          </div>
          <div>
            <img src={picture3} alt="" id="picture"/>
            <div className="pic-hover4" id="dic"></div>
          </div>
          <div>
            <img src={picture2} alt="" id="picture"/>
            <div className="pic-hover5" ></div>
          </div>
        </div>
      </div>
    );
  }
}
