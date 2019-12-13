import React, {useState} from "react";
import { connect } from "react-redux";
import { getData, postData } from "../actions";


const PostPage = (props) => {

    const [newSmurf, setSmurf] = useState({
        name: '',
        age: 0,
        height: 0
    });

    const handleChanges = (e) => {
        setSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log(newSmurf);
        e.preventDefault();
        props.postData(newSmurf);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Add a Smurf! Attributes are Name, Age, Height, in cm.</p>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" onChange={handleChanges} value={newSmurf.name}/>
            <label htmlFor='age'>Age</label>
            <input type="number" name='age' onChange={handleChanges} value={newSmurf.age}></input>
            <label htmlFor='height'>Height</label>
            <input type="number" name='height' onChange={handleChanges} value={newSmurf.height}></input>
            <button>Add Smurf</button>
        </form>
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
  )(PostPage);