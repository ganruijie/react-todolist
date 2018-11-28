import React, { Component } from "react";

var style = {
  'title': {
    paddingLeft: '20px',
    paddingRight: '50px',
    position: 'relative',
  },
  'delete': {
    marginLeft: '20px',
    marginRight: '50px'
  }
}

class AppToDos extends Component {
  render () {
    return (
      <div className='comment'>
        <div className='content'>
          <span 
            className='author'
            style={style.title}>{this.props.text}</span>
          <span
            className={this.props.complete ? 'line' : ''}></span>
          <span 
            className='author'
            style={style.title}>{this.props.complete ? '已完成' : '未完成'}</span>
          <span className='author'>{this.props.id}</span>
          <span 
            className='ui blue button'
            style={style.delete}>delete</span>
        </div>
      </div>
    )
  }
}

export default AppToDos;