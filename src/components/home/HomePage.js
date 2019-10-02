import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
      <h1>Admin App</h1>
      <p>React redux official introduction</p>
      <Link to="about" className="btn btn-lg btn-primary">Learn More...</Link>
      </div>
    );
  }
}

export default HomePage;
