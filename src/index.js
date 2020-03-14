import React from 'react';
import ReactDOM from 'react-dom';
import "./style/main.less";
class Main extends React.Component {
  render() {
    return (
      <h1>What is up world</h1>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
