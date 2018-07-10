import React from "react";
import Flexbox from 'flexbox-react';
import "./Content.css";


const Content = (props) => (

    <Flexbox flexGrow={1}>
    <div className = "depressionInfo">
   
    </div>
    <div className = "userComments">
     {props.comment}
    </div>
  </Flexbox>

);

export default Content;