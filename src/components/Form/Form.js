import React from 'react';


// const Form = () => (

// <form action="/action_page.php" method="get">
//   First name: <input type="text" name="fname" /><br/>
//   Last name: <input type="text" name="lname" /><br/>
//   <label for="msg">Message:</label>
//   <textarea id="msg" name="user_message"></textarea>
//   <input type="submit" value="Submit" />
// </form>


// );



  
  
  
  
  
    const Form = (props) => (
        <form onSubmit={props.handleSubmit}>
          <label>
            Comments:
            <textarea value={props.value} onChange={props.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    
  


export default Form;