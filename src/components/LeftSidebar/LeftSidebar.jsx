import "./LeftSidebar.css";
import assets from "../../assets/assets";
import { CiMenuKebab, CiSearch } from "react-icons/ci";

function LeftSidebar() {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <div className="ls-logo">
            <img src={assets.Chat_logo} alt="" className="logo" />
            <span>ChatApp</span>
          </div>
          <div className="menu">
            <CiMenuKebab className="menu-img" />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Log Out</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <CiSearch className="search-img" />
          <input type="text" placeholder="Search here.." />
        </div>
      </div>

      <div className="ls-list">
        {Array(12).fill("").map((item,index)=>(
          <div key={index} className="friends">
          <img src={assets.Photo} alt="" />
          <div>
            <p>Suraj</p>
            <span>Hello, How are you?</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
