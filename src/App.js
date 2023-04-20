import React from 'react';
import './App.css';
import ClassCounter from "./components/ClassCounter"
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HooksCounterFour from './components/HooksCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterFive from './components/HookCounterFive';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import ClassIntervalCounter from './components/ClassIntervalCounter';
import HookIntervalCounter from './components/HookIntervalCounter';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HooksCounter />
      <br />
      <HooksCounterTwo />
      <br />
      <HookCounterThree />
      <br />
      <HooksCounterFour />
      <br />
      <hr></hr>

      <ClassCounterOne></ClassCounterOne>
      <HookCounterFive></HookCounterFive>
      <br />
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer></MouseContainer> */}
      <br />
      <ClassIntervalCounter />
      <HookIntervalCounter />

    </div>
  );
}

export default App;
