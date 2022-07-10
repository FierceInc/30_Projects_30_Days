import React, { Component } from "react";
import { Avatar } from "@mui/material";
import "./UserProfile.css";
import avatar from "./icons/avatar.png";
import avatar2 from "./icons/avatar2.jpg";
import avatar3 from "./icons/avatar3.jpg";
import avatar4 from "./icons/avatar4.jpg";
import avatar7 from "./icons/avatar7.jpg";
import p1 from "./images/picture1.jpg";
import heart from "./icons/bheart.png";
import rheart from "./icons/heart.png";
import sendButton from "./icons/send.png";
import comment from "./icons/chat.png";
import save from "./icons/save.png";
import smile from "./icons/smile.png";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-screen">
          <Stories />
        </div>
        <ProfileSuggestions />
        <SuggestionsCard pic={p1} rheart={rheart} name="Thuso Mbedu"/>
        <SuggestionsCard pic={p1} rheart={heart} name="Sizo Mhlongo"/>
      </React.Fragment>
    );
  }
}

const Story = (props) => {
  return (
    <div>
      <div className="user-story">
        <div
          className="story-img"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <span>User_one</span>
        </div>
      </div>
    </div>
  );
};

const Stories = () => {
  return (
    <div>
      <div class="stories">
        <Story image={avatar2} />
        <Story image={avatar3} />
        <Story image={avatar4} />
        <Story image={avatar7} />
        <Story image={avatar2} />
        <Story image={avatar3} />
      </div>
    </div>
  );
};

const SuggestProfile = (props) => {
  return (
    <div>
      <div className="suggestions-lg">
        <Avatar
          alt="Profile"
          src={props.avatar}
          id="profile-sug"
          sx={{ width: 35, height: 35 }}
        />
        <div className="foll-name">
          <span>{props.name}</span>
          <span id="o-name">{props.details}</span>
        </div>
        <span style={props.color}>{props.state}</span>
      </div>
    </div>
  );
};

const ProfileSuggestions = () => {
  return (
    <div id="su">
      <div className="side-suggestions">
        <div className="suggestions-lg">
          <Avatar
            alt="Profile"
            src={avatar}
            id="profile-sug"
            sx={{ width: 60, height: 60 }}
          />
          <div className="prof-name">
            <span>fierce_rocks</span>
            <span id="o-name">Sizo Mhlongo</span>
          </div>
          <span id="change">Switch</span>
        </div>
        <p id="s">
          Suggestions for you <span id="see-all">See All</span>
        </p>
        <SuggestProfile
          state="Follow"
          name="fierce_rocks"
          avatar={avatar2}
          details="Also followed by dsd_dfe, peter.."
        />
        <SuggestProfile
          color={{ color: "black" }}
          state="Following"
          name="fierce_rocks"
          avatar={avatar3}
          details="Also followed by dsd_dfe, peter.."
        />
        <SuggestProfile
          color={{ color: "black" }}
          state="Following"
          name="fierce_rocks"
          avatar={avatar4}
          details="Also followed by dsd_dfe, peter.."
        />
        <SuggestProfile
          color={{ color: "black" }}
          state="Following"
          name="fierce_rocks"
          avatar={avatar}
          details="Also followed by dsd_dfe, peter.."
        />
        <SuggestProfile
          state="Follow"
          name="fierce_rocks"
          avatar={avatar7}
          details="Also followed by dsd_dfe, peter.."
        />
      </div>
    </div>
  );
};
const SuggestionsCard = (props) => {
  return (
    <>
      <div className="s-card">
        <div className="s-head">
          <div className="s-pic">
            <div className="s-img">
              <img src="" alt=""/>
            </div>
          </div>
          <div id="post-name">
            <span id="prof-name">{props.name}</span>
            <span id="location">Somewhere in my heart lol</span>
          </div>
        </div>
        <div className="post-body">
          <img src={props.pic} alt="" />
          <div className="dots">
            <span style={{ background: "rgb(0, 156, 228)" }}></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="post-icons">
              <button>
                <img src={props.rheart} alt="" />
              </button>
              <button>
                <img src={comment} alt="" />
              </button>
              <button>
                <img src={sendButton} alt="" />
              </button>
            </div>
            <button id="save-btn">
              <img src={save} alt="" />
            </button>
          </div>
          <div className="post-details">
            <span id="likes">194 likes</span>
            <span id="st">
              <span id="thuso">Thuso Mbedu</span>{" "}
              <p>
                This is the post details{" "}
                <span style={{"fontSize": "13px"}}>#STORY</span>
              </p>
            </span>
            <span id="time">40 MINUTES AGO</span>
          </div>
        <hr/>
          <div class="comments">
          <button>
                <img src={smile} alt="" />
              </button>
              <p id="add">Add a comment</p>
              <p id="post">POST</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
