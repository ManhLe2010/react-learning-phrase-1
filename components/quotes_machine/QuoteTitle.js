import React, {Component} from 'react';

class QuoteTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.title}</div>
    );
  }
}

export default QuoteTitle;
