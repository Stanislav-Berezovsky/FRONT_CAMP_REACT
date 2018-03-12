import React, {Component} from 'react';

class ArticlesFilter extends React.Component {

    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e) {
        var title = e.target.value.trim();
        this.props.filterArticles(title);
    }

    render() {
        return (
            <input placeholder="search by title" onChange={this.onTextChanged}/>
        );
    }
}

export default ArticlesFilter;