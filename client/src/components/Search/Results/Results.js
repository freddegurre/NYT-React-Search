import React from "react";
import "./Results.css";

export const Results = props => {
    return(
    <div className="singleResults">
    <h4> {props.title} </h4>
    <p> {props.article}</p>
    <span> {props.date} </span> <span> <a href={props.link}>link to article</a></span>
   </div>
  )
};

