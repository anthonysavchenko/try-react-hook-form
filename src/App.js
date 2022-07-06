import React from 'react';
import ButtonNoForm from './components/buttonNoForm';
import ConditionalForm from './components/conditionalForm';
import SimpleForm from './components/simpleForm';
import DivFieldForm from './components/divFieldForm';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <SimpleForm /> */}
      {/* <ButtonNoForm /> */}
      {/* <ConditionalForm /> */}
      <DivFieldForm />
    </div>
  );
}

export default App;
