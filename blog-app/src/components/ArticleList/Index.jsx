import React, {Component} from 'react';
import Article from '../Article';
import ArticleAddition from '../ArticleAddition';
import ArticlesFilter from '../ArticlesFilter';
import './style.css';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allArticles: this.props.articles,
            filteredArticles: this.props.articles
        };
        this.addNewArticle = this.addNewArticle.bind(this);
        this.filterArticlesByTitle = this.filterArticlesByTitle.bind(this);

    }

    render() {
        const articles = this.state.filteredArticles;

        let mappedArticles = articles.map((item, index) => {
            return <li key={item.publishedAt + index} className="article-list-li">
                <Article article={item} defaultArticleState={index === 0}/>
            </li>;
        });

        return (
            <div>
                <div>
                    <ArticleAddition addArticle={this.addNewArticle}/>
                </div>
                <div>
                    <ArticlesFilter filterArticles={this.filterArticlesByTitle}/>
                </div>
                <ul>
                    {mappedArticles}
                </ul>
            </div>
        );
    }

    addNewArticle(newArticle) {
        var allArticles = this.state.allArticles,
            filteredArticles = this.state.filteredArticles;


        allArticles.push(newArticle);
        filteredArticles.push(newArticle);
        this.setState({allArticles: allArticles, filteredArticles: filteredArticles});
    }

    filterArticlesByTitle(title) {
        console.log(typeof title);
        var articles = this.state.allArticles.filter(function (item) {
            return item.title.toLowerCase().search(title.toLowerCase()) !== -1;
        });

        this.setState({filteredArticles: articles});

    }
}

export default ArticleList;