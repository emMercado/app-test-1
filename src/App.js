
import './App.css';
import Checkbox from './app/components/Checkbox'
import React from "react"
import Checkboxes from './app/components/Checkboxes'


const data = ["name 1","name 2","name 3", ]
export default function App() {
  return (
    <div className="App">
      <Checkbox/>
      <Checkboxes data={data} />

    </div>
  );
}

