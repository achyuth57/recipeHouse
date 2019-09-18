import React, { Component } from "react";
import TopNav from "./components/TopNav";
import Footer from "./components/footer/Footer";

import FireConnection from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false, user: null };
  }
  componentDidMount() {
    FireConnection.auth().onAuthStateChanged(authenticated => {
      const user = authenticated
        ? FireConnection.auth().currentUser.email.split("@")[0]
        : "";

      //console.log(user);
      authenticated
        ? this.setState({
            authenticated: true,
            user: user
          })
        : this.setState({ authenticated: false });
    });
  }
  render() {
    // return <Firetest />;
    return (
      <div>
        <TopNav
          authenticated={this.state.authenticated}
          user={this.state.user}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
