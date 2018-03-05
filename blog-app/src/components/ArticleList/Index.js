import React, {Component} from 'react';
import Article from '../Article';
import './style.css';

class ArticleList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {articles} = this.props;

        let mappedArticles = articles.map((item, index) => {
            return <li key={item.publishedAt + index} className="article-list-li">
                <Article article={item} defaultArticleState={index === 0}/>
            </li>;
        });

        return (
            <ul>
                {mappedArticles}
            </ul>
        );
    }
}

export default ArticleList;