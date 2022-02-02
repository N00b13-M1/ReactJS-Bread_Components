import React, {Component} from 'react';
import '../css/Body.css'
import Article from './Article';

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {nombreArticles: "1"}
  }
  picker = () => {
    const number = document.getElementById("mySelect").value
    this.setState({nombreArticles: number})
    console.log(typeof number)
  }

  render(){
    return (
      <div className="">
        <div className="picker d-flex justify-content-center align-itemw-center">
          <p className="text-white my-auto">Select a number of articles:</p>
          <select id="mySelect" className="ms-2" onChange={this.picker}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        {
          this.state.nombreArticles === "2" &&
          <div>
            <Article />
            <Article />
          </div>
        }
        {
          this.state.nombreArticles !== "2" &&
          <h1 className="text-center text-white p-5">Il n'y a pas d'articles </h1>
        }
      </div>
    );
  }
}

export default Body;