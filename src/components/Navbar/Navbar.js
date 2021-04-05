import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => (
  <header>
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
