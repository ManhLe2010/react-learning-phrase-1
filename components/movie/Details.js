import React, { Component } from 'react';
import axios from 'axios';
import stylesheet from './Main.scss';
import Router from 'next/router';

const movieUrl = 'https://api.themoviedb.org/3/movie/';
const imageUrl = 'https://image.tmdb.org/t/p/w500';
const api_keyValue = process.env.THE_MOVIE_DB_API_KEY_MANH;
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie : {genres: [], production_companies: []}
    };
  }

  componentDidMount () {
    axios.get(movieUrl + Router.query.id, {
      params: {
        'api_key': api_keyValue
      }
    }).then(response => {
      console.log(response.data);
      this.setState({
        movie: response.data
      });
    });
  }

  render() {
    let movie = this.state.movie;
    return (
      <div>
       <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="list">
          <div className=" single-colum container">
            <div className="image">
              <img className="detail-img" src={imageUrl + movie.poster_path}></img>
            </div>
            <div className="detail-infor pt-5 pl-5">
              <h1 className="title"><b>{movie.title}</b></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
//  <div>
//             {movie.genres.map((genre) =>
//               <p key={genre.id}>{genre.name}</p>
//             )}
//           </div>
//           <div>
//             {movie.production_companies.map((company) =>
//               <p key={company.id}>{company.name}</p>
//             )}
//           </div>
