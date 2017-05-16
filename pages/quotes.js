import React, {Component} from 'react';
import Link from 'next/link';
import axios from 'axios';
import MasterLayout from '../components/MasterLayout';
import { Card, Button, CardHeader, CardFooter, CardBlock,
  CardTitle, CardText } from 'reactstrap';
import QuoteTitle from '../components/quotes_machine/QuoteTitle';
import QuoteText from '../components/quotes_machine/QuoteText';
import QuotesList from '../components/quotes_machine/QuotesList';

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      title: '',
      text: '',
      count: 1
    };
    this.handleQuotes = this.handleQuotes.bind(this);
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      this.setState({
        quotes: response.data,
        title: response.data[0].title,
        text: response.data[0].body
      });
    });
  }

  handleQuotes() {
    this.setState((prevState) => ({count: parseInt(prevState.count + 1)}));
    for(let i = 1; i < this.state.quotes.length; i++) {
      if(i == this.state.count) {
        this.setState(
          {
            title: this.state.quotes[i].title,
            text: this.state.quotes[i].body
          }
        );
      }
    }
  }

  render() {
    let twitterLink = "https://twitter.com/intent/tweet?text=" + this.state.text;
    return (
      <MasterLayout>
        <div className="individual-card">
          <Card>
            <CardHeader>
              <QuoteTitle title={this.state.title}/>
            </CardHeader>
            <CardBlock>
              <QuoteText text={this.state.text}/>
            </CardBlock>
            <CardFooter>
              <Button onClick={this.handleQuotes}>New</Button>
              <a href={twitterLink}>
                <Button>Icon</Button>
              </a>
              <a href="https://twitter.com/dungle1811">
                <Button>Follow me</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="testAPI">
          <QuotesList quotes={this.state.quotes}/>
        </div>
      </MasterLayout>
    );
  }
}

export default Quotes;
