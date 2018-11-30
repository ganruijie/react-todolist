import React,{ Component } from "react"
import { generateId } from "../script/methods.js";
var style = {
  'title': {
    width: 200,
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'top',
  }
}
class AppFrom extends Component {
  handleAdd(event) {
    event.preventDefault();
    let value = this.refs.text.value;
    if(!value) {alert("...eeeee...");return null}
    this.props.addData({id: generateId(), text: value, complete: false}).then(() => {
      this.refs.text.value = "";
    }).catch(() => {
      console.log("err !!!")
    });
  }
  render () {
    return (
      <form className="ui reply form" onSubmit={this.handleAdd.bind(this)}>
        <div className="field" style={style}>
          <input type="text" placeholder="TODO" ref="text"/>
        </div>
        <button type="submit" className="ui blue button">add</button>
      </form>
    )
  }
}
export default AppFrom;