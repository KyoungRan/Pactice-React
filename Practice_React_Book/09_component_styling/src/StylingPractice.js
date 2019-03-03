import React, { Component } from 'react'
import classNames from 'classnames/bind'
// import styles from './App.css'
import styles from './StylingPractice.scss'

const cx = classNames.bind(styles)

class App extends Component {
  
  state = {
    isBlue: true
  }

  handleBtn = () => {
    this.setState({
      isBlue: !this.state.isBlue
    })
  }
  render() {
    return (
      <div className={cx('container')}>
      <div className={cx('box', {
        blue: this.state.isBlue
      })}>
        <div className={cx('box-inside')}></div>
       </div>
       <button className={cx('btn')} onClick={this.handleBtn}>Blue</button>
      </div>
    );
  }
}

export default App
