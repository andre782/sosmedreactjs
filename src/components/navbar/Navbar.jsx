import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";



const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SOSMED</span>
        </Link>
          <HomeIcon/>
          {darkMode ? (<WbSunnyIcon onClick={toggle}/>)
           : (<NightsStayIcon onClick={toggle}/>)}
          <AppsIcon/>
        <div className="search">
            <SearchIcon/>
            <input type="text" plaaceholder="Search..." />
        </div>

      </div>
        <div className="right">
          <Link to="/">
          <PersonIcon/>
          </Link>
          <EmailIcon/>
          <NotificationsActiveIcon/>
          <div className="user">
            <img src="https://i.pinimg.com/236x/61/51/52/6151522549587abc8757ba609f74c348.jpg" alt="user"/>
            <span>{currentUser.name}</span>
          </div>
        </div>
    </div>
  )
}

export default Navbar