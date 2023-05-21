import "./posts.scss"
import { Image } from "@mui/icons-material"
import Post from "../../Post/Post"

const Posts = () => {

    const Posts = [
      {
        id:1,
        name: "Andre zoe",
        profilePic: {Image},
        img:  "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },

      {
        id:2,
        name: "Andre zoe",
        profilePic: {Image},
          desc : "foto kucing sangat lucu nama nya susi anjing"
          
      },
    ]

  return (
    <div className="post">
      {Posts.map(post => (
        <div className="posts">
           <Post post={post} key={post.id} />   
        </div>
      ))}

    </div>
  )
}

export default Posts