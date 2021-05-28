import React from "react";
class Test extends React.Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("render");
    return (
      <div>
        Hello Test
        <button onClick={this.onClick}>{this.state.count}</button>
      </div>
    );
  }
}

export default Test;
