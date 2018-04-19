import React from "react";

export const Results = props => {
    return(
    <div className="singleResults">
    <h4> {props.title} </h4>
    <p> {props.article}</p>
    <span> {props.date} </span> <span> {props.link} </span>
   </div>
  )
};

