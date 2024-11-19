import { GoDotFill } from "react-icons/go";
import assets from "../../assets/assets";
import "./RightSidebar.css";
import { logout } from "../../config/firebase";

function RightSidebar() {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.Photo} alt="" />
        <h3>
          Suraj Gaikwad <GoDotFill className="chat-user-green-dot" />
        </h3>
        <p>Hey I am Suraj Gaikwad using ChatApp</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.Photo} alt="" />
          <img src={assets.Photo} alt="" />
          <img src={assets.Photo} alt="" />
          <img src={assets.Photo} alt="" />
          <img src={assets.Photo} alt="" />
          <img src={assets.Photo} alt="" />
        </div>
      </div>
      <button onClick={()=>logout()}>Log Out</button>
    </div>
  );
}

export default RightSidebar;
