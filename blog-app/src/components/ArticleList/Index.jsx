import React, {Component} from 'react';
import Article from '../Article';
import ArticleAddition from '../ArticleAddition';
import './style.css';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {allArticles: this.props.articles};
        this.addNewArticle = this.addNewArticle.bind(this);
    }

    render() {
        const articles = this.state.allArticles;

        let mappedArticles = articles.map((item, index) => {
            return <li key={item.publishedAt + index} className="article-list-li">
                <Article article={item} defaultArticleState={index === 0}/>
            </li>;
        });

        return (
            <div>
                <ArticleAddition addArticle={this.addNewArticle}/>
                <ul>
                    {mappedArticles}
                </ul>
            </div>
        );
    }

    addNewArticle(newArticle) {
        var articles = this.state.allArticles;

        articles.push(newArticle);
        this.setState({allArticles: articles});
    }
}

export default ArticleList;