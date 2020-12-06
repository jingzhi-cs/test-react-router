import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
    const navstyle = {
        color: 'white'
    };

  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link to="/about" style={navstyle}>
                <li>About</li>
            </Link>
            <Link to="/Weather" style={navstyle}>
                <li>Weather</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
