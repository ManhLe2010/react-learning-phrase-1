import React, { Component } from 'react';
import axios from 'axios';
import stylesheet from './Main.scss';
import Link from 'next/link';

const listUrl = 'https://api.themoviedb.org/3/movie/popular';
const imageUrl = 'https://image.tmdb.org/t/p/w500';
const api_keyValue = process.env.THE_MOVIE_DB_API_KEY_MANH;
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results : []
    };
  }

  static getInditialProps ({ query: {id} }){
    return { id };
  }

  componentDidMount () {
    axios.get(listUrl, {
      params: {
        'api_key': api_keyValue
      }
    }).then(response => {
      this.setState({
        results: response.data.results
      });
    });
  }
  // {{ pathname: 'movieDetails', query: { id: page.id }}}
  render() {
    let results = this.state.results.map(page => (
      <div className="index list" key={page.id}>
        <div className="image">
          <img src={imageUrl+page.poster_path}></img>
        </div>
        <div className="details">
          <div className="flex">
            <Link href={{ pathname: 'movieDetails', query: { id: page.id }}}>
              <a href="">{page.title}</a>
            </Link>
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
          <div><a className="more-info" href="/">More Info</a></div>
        </div>
      </div>
    ));
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="list container">
          {results}
        </div>
      </div>
    );
  }
}

export default List;
 // <Link as={`/movieDetails`} href={`/post?id=${page.id}`}>
            //   <a className="title">{page.title}</a>
            // </Link>
