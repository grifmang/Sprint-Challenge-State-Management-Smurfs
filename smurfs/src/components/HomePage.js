import React, {useState} from "react";
import { connect } from "react-redux";
import { getData, postData } from "../actions";
import PostPage from "./PostPage";
import SmurfCards from "./SmurfCards";

const HomePage = (props) => {
    console.log(props.data)

    return (
        <div>
            {props.data.map(element => {
                return <SmurfCards key={element.id} name={element.name} age={element.age} height={element.height} />
            })}
            <PostPage />
        </div>
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