import React, { Component } from 'react';
import axios from 'axios';
import stylesheet from './Main.scss';

const imageUrl = 'https://image.tmdb.org/t/p/w500';
const baseUrl = 'https://api.themoviedb.org/3/search/movie';
const api_keyValue = process.env.THE_MOVIE_DB_API_KEY_MANH;
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
    }).then(response => {
      this.setState({pages:response.data.results});
    });
  }
  handleChange(event) {
    this.setState({searchParams: event.target.value});
  }

  render() {
    let results = this.state.pages.map(page => (
      <div className="index list" key={page.id}>
        <div className="image">
          <img src={imageUrl+page.poster_path}></img>
        </div>
        <div className="details">
          <div className="flex">
            <div className="title">{page.title}</div>
            <div className="vote">
              {page.vote_average}
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
          <div className="release-date">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            {page.release_date}
          </div>
          <div className="overview">We don't have an overview translated in English. Help us expand our database by adding one.</div>
          <div className="more-info"><a href="/">More Info</a></div>
        </div>
      </div>
    ));
    return (
      <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="d-flex mb-5 mt-2 form-seach col-md-12">
          <input className="form-control" value={this.state.searchParams} onChange={this.handleChange} type="text" placeholder="Seach Movie"/>
          <button className="btn btn-primary" onClick={this.handleClick}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="list container">
          {results}
        </div>
      </div>
    );
  }
}

export default Test;
