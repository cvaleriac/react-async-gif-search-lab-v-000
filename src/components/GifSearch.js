import React, { Component } from 'react';

class GifSearch extends Component {
    state = {
        query : ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchApi(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
            </form>
        )
    }
}

export default GifSearch
