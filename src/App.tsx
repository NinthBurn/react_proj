import './App.css';
import InputPanel from "./InputPanel";
import Table from "./Table";
import InsertData, {InputLabels, ColumnHeaders} from "./AppData";
import React from 'react';
import {useState} from 'react';

function App() {
  const [computer_components, changeData] = useState(InsertData());
  const [edit_mode, toggleEditMode] = useState(false);
  
  return (
    <div className="App">
      <div className="PanelTitle">Computer Store Administrator Panel</div>
        <div className="PagePanel">
          <Table AppData={[computer_components, changeData]} headers={ColumnHeaders}/>
          <InputPanel AppData={[computer_components, changeData]} labels={InputLabels}/>
        </div>
    </div>
  );
}

export default App;
