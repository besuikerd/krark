import React from 'react';
import logo from './logo.svg';
import './App.css';
import {initialState, performSimulation} from "./thumb/ThumbState";
import {ThumbComponent} from "./thumb/components/Thumb";
import {createStore} from "redux";
import {reducer} from "./thumb/reducer";
import {Provider} from "react-redux";

const store = createStore(reducer, initialState)

const state = performSimulation({
  numberOfThumbs: 3,
  numberOfKrarks: 3,
  coinFlips: []
})

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <div>
        <ThumbComponent state={store.getState()}/>
      </div>
    </Provider>
  );
}

export default App;
