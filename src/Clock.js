import React from "react";
import "./clock.css";
import { Alert } from "react-bootstrap";

class Clock extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    console.log("tick");
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log("render");
    return <p>{this.state.date.toLocaleTimeString()}</p>;
  }
}
export default Clock;
