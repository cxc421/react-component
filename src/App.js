import React, { Component } from 'react';
import {view as Progressbar} from './Progressbar';

class App extends Component {  
  constructor () {
    super(...arguments);
    
    this._startProgressbar = this._startProgressbar.bind(this);

    this.state = {
      loading: false,
      percent: 0
    }
  }
  componentDidMount () {
    this._startProgressbar();
  }
  _startProgressbar () {
    console.log('start');
    this.setState({loading: true, percent: 0});
    let key = setInterval(()=>{
      let {percent} = this.state;
      //this.setState({loading: true, percent: percent + 1});
      if (percent >= 100) {
        clearInterval(key);
        this.setState({loading: false, percent: percent + 10});
      }
      else {
        this.setState({loading: true, percent: percent + 1});
      }
    }, 10);
  }
  render() {
    const {loading, percent} = this.state;
    return (
      <div className="App">      
        {loading ? <Progressbar percent={percent} /> : null}
      </div>
    );
  }
}

export default App;
