import { Link } from "react-router-dom";
import icon from '../assets/itemshopicon.png'

function Navbar({ username, setUser }) {

  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (
    <div className="navBar">
      <ul>
        {username ?
          <>
            <li>
              <Link to='/shop' >
                <img className="icon" src={icon} />
              </Link>
            </li>
            <li className="navbarwelcome">Welcome, {username}!</li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li onClick={logout}>
              <Link to="/login">Logout</Link>
            </li>
          </>
          :
          <>
            <li>
              <Link to="/">
                <img className="icon" src={icon} />
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        }
      </ul>
    </div>
  );
}

export default Navbar;
