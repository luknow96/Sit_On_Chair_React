import React, { Component } from "react";
import Pinterest from "../assets/images/pinterest.png";
import Flickr from "../assets/images/flickr.png";
import Twitter from "../assets/images/twitter.png";
import Vimeo from "../assets/images/vimeo.png";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footerWrap">
        <div className="leftSide">
          <p className="copyrightText">Copyright 2020 | All Rights Reserved</p>
        </div>
        <div className="rightSide">
          <img src={Flickr} className="socialIcon" alt="FlickrIcon" />
          <img src={Vimeo} className="socialIcon" alt="VimeoIcon" />
          <img src={Pinterest} className="socialIcon" alt="PinterstIcon" />
          <img src={Twitter} className="socialIcon" alt="TwitterIcon" />
        </div>
      </div>
    );
  }
}

export default Footer;
