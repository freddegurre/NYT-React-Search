import axios from "axios";


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // Gets all books
  getArticles: function(topic, startYear, endYear) {
    if (topic !== ""){
      queryURL += "&q=" + topic
    }
    if (startYear !== ""){
      queryURL += "&begin_date=" + startYear + "0101";
    }
    if (endYear !== ""){
      queryURL += "&end_date=" + endYear + "0101";
    }
    console.log(queryURL)
    return axios.get(`${queryURL}`);
  },
  
  saveArticle: function(articleData) {
    console.log(articleData.title)
    return axios.post("/api/articles", articleData);
  },

  getSavedArticles: function() {
    return axios.get("/api/articles")
  }

};

