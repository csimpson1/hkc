import React from 'react';
import { descriptionHaikus } from '../src/data/haiku'
import  Haiku  from '../src/components/haiku/Haiku'
import './App.css';


function App() {
  return (
    <Haiku haiku={descriptionHaikus.haikus[0]}></Haiku>
  );
}

export default App;
