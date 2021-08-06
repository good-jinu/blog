import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {

  render() {
    return (
      <ul className="MainMenu responsive-font">
        <li><Link to="/about">About me</Link></li>
        <li>Contents</li>
        <li>More</li>
      </ul>
    );
  }
};

export default Home;