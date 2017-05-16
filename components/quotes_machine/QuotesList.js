import React, {Component} from 'react';
import axios from 'axios';

class QuotesList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const quotes = this.props.quotes.map((quote) =>
      <div key={quote.id}>
        <div><strong>{quote.id}</strong></div>
        <div><strong><i>{quote.title}</i></strong></div>
        <div>{quote.body}</div>
        <hr></hr>
      </div>
    );
    return (
      <div>
        {quotes}
      </div>
    );
  }
}

export default QuotesList;
