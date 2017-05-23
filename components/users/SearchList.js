import React, { Component } from 'react';
import jsonpFallback from 'jsonp-fallback';

const wikiLink = 'http://en.wikipedia.org/w/api.php';
class Search extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      pages: [],
      searchParams: ""
    };

  }
  handleClick() {
    jsonpFallback(wikiLink,{
      format: 'json',
      action: 'query',
      generator: 'search',
      gsrnamespace: 0,
      gsrlimit: 10,
      prop: 'pageimages|extracts',
      pilimit: 'max',
      exintro: '',
      explaintext: '',
      exsentences: 1,
      exlimit: 'max',
      gsrsearch: this.state.searchParams
    }).then(data => {
      this.setState({pages: data.query.pages});
    });
  }
  handleChange(event) {
    this.setState({searchParams: event.target.value});
    console.log('Search value: ',this.state.searchParams);
  }

  render() {
    var pages = Object.keys(this.state.pages).map(index =>(
      <div className="index" key={this.state.pages[index].pageid}>
        <div className="title"><b>{this.state.pages[index].title}</b></div>
        <div className="extract mb-3">{this.state.pages[index].extract}</div>
      </div>
    ));
    return (
      <div className="list container">
        <div className="d-flex mb-5">
          <input className="form-control" value={this.state.searchParams} onChange={this.handleChange} type="text" placeholder="Seach with Wikipedia"/>
          <button className="btn btn-primary" onClick={this.handleClick}>Seach</button>
        </div>
        {pages}
      </div>
    );
  }
}

export default Search;
