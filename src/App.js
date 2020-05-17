import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Players from './components/Players';
import SelectedTeam from './components/SelectedTeam';


const App = () => (
  <Provider store={ store }>
    <main>
      <h1>TeamManager</h1>
      <Players />
      <SelectedTeam />
  </main>
  </Provider>
)

export default App;
