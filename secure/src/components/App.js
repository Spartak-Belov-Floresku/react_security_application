import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Replace Switch with Routes
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';
import Contact from './Contact';
import About from './About';
import data from '../data/data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Manny Henri",
      jumbotronTitle: "List of courses",
      feeds: [],
    };
  }

  componentDidMount() { // ✅ Replace UNSAFE_componentWillMount with componentDidMount
    this.setState({
      feeds: data,
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Jumbotron title={this.state.jumbotronTitle} />
          <Routes> {/* ✅ Use Routes instead of Switch */}
            <Route path="/contact" element={<Contact />} /> {/* ✅ Use element instead of component */}
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Feed feeds={this.state.feeds} />} />
          </Routes>
          <div className="footer">
            <p>&copy; {this.state.name} Inc.</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
