import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StylingPractice from './StylingPractice';
import Button from './components/Button';
import StyledButton from './StyledButton';
import './App.css';

const Root = () => (
  <Router>
    <div className="container">
      <ul>
        <li>
          <Link to="/styling">css, Sass 예제</Link>
        </li>
        <li>
          <Link to="/btn">Sass 라이브러리: 버튼</Link>
        </li>
        <li>
          <Link to="/styled">styled-components</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/styling" component={StylingPractice} />
      <Route path="/btn" render={() => <Button>버튼</Button>} />
      <Route path="/styled" render={() => <StyledButton big>버튼</StyledButton>} />
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div>
        <Root />
      </div>
    );
  }
}

export default App
