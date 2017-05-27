import React, { Component } from 'react';
import Search from './SearchMovie';
import List from './List';
import stylesheet from './Main.scss';


class Main extends Component {
  render() {
    return  (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="top-right">
          <Search></Search>
        </div>
        <div className="center">
          <List></List>
        </div>
      </div>
    );
  }
}
export default Main;
