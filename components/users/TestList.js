import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/search/movie';
const api_keyValue = 'e1c2e1e415becaf826d5e1ee0b5f4792';

class Test extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange =  this.handleChange.bind(this);
    this.state = {
      pages: [],
      searchParams: ""
    };
  }

  handleClick() {
    axios.get(baseUrl, {
      params: {
        query: this.state.searchParams,
        'api_key': api_keyValue
      }
    }).then(data => {
      this.setState({pages:data.results});
    });
  }
  handleChange(event) {
    this.setState({searchParams: event.target.value});
    console.log('Search value: ',this.state.searchParams);
  }
  render() {
    var results = Object.keys(this.state.results).map(index => (
      <div className="index" key={this.state.results[index].id}>
        <div className="title"><b>{this.state.results[index].original_title}</b></div>
      </div>
    ));
    return (
      <div className="list container">
        <div className="d-flex mb-5">
          <input className="form-control" value={this.state.searchParams} onChange={this.handleChange} type="text" placeholder="Seach Movie"/>
          <button className="btn btn-primary" onClick={this.handleClick}>Seach</button>
        </div>
        {results}
      </div>
    );
  }
}

export default Test;
