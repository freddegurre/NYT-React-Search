import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "./Form";

class Search extends Component {
  state = {
    Articles: [],
    topic: "", 
    startYear: "", 
    endYear: ""
   
  };

  componentDidMount() {

  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // Updating the input's state
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  newSearch = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear).then(res =>{
      console.log(res.data.response.docs)
      this.setState({ Articles: res.data.response.docs})
      this.setState({
        topic: "", 
        startYear: "", 
        endYear: ""
      })
      }).catch(err => console.log(err));
  };

  render() {
    return (
    <div>
      <form>
      <Input
        value={this.state.topic}
        onChange={this.handleInputChange}
        name="topic"
        placeholder="Title (required)"
      />
       <Input
        value={this.state.startYear}
        onChange={this.handleInputChange}
        name="startYear"
        placeholder="startYear (required)"
      />
       <Input
        value={this.state.endYear}
        onChange={this.handleInputChange}
        name="endYear"
        placeholder="endYear (required)"
      />
      <FormBtn onClick={this.newSearch}>
      Search 
      </FormBtn>
      </form>
              <ul>
              {this.state.Articles.map(Article => {
                  return(
                    <li>{Article.headline.main}</li>
                  )
                })
              } 
              </ul>
    </div>
    )
  }
}
export default Search;