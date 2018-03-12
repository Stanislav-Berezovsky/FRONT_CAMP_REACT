import React, {Component} from 'react';

class ArticleAddition extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "", description: ""};
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.handleArticleAdditionClick = this.handleArticleAdditionClick.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleArticleAdditionClick}>
                <p>
                    <label>Title:</label><br/>
                    <input type="text" value={this.state.title} onChange={this.onTitleChange}/>
                </p>
                <p>
                    <label>Description:</label><br/>
                    <input type="text" value={this.state.description} onChange={this.onDescriptionChange}/>
                </p>
                <input type="submit" value="add"/>
            </form>
        );
    }

    onTitleChange(e) {
        this.setState({title: e.target.value});
    }

    onDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    handleArticleAdditionClick(e) {
        e.preventDefault();
        var newArticleItem = {
            title: this.state.title,
            description: this.state.description,
            publishedAt: (new Date()).toLocaleString()
        }

        this.props.addArticle(newArticleItem);
    }

}


export default ArticleAddition;