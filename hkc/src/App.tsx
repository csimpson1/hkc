import React from 'react';
import { descriptionHaikus, haikus } from '../src/data/haiku'

import { getHaikuComponent } from './components/haiku-factory/haiku-factory'
import './App.css';


function App() {

  return (
  <div>
    {getHaikuComponent(descriptionHaikus.haikus[0])}
    {getHaikuComponent(haikus.haikus[11])}
  </div>);
}

export default App;
