import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getData, postData } from "../actions";
import HomePage from "./HomePage";

const App = (props) => {

    return (
      <div className="App">
        <button onClick={props.getData}>Click to get tha Smurf's!</button>
          <HomePage />
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData, postData }
)(App);
