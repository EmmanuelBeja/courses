import React, {PropTypes} from "react";
import { Link, IndexLink } from 'react-router';
import LoadingDots from "./LoadingDots";

const Header = ({loading}) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <IndexLink to="/" className="nav-brand">Home</IndexLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" activeClassName="active" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" activeClassName="active" className="nav-link">Courses</Link>
          </li>
          <li>
            {loading && <LoadingDots interval={100} dots={20} />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
