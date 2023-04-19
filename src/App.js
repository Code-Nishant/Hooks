import React from 'react';
import './App.css';
import ClassCounter from "./components/ClassCounter"
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HooksCounter />
      <br />
      <HooksCounterTwo />
      <br />
      <HookCounterThree />
    </div>
  );
}

export default App;
