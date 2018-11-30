import React, { Component } from "react";

var style = {
  'title': {
    marginRight: 10,
    fontSize: 20
  },
  'top': {
    marginTop: 20
  }
}

class AppFooter extends Component {
  getType(event) {
    let value = Number(event.target.value);
    this.props.selectType(value);
  }
  render () {
    return (
      <div>
        <h2 style={style.top}>show</h2>
        <button 
          type='submit'
          style={style.top}
          className='ui blue button'
          value='1'
          onClick={this.getType.bind(this)}
          ref='all'>all</button>
        <button 
          type='submit'
          style={style.top}
          className='ui blue button'
          value='2'
          onClick={this.getType.bind(this)}
          ref='active'>还未完成</button>
        <button 
          type='submit'
          style={style.top}
          className='ui blue button'
          value='3'
          onClick={this.getType.bind(this)}
          ref='complete'>已完成</button>
      </div>
    )
  }
}

export default AppFooter;