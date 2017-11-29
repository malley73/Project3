import React, { Component } from "react";

import API from "../../utils/API";
// import { Link } from "react-router-dom";


class Courses extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    this.loadCourses();
  }

  loadCourses = () => {
    API.getCourses()
      .then(res =>
        // this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        console.log("gets to line 20")
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="testing-courses">
        <h2>My courses are:</h2>
      </div>
    );
  }
}

export default Courses;
