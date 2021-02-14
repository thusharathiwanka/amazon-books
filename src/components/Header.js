import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <img src="./images/logo.png" alt="header-logo" />
        <form action="">
          <input type="text" placeholder="Search here.." />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="nav-links">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
