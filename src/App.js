import React from 'react';
import ButtonNoForm from './components/buttonNoForm';
import ConditionalForm from './components/conditionalForm';
import SimpleForm from './components/simpleForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <SimpleForm />
      <ButtonNoForm />
      <ConditionalForm />
    </div>
  );
}

export default App;
