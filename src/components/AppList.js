import React, { Component } from "react";
import AppToDos from "./AppToDos.js";

class AppList extends Component {
  upDataFn(id, type) {
    let target = this.props.data;
    let upData = target.map((item, index) => {
      if (item.id === id) {
        if (type === 1) {
          //更改状态
          item.complete = !item.complete;
        } else {
          //删除某一条
          target.splice(index, 1);
        }
        return item;
      }
    });
    this.setState({data: upData});
  }
  render () {
    const choosevalue = this.props.choosevalue;
    const getList = this.props.data.map(({id, text, complete}, index) => {
      if (choosevalue === 1) {
        return <AppToDos key={index} id={id} text={text} complete={complete} upDataFn={this.upDataFn.bind(this)}/>
      } else if (choosevalue === 2 && !complete) {
        return <AppToDos key={index} id={id} text={text} complete={complete} upDataFn={this.upDataFn.bind(this)}/>
      } else if (choosevalue === 3 && complete) {
        return <AppToDos key={index} id={id} text={text} complete={complete} upDataFn={this.upDataFn.bind(this)}/>
      }
      
    })
    return (
      <div>{ getList }</div>
    )
  }
}
export default AppList;