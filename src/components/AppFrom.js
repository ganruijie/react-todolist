import React,{ Component } from "react"
import uuid from "uuid"

var style = {
  'title': {
    width: 200,
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'top',
  }
}
class AppFrom extends Component {
  handleSubmit (event) {
    event.preventDefault();
    let text = this.refs.text.value;
    if(!text.trim()) {alert('111111');return null}
    let id = uuid();
    this.props.AddToDoItem({id: id, text: text, complete: false});
  }
  render () {
    return (
      <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="field" style={style}>
          <input type="text" placeholder="TODO" ref="text"/>
        </div>
        <button type="submit" className="ui blue button">add</button>
      </form>
    )
  }
}
export default AppFrom;