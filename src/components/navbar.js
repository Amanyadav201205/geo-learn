import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/"></Link>
      <Link to="/register"></Link>
      <Link to="/course"></Link>
      <Link to="/assessment"></Link>
      <Link to="/feedback"></Link>
    </nav>
  );
}

export default Navbar;