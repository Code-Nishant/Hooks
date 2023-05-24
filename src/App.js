import React, { useContext, useReducer } from 'react';
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
import HookComponentAA from './components/HookComponentAA';
import HookComponentBB from './components/HookComponentBB';
import HookComponentCC from "./components/HookComponentCC";
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import HookParentComponent from './components/HookParentComponent';
import Counter from './components/Counter';

export const UserContext= React.createContext(); //single props usage
export const ChannelContext= React.createContext(); //multiple props usage

export const CountContext= React.createContext();
const intialState=0;

const reducer= (currentState,action)=>{
  switch (action) {
    case 'increment':
        return currentState+1;
    case 'decrement':
        return currentState-1;
    case 'reset':
        return intialState;
    default:
        return currentState
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer,intialState);
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

      {/* useContext */}
      <UserContext.Provider value={"Nishant Choudhary"}>
        <ChannelContext.Provider value={"ATOM"}>
          <HookComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* useReducer */}
      <br />
      <hr />
      <HookCounterOne />
      <HookCounterTwo />
      <HookCounter3 />

      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count- {count}
        <HookComponentAA />
        <HookComponentBB />
        <HookComponentCC />
      </CountContext.Provider>

      <DataFetchingOne />
      <DataFetchingTwo />

      {/* useCallback */}
      <br />
      <hr />
      <HookParentComponent />
      <Counter />
      </div>
  );
}

export default App;
