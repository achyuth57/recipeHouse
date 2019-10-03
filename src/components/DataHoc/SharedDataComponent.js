import React from "react";
import API from "../API/api";

const SharedDataComponent = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        error: ""
      };
    }

    componentDidMount() {
      console.log("re-render");
      const data = API.posts("../recipes.json").getAll();

      data
        .then(res => {
          this.setState({
            data: res.data.recipes,
            loading: false
          });

          //console.log(res.data.recipes);
        })
        .catch(e => {
          this.setState({
            error: e.message,
            loading: false
          });
        });
    }
    render() {
      return <WrappedComponent {...this.props} state={this.state} />;
    }
  }

  return HOC;
};

export default SharedDataComponent;
