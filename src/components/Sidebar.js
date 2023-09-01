import { 
    FaTwitter,
    FaHome,
    FaHashtag,
    FaRegBell,
    FaRegEnvelope,
    FaRegBookmark,
    FaClipboardList,
    FaUserAlt,
    FaMehBlank,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href=""><FaTwitter className="icons logo"/></a></li>
        <li><a href=""><FaHome className="icons logo"/>Home</a></li>
        <li><a href=""><FaHashtag className="icons"/>Explore</a></li>
        <li><a href=""><FaRegBell className="icons"/>Notificatios</a></li>
        <li><a href=""><FaRegEnvelope className="icons"/>Messages</a></li>
        <li><a href=""><FaRegBookmark className="icons"/>Bookmark</a></li>
        <li><a href=""><FaClipboardList className="icons"/>List</a></li>
        <li><a href=""><FaUserAlt className="icons"/>Profile</a></li>
        <li><a href=""><FaMehBlank className="icons"/>More</a></li>
        <div className="sidebar__Btn">
            <a>Profile</a>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
