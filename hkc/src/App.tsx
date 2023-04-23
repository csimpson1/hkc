import React from 'react';
import { descriptionHaikus } from '../src/data/haiku'
import  Haiku  from './components/haiku/base-haiku/Haiku'
import { getHaikuComponent } from './components/haiku-factory/haiku-factory'
import './App.css';


function App() {
  // return (
  //   <Haiku haiku={descriptionHaikus.haikus[0]}></Haiku>
  // );
  return getHaikuComponent(descriptionHaikus.haikus[0]);
}

export default App;
