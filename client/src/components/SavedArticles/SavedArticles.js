import React from "react";

export const SavedArticles = props => (
    <div className="singleResults">
    <h4> {props.title} </h4>
    <p> {props.article}</p>
    <span> {props.date} </span> <span> <a href={props.link}>link to article</a></span>
   </div>
);
