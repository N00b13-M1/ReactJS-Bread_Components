import React, {Component} from 'react';
import '../css/Header.css'
import Searchbar from './Searchbar';
import Navigation from './Navigation';

class Header extends Component {
  render(){
    return (
      <div>
        <nav>
          <div className="row">
            <div className="col-3">
              <Navigation/>
            </div>
            <div className="col-9">
              <Searchbar/>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;