import React, { Component } from 'react';
import { Component1 } from '../Component1/Component1';
import { Component2 } from '../Component2/Component2';
import './App.css';

class App extends Component {
  state = {
    showFirst: true,
  };

  componentDidMount() {
    this.props.apiRequest();
  }

  handleChange = e => {
    const showFirst = e.currentTarget.checked;

    this.setState({ showFirst });
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="check">Show First Component</label>
        <input
          type="checkbox"
          onChange={this.handleChange}
          id="check"
          checked={this.state.showFirst}
          data-testid="check"
        />
        {this.state.showFirst ?
          <Component1 /> :
          <Component2 />
        }
      </div>
    );
  }
}

export default App;
