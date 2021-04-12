import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNewTime } from "../../../redux/actionCreators";
const mapStateToProps = state => {
    return {
      currentTime: state.time.currentTime
    };
  };
const mapDispatchToProps = dispatch=>(
  {
    updateTime : ()=>dispatch(fetchNewTime())
  }
)
const Home = props => (
    <div>
    <h1>Welcome home</h1>
    <p>Current time: {props.currentTime}</p>
    {/* <Link to="/about">Go to about</Link> */}
    <button onClick={props.updateTime}>update time</button>
  </div>
)
export default connect(mapStateToProps,mapDispatchToProps)(Home);