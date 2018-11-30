import React, { Component } from "react";
import AppFrom from "./AppFrom.js";
import AppList from "./AppList";
import AppFooter from "./AppFooter.js";

var style={
  'margin': {
    margin: '0 auto'
  }
}
class App extends Component {
  state = {
    choosevalue: 1,
    data: this.props.data
  }
  addDataToList(newItem) {
    return new Promise((resolve, reject) => {
      let newData = this.state.data.concat(newItem);
      this.setState({data: newData});
      if (newData) {
        resolve()
      } else {
        reject()
      }
    })
  }
  chooseType(value) {
   let target = value;
    this.setState({choosevalue: target});
  }
  render() {
    const { data, choosevalue } = this.state;
    return (
      <div className="ui comments" style={style.margin}>
        <h1>My Todo width React</h1>
        <div className="ui divider"></div>
        <AppFrom addData={this.addDataToList.bind(this)}/>
        <AppList data={data} choosevalue={choosevalue} />
        <AppFooter selectType={this.chooseType.bind(this)}/>
      </div>
    )
  }
}
export default App;