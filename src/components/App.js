import React, { Component } from "react";
import AppFrom from "./AppFrom.js";
import AppList from "./AppList";
import AppFooter from "./AppFooter.js";

class App extends Component {
  state = {
    choosevalue: 1,
    data: this.props.data
  }
  onAddToDoItem (newItem) {
    let newData = this.state.data.concat(newItem);
    this.setState({data: newData});
  }
  onHandleType (type) {
    if (!type) { return null}
    this.setState({choosevalue: Number(type)});
  }
  render() {
    const { data, choosevalue } = this.state;
    return (
      <div className="ui comments">
        <h1>My Todo width React</h1>
        <div className="ui divider"></div>
        <AppFrom AddToDoItem={this.onAddToDoItem.bind(this)}/>
        <AppList data={data} choosevalue={choosevalue}/>
        <AppFooter HandleType={this.onHandleType.bind(this)}/>
      </div>
    )
  }
}
export default App;