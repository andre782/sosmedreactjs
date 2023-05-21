import { useContext } from "react";
import "./comment.scss"
import {AuthContext} from "../../context/authContext"


const Comment = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id:1,
            desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
            name: "mikasa",
            profilePicture: "https://images.pexels.com/photos/5731834/pexels-photo-5731834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

        {
            id:2,
            desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
            name: "mikasa",
            profilePicture: "https://images.pexels.com/photos/5731834/pexels-photo-5731834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

    ];

  return (
    <div className="comments">
        <div className="write">
        <img src={currentUser.profilePic} alt=""/>
        <input type="text" placeholder="write a comment" />
        <button>Kirim</button>
        </div>
        {comments.map((Comment) => (
            <div className="comment">
            <img src={Comment.profilePicture} alt=""/>
             <div className="info">
            <span>{Comment.name}</span>
            <p>{Comment.desc} </p>
        </div>
        <span className="date">1 jam lalu</span>
    </div>
))}
    </div>
  )
}

export default Comment