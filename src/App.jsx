import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import FuncComplex from './components/FuncComplex';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <FunctionalComponent min={1} max={10} />
        <FuncComplex min={1} max={10} />
      </div>
    );
  }
}
