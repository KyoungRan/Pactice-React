import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventPractice1 from './423_1_EventPractice';
import EventPractice2 from './423_2_EventPractice';
import EventPractice3 from './424_EventPractice';
import EventPractice4 from './425_EventPractice';
import PracticeHooks from './424_Hooks';
import './App.css';

const Root = () => (
  <Router>
    <div className="container">
      <ul>
        <li>
          <Link to="/ep1">4.2.3.1_EventPractice: 기본 방식</Link>
        </li>
        <li>
          <Link to="/ep2">4.2.3.2_EventPractice: Property Initilizer Syntax를 사용한 메서드 작성</Link>
        </li>
        <li>
          <Link to="/ep3">4.2.4_EventPractic: input 여러 개를 핸들링</Link>
        </li>
        <li>
          <Link to="/ep4">4.2.5_EventPractic: onKeyPress 이벤트 핸들링</Link>
        </li>
        <li>
          <Link to="/hooks">Practice Hooks with 4.2.4_EventPractice</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/ep1" component={EventPractice1} />
      <Route path="/ep2" component={EventPractice2} />
      <Route path="/ep3" component={EventPractice3} />
      <Route path="/ep4" component={EventPractice4} />
      <Route path="/hooks" component={PracticeHooks} />
    </div>
  </Router>
);

class App extends Component {
  render() {
    return (
      <div>
        <Root />
      </div>
    );
  }
}

export default App;
