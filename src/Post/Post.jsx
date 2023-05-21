import { Link } from "react-router-dom"
import "./post.scss"
import { GoKebabHorizontal } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import Comment from "../components/comment/Comment";
import { useState } from "react";


const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false)


  const liked = false;

  return (
    <div className='post'>
      <div className="container">
      <div className='user'>
        <div className='userInfo'>
          <img src={post.img} alt=""/>
          <div className="details">
                <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit" }}>
                  <span className="name">{post.name}</span>
                </Link>
                  <span className="date"> 1 minggu yg lalu</span>
          </div>
        </div>
        <GoKebabHorizontal/>
        </div>
        <div className='content'>
          <p>{post.desc}</p>
          <img src={post.img} alt=""/>
        </div>
        <div className='info'>
        <div className="item">
          {liked ? <AiOutlineLike/> :  <AiFillLike/>}
          90 Likes
        </div> 

        <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
          <BiCommentDetail/>
          30 comment
        </div>

        <div className="item">
        <FiShare2/>
          share
        </div> 
        </div>
        {commentOpen && <Comment/>}      
    </div>
    </div>
  )
}

export default Post