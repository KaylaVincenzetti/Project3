import React, { Component } from 'react';
import "./depression.css";
import API from '../utils/API';




import Form from '../components/Form/Form';
import Flexbox from 'flexbox-react';


class depression extends Component {
  state = {
    value: '',
    userName: ''
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
    let data = {
      userName: this.state.userName,
      comment: this.state.value
    }

    API.addComment(data);

  }
  render() {
    return (
      <div className="App">
      <Flexbox flexDirection="column" minHeight="100vh">
      <div className="mainContent">
      <section id="depressionContent"> 
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Mauris metus. Fusce suscipit libero eget elit. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Proin mattis lacinia justo. Duis risus. Praesent dapibus. Praesent id justo in neque elementum ultrices. Duis risus. Et harum quidem rerum facilis est et expedita distinctio. Nulla non lectus sed nisl molestie malesuada. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Duis condimentum augue id magna semper rutrum. In rutrum. Integer in sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque ipsum. In rutrum. Proin mattis lacinia justo.</p>

        <p>Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque pretium lectus id turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Aenean vel massa quis mauris vehicula lacinia. Nullam sit amet magna in magna gravida vehicula. Nulla non arcu lacinia neque faucibus fringilla. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.</p>

        <p>Etiam egestas wisi a erat. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Pellentesque arcu. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Maecenas libero. Et harum quidem rerum facilis est et expedita distinctio. Integer vulputate sem a nibh rutrum consequat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Fusce aliquam vestibulum ipsum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aenean fermentum risus id tortor.</p>

        <p>Etiam dictum tincidunt diam. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer imperdiet lectus quis justo. Aenean id metus id velit ullamcorper pulvinar. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Suspendisse nisl. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Fusce consectetuer risus a nunc. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. In dapibus augue non sapien. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. In enim a arcu imperdiet malesuada. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit.</p>

        <p>Maecenas lorem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Etiam dictum tincidunt diam. Cras elementum. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Vivamus porttitor turpis ac leo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Aenean placerat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Integer pellentesque quam vel velit. Proin mattis lacinia justo. Aliquam erat volutpat. Maecenas libero. Etiam egestas wisi a erat. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Maecenas aliquet accumsan leo.</p>

        <p>Nulla quis diam. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Integer tempor. Aliquam erat volutpat. In convallis. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Duis pulvinar. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis condimentum augue id magna semper rutrum. Fusce tellus. Quisque tincidunt scelerisque libero. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla non arcu lacinia neque faucibus fringilla.</p>

        <p>In dapibus augue non sapien. Aliquam ante. In dapibus augue non sapien. Nunc auctor. Nullam rhoncus aliquam metus. Etiam neque. Donec quis nibh at felis congue commodo. Vestibulum fermentum tortor id mi. Mauris tincidunt sem sed arcu. Aenean fermentum risus id tortor. Et harum quidem rerum facilis est et expedita distinctio. Aliquam ante. Ut tempus purus at lorem. Fusce aliquam vestibulum ipsum. Maecenas lorem. Fusce wisi. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Maecenas sollicitudin.</p>

        <p>Mauris dictum facilisis augue. Etiam bibendum elit eget erat. Pellentesque arcu. Mauris metus. Nullam at arcu a est sollicitudin euismod. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque sapien. Phasellus rhoncus. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Mauris dictum facilisis augue. Nam quis nulla. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Sed convallis magna eu sem. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Integer lacinia. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.</p>
       
        </section>
       
       
          <img id="imageRight" src="https://static.timesofisrael.com/www/uploads/2018/03/depression-1.jpg" alt="depression meme" />
       </div>
        

        
       

       
       
       <Form id="comments"
       handleChange = {this.handleChange}
       handleSubmit = {this.handleSubmit}
       value = {this.state.value}
       userName = {this.state.userName}
       />
        
        </Flexbox>
        
      </div>
    );
  }
}

export default depression;
