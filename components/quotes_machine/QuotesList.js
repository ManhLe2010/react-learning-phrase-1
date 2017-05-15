import React, {Component} from 'react';
import axios from 'axios';

class QuotesList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const quotes = this.props.quotes.map((quote) =>
      <div key={quote.id}>
        <div>{quote.id}</div>
        <div>{quote.title}</div>
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
