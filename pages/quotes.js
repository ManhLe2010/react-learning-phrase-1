import React, {Component} from 'react';
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
      text: ''
    };
    this.handleQuotes = this.handleQuotes.bind(this);
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      this.setState({quotes: response.data});
      console.log(this.state.quotes);
    });
  }

  handleQuotes() {
    let count = 0;
    for(let i = 0; i < this.state.quotes.length; i++) {
      if(i == count) {
        this.setState(
          {
            title: this.state.quotes[i].id,
            text: this.state.quotes[i].text
          }
        );
      }
      count++;
    }
  }

  render() {
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
