import { useContext } from "react"
import "./stories.scss"
import {AuthContext } from "../../context/authContext"


const Stories = () => {
    const {currentUser} = useContext(AuthContext)


const stories = [
  {
    id:1,
    name: "nozel",
    img:  "https://images.pexels.com/photos/4969919/pexels-photo-4969919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },

  {
    id:2,
    name: "nozel",
    img:  "https://images.pexels.com/photos/4969919/pexels-photo-4969919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },

  {
    id:3,
    name: "nozel",
    img:  "https://images.pexels.com/photos/4969919/pexels-photo-4969919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },

  {
    id:4,
    name: "nozel",
    img:  "https://images.pexels.com/photos/4969919/pexels-photo-4969919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },

]


  return (
    <div className="stories">
        <div className="story">
            <img src="https://i.pinimg.com/236x/61/51/52/6151522549587abc8757ba609f74c348.jpg"
            alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
     {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
     ))}   

    </div>
  )
}

export default Stories