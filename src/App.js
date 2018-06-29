import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <p>Welcome Home!</p>
  </div>
)

const About = ({ example }) => (
  <div>
    <p>The about page { example }</p>
  </div>
)

const Music = ({ match }) => ( //match is sometimes just (props)
  <div>
    <p>The music page for: { match.params.artist }</p>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/music/kanye">Kayne</Link>
            <Link to="/music/jayz">Jay Z</Link>
          </nav>
          <Route exact path="/" component={Home} />

          <Route path="/about" render={(routerProps) => (
            <About { ...routerProps } example="hello" />
          )} />

          <Route path="/music/:artist" component={Music} />
        </div>
      </Router>
    );
  }
}

export default App;
