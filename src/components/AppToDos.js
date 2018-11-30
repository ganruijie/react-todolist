import React, { Component } from "react";

var style = {
  'title': {
    paddingLeft: '20px',
    paddingRight: '50px',
    position: 'relative',
    cursor: 'pointer'
  },
  'delete': {
    marginLeft: '20px',
    marginRight: '50px'
  }
}

class AppToDos extends Component {
  doStatus() {
    this.props.upDataFn(this.props.id, 1)
  }
  deleteFn() {
    this.props.upDataFn(this.props.id, 2)
  }
  render () {
    return (
      <div className='comment'>
        <div className='content'>
          <span 
            className='author'
            onClick={this.doStatus.bind(this)}
            style={style.title}>{this.props.text}</span>
          <span
            className={this.props.complete ? 'line' : ''}></span>
          <span 
            className='author'
            style={style.title}>{this.props.complete ? '已完成' : '未完成'}</span>
          <span className='author'>{this.props.id}</span>
          <span 
            className='ui blue button'
            onClick={this.deleteFn.bind(this)}
            style={style.delete}>delete</span>
        </div>
      </div>
    )
  }
}

export default AppToDos;