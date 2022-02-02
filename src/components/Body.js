import React, {Component} from 'react';
import '../css/Body.css'
import Article from './Article';

class Body extends Component {
  render(){
    return (
      <div className="">
        <Article/>
        <Article/>
      </div>
    );
  }
}

export default Body;