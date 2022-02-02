import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import Button from "./Button";
import { addStopwatch } from "../redux/tracker-redux/tracker-slice";

class TrackerInput extends Component {
  state = {
    name: "",
  };
  handleInput = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const nameCheck =
      this.state.name || moment().format("HH:mm:ss, Do of MMMM, YYYY");
    this.props.onSubmit(nameCheck);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "" });
  };
  render() {
    return (
      <div className='input-container'>
        <form action='' onSubmit={this.handleSubmit}>
          <input
            name='name'
            className='input-container__input'
            type='text'
            placeholder='Enter tracker name'
            onChange={this.handleInput}
            value={this.state.name}
          />
          <Button className='input-container__button' type='submit' />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(addStopwatch(data)),
});

export default connect(null, mapDispatchToProps)(TrackerInput);
