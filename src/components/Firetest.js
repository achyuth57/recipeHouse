import React, { Component } from "react";
import fireConnection from "../firebase";

class Firetest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentWillMount() {
    let messageRef = fireConnection
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    messageRef.on("child_added", snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    });
  }
  addMessage(e) {
    e.preventDefault();
    fireConnection
      .database()
      .ref("messages")
      .push(this.inputE1.value);
    this.inputE1.value = "";
  }
  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={el => (this.inputE1 = el)} />
        <input type="submit" />
        <ul>
          {this.state.messages.map(message => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
      </form>
    );
  }
}

export default Firetest;
