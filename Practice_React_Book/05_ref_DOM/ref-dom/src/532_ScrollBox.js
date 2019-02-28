import React, { Component } from 'react'
import './ScrollBox.css'

class ScrollBox extends Component {

  scrollToBottom = () => {
    /* 비구조화 할당 문법 사용, 아래와 같은 의미.
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight; 
     */
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    return (
      <div 
        className="style"
        ref={(ref) => {this.box=ref}}
      >
        <div className="inner-style" />
      </div>
    )
  }
}

export default ScrollBox;
