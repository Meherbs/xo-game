import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import VideoPayer from './components/video-player.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTour: "O",
      titre: "test",
      game_result: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    }
  }

  handleArrowClick = event => {
    this.setState({
      gameTour: (this.state.gameTour == "O") ? "X" : "O"
    });
    var row = event.target.attributes.getNamedItem('row').value;
    var col = event.target.attributes.getNamedItem('column').value;
    if (this.state.game_result[row][col] == '') {
      var res = this.state.game_result;
      res[row][col] = this.state.gameTour;
      this.setState({ game_result: res });
    }
  };

  render() {
    var arrow_doms = [];
    var key = 1;
    for (let index = 0; index < this.state.game_result.length; index++) {
      const element = this.state.game_result[index];
      const line_arrow = [];
      for (let j = 0; j < element.length; j++) {
        const arrow = element[j];
        line_arrow.push(
          <div key={key} className="arrow" onClick={this.handleArrowClick} row={index} column={j} >
            {arrow}
          </div>
        );
        key++;
      }
      arrow_doms.push(
        <div key={'row' + index} className="arrow-line">
          {line_arrow}
        </div>
      );
    }
    return (
      <div className="App">
        <div className="container">
          <h1 className="titre">{this.state.titre}</h1>
          <VideoPayer />
        </div>
      </div>
    );
  }

}

export default App;
