import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello from Nev</h1>
        <Link to="about" className="btn btn-primary">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
