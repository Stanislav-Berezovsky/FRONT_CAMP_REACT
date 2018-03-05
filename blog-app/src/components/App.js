import React, {Component} from 'react';
import ArticleList from './ArticleList/Index';
import articleData from '../mocks/serverResponce';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        My News application
                    </h1>
                </div>

                <ArticleList articles={articleData}/>
            </div>
        );
    }
}

export default App;