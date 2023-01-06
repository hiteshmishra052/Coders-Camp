import React from 'react';
import "./rightBar.scss"
import userimage from "./user.jpg";

const RightBar=()=> {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <span>Tony clark</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <p>
              <span>Jane Doe</span>
              changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <p>
              <span>Jane Doe</span>
              changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <p>
              <span>Jane Doe </span> changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <p>
              <span>Jane Doe</span>
              changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <div className="online"/>
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <div className="online"/>
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <div className="online"/>
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userimage} alt="" />
              <div className="online"/>
              <span>Jane Doe</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar;