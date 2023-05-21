import "./leftBar.scss"
import friends from "../../image/friends.png"
import groups from "../../image/group.png"
import marketplace from "../../image/marketplace.png"
import watch from "../../image/watch.png"
import memories from "../../image/memori.png"
import event from "../../image/event.png"
import gaming from "../../image/gaming.png"
import gallery from "../../image/gallery.png"
import video from "../../image/video.png"
import message from "../../image/message.png"
import donate from "../../image/donate.png"
import Courses from "../../image/courses.png"
import Tutorials from "../../image/tutorials.png"


const LeftBar = () => {
  
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src="https://i.pinimg.com/236x/61/51/52/6151522549587abc8757ba609f74c348.jpg" alt="user"/>
          <span>Nozel Silva</span>
          </div>

          <div className="user">
          <img src={friends} alt=""/>
          <span>Teman-</span>
          </div>

          <div className="user">
          <img src={groups} alt=""/>
          <span>Grup</span>
          </div>

          <div className="user">
          <img src={marketplace} alt=""/>
          <span>Marketplace</span>
          </div>

          <div className="user">
          <img src={watch} alt=""/>
          <span>Watch</span>
          </div>

          <div className="user">
          <img src={memories} alt=""/>
          <span>Kenangan</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Shorcut kamu</span>

          <div className="user">
          <img src={event} alt="" />
          <span>Event</span>
          </div>

          <div className="user">
          <img src={gaming} alt=""/>
          <span>Gaming</span>
          </div>

          <div className="user">
          <img src={gallery} alt=""/>
          <span>Gallery</span>
          </div>

          <div className="user">
          <img src={memories} alt=""/>
          <span>Kenangan</span>
          </div>

          <div className="user">
          <img src={video} alt=""/>
          <span>Videos</span>
          </div>

          <div className="user">
          <img src={message} alt=""/>
          <span>Pesan</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Other</span>

          <div className="user">
          <img src={donate} alt=""/>
          <span>Fundaiser</span>
          </div>

          <div className="user">
          <img src={Courses} alt=""/>
          <span>Tutorials</span>
          </div>

          <div className="user">
          <img src={Tutorials} alt=""/>
          <span>Courses</span>
          </div>

          <div className="user">
          <img src={Tutorials} alt=""/>
          <span>Courses</span>
          </div>

          <div className="user">
          <img src={Tutorials} alt=""/>
          <span>Courses</span>
          </div>

          <div className="user">
          <img src={Tutorials} alt=""/>
          <span>Courses</span>
          </div>

          <div className="user">
          <img src={Tutorials} alt=""/>
          <span>Courses</span>
          </div>
      </div>
      </div>     
    </div>
  )
}

export default LeftBar