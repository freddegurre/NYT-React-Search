import React, { Component } from "react";
import Search from "../../components/Search/Search.js";

class Articles extends Component {
  state = {
    Articles: [],
  };

  componentDidMount() {
  }


  render() {
    return (
    <div>
      <Search />
    </div>
    )
  }
}
export default Articles;

