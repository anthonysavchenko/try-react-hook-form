import React from 'react';
import ButtonNoForm from './components/buttonNoForm';
import ConditionalForm from './components/conditionalForm';
import SimpleForm from './components/simpleForm';
import './App.css';
import DivFieldForm from './components/divFieldForm';


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
