import "./profile.scss"
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram} from "react-icons/bs";
import { BsPinterest} from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { GrMoreVertical } from "react-icons/gr";
import andre from "../../image/andre (2).jpg"
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images5.alphacoders.com/105/1052992.jpg" 
        alt="" className="cover"/>

        <img src={andre}
        alt="" className="profilePic"/>

      </div>
      <div className="profileContainer">
        <div className="uinfo">
          <div className="left">
            <a href="https://www.instagram.com/andre_zoe/"> 
              <BsFacebook fontSize="large"/> </a>
            <a href="https://www.instagram.com/andre_zoe/"> 
              <BsInstagram fontSize="large"/> </a>
            <a href="https://www.instagram.com/andre_zoe/"> 
              <BsTwitter fontSize="large"/> </a>
            <a href="https://www.instagram.com/andre_zoe/"> 
              <BsLinkedin fontSize="large"/> </a>
            <a href="https://www.instagram.com/andre_zoe/"> 
              <BsPinterest fontSize="large"/> </a>

          </div>
          <div className="center">
            <span>Andre zoe</span>
            <div className="info">
              <div className="item">
                <GoLocation/>
                <span>Indonesia</span>
              </div>
              <div className="item">
                <GrLanguage/>
                <span>Andre frontend</span>
              </div>
            </div>
              <button>ikuti</button>
          </div>
          <div className="right">
            <AiOutlineMail/>
            <GrMoreVertical/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile;