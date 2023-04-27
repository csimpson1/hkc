import React from 'react';
import { descriptionHaikus, haikus } from '../src/data/haiku'
import HaikuWrapper from './components/haiku-wrapper/haiku-wrapper';
import './App.css';


function App() {

  return (
  <div>
    {haikus.map( poem => <HaikuWrapper haiku={poem}></HaikuWrapper>)}
  </div>);
}

export default App;
