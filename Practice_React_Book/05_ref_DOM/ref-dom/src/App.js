import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ValidationSample from './511_522_ValidationSample'
import ValidationSampleHooks from './511_522_ValidationSample_hooks'
import RenderScrollBox from './532_RenderScrollBox'
import './App.css'

const Root = () => (
  <Router>
    <div className="container">
      <ul>
        <li>
          <Link to="/vs">5.1.1_5.2.2 예제</Link>
        </li>
        <li>
          <Link to="/vs-hooks">5.1.1_5.2.2 예제 - Hooks 적용</Link>
        </li>
        <li>
          <Link to="/sb">5.3.2 컴포넌트에 ref 달기</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/vs" component={ValidationSample} />
      <Route path="/vs-hooks" component={ValidationSampleHooks} />
      <Route path="/sb" component={RenderScrollBox} />
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
