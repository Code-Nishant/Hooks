import React, { useContext } from 'react';
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
import DataFetching from './components/DataFetching';
import HookComponentC from './components/HookComponentC';
import HookCounterOne from './components/HookCounterOne';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounter3 from './components/HookCounter3';

export const UserContext= React.createContext(); //single props usage
export const ChannelContext= React.createContext(); //multiple props usage

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
      <br />
      <hr />

      <DataFetching></DataFetching>

      <UserContext.Provider value={"Nishant Choudhary"}>
        <ChannelContext.Provider value={"ATOM"}>
          <HookComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <br />
      <hr />
      <HookCounterOne />
      <HookCounterTwo />
      <HookCounter3 />
    </div>
  );
}

export default App;
