import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    // react state
    this.state = { messages: [] }
  }

  componentDidMount() {
    // Create reference in Firebase db
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      // Update React State when message stored to db
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState( { messages: [message].concat(this.state.messages) } );
    })
  }

  addMessage(e) {
    // prevent form submit from reloading page
    e.preventDefault();
    // send message to firebase
    fire.database().ref('messages').push( this.inputEl.value );
    // then clear the value
    this.inputEl.value = '';
  }

  render() {
    return(
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={el => this.inputEl = el}></input>
        <input type="submit"></input>
        <ul>
          {
            this.state.messages.map( message => <li key={message.id}>{message.text}</li>)
          }
        </ul>
      </form>
    );
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
