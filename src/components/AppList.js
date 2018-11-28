import React, { Component } from "react";
import AppToDos from "./AppToDos.js";

class AppList extends Component {

  render () {
    const choosevalue = this.props.choosevalue;
    const getList = this.props.data.map(({id, text, complete}, index) => {
      if (choosevalue === 1) {
        return <AppToDos key={index} id={id} text={text} complete={complete}/>
      } else if (choosevalue === 2 && !complete) {
        return <AppToDos key={index} id={id} text={text} complete={complete}/>
      } else if (choosevalue === 3 && complete) {
        return <AppToDos key={index} id={id} text={text} complete={complete}/>
      }
      
    })
    return (
      <div>{ getList }</div>
    )
  }
}
export default AppList;