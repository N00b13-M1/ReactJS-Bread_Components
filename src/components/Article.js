import React, {Component} from 'react';
import tartine from '../img/toast.jpeg'
import '../css/Article.css'

class Article extends Component {
  render(){
    return (
      <div className="container">
        <div className="row row1 p-2">
          <div className="col-4 div-left d-flex justify-content-start align-items-center">
            <img src={tartine} alt="tartine1"className="tartine img-fluid w-75" />
          </div>
          <div className="col-8 div-right">
            <div className="article article-top ms-5 fs-6">
              <span className="bg-white px-2 px-1">Quel est le article</span>
              <h2 className="h2title">Mon premier article</h2>
              <p className="text-white text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ut voluptate excepturi, suscipit vero debitis cumque obcaecati eaque eligendi at, enim consectetur? Dicta minus odio provident laudantium culpa sed, architecto similique ratione officia cupiditate ullam, ut eum earum repudiandae animi nisi. Dolorem corrupti accusamus dignissimos! Officiis asperiores fugit perspiciatis sint minus eos quibusdam consequatur, impedit autem, aperiam laborum doloremque consequuntur ea expedita eum repellendus repudiandae dolorum nostrum nulla culpa iusto?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;