import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "./Form";
import {Results} from "./Results";
import SaveBtn from "./SaveBtn";

class Search extends Component {
  state = {
    Articles: [],
    topic: "", 
    startYear: "", 
    endYear: ""
   
  };


  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  newSearch = event => {
    event.preventDefault();
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear).then(res =>{
      this.setState({ Articles: res.data.response.docs})
      this.setState({
        topic: "", 
        startYear: "", 
        endYear: ""
      })
      }).catch(err => console.log(err));
  };

  saveArticle = (article) => {
    console.log("before api.save")
    API.saveArticle({
      title: article.headline.main,
      article: article.snippet,
      link: article.web_url,
      date: article.pub_date
  }).then(res => {
   console.log("hello")
  })
}

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
        placeholder="startYear"
      />
       <Input
        value={this.state.endYear}
        onChange={this.handleInputChange}
        name="endYear"
        placeholder="endYear"
      />
      <FormBtn onClick={this.newSearch}>
      Search 
      </FormBtn>
      </form>
        <div className="results-wrapper">
            {this.state.Articles.map(Article => {
                return(
                <div className="articleBloc">
                <Results title={Article.headline.main}
                 article={Article.snippet}
                 link={Article.web_url}
                 date={Article.pub_date}
                 />
                <SaveBtn onClick={()=> this.saveArticle(Article)} />
                </div>
                    )
                })
            } 
        </div>
    </div>
    )
  }
}
export default Search;