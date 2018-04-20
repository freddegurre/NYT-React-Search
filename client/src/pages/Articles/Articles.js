import React, { Component } from "react";
import Search from "../../components/Search/Search.js";
import {SavedArticles} from "../../components/SavedArticles/";
import API from "../../utils/API";

class Articles extends Component {
  state = {
    Articles: [],
  };

  componentDidMount() {
  }

  getSavedArticles = () => {
    API.getSavedArticles().then(res => {
      this.setState({Articles: res.data})
  })
}


  render() {
    return (
      <div>
     <div className="jumbotron"> <h3> NYT News </h3></div>
    <div  className="container">
    <button onClick={this.getSavedArticles}> saved articles </button>
    <Search />
    {this.state.Articles.map(Article => {
                return(
                <div className="articleBloc">
                <SavedArticles title={Article.title}
                 article={Article.article}
                 link={Article.link}
                 date={Article.date}
                 />
                </div>
                    )
                })
            } 
    </div>
    </div>
    )
  }
}
export default Articles;

