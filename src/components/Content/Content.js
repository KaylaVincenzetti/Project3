import React from "react";
import Flexbox from 'flexbox-react';


const Content = (props) => (

    <Flexbox flexGrow={1}>
    <div className = "depressionInfo">
    Content
    </div>
    <div className = "userComments">
     {props.comment}
    </div>
  </Flexbox>

);

export default Content;