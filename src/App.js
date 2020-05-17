import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Players from './components/Players';
import SelectedTeam from './components/SelectedTeam';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <Provider store={ store }>
    <Navigation/>
    <div className="container p-4">
      <Players />
      <SelectedTeam />
    </div>
  </Provider>
)

export default App;
