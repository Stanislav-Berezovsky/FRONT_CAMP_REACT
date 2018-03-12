import React, {Component} from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: props.defaultArticleState};
    }

    render() {
        const {article} = this.props;
        const articleBody = this.state.isOpen ? (<div className="card-body">
                <div className="card-text">
                    <p>{article.description}</p>
                </div>
                <div>
                    <span className="card-subtitle text-muted">{(new Date(article.publishedAt)).toLocaleString()}</span>
                </div>
            </div>) : "";

        return (
            <div className="card mx-auto" style={{width:'80%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button className="btn btn-primary btn-lg float-right" onClick={this.changeArticleState}>
                            {this.state.isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
                </div>

                {articleBody}
            </div>
        );
    }

    changeArticleState = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
}

export default Article;