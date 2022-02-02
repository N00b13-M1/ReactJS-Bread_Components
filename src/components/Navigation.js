import React, {Component} from 'react';
import '../css/Navigation.css'

class Navigation extends Component {
  myClick = () => (
    console.log('Accueil')
  )
  // clickCounter = (e) => {
  //   switch (e.detail) {
  //     case 1:
  //       console.log("click");
  //       break;
  //     case 2:
  //       console.log("double click");
  //       break;
  //     default:
  //       return;
  //   }
  // }
  
  render(){
    return (
      <div className="d-flex justify-content-evenly mx-5 my-4">
        <input className="link" type="button" value="Link1" onClick={this.myClick} />
        <input className="link" type="button" value="Link2" 
        onMouseEnter={() => console.log('Bienvenue à la Galerie')}
        onMouseLeave={() => console.log('Salut')}
         />
        <input className="link" type="button" value="Link3" onDoubleClick={() => console.log('Contact')} />
      </div>
    );
  }
}

export default Navigation;