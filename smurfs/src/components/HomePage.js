import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { getData, postData } from "../actions";
import PostPage from "./PostPage";
import SmurfCards from "./SmurfCards";

const HomePage = (props) => {

    return (
        <>
        <div className="cards">
            {props.data.map(element => {
                return <SmurfCards key={element.id} name={element.name} age={element.age} height={element.height} />
            })}
        </div>
        <PostPage />
        </>
    )
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
  )(HomePage);