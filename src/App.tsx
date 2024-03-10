import './css/App.css';
import InputPanel from "./my_comps/InputPanel";
import Table from "./Table";
import InsertData, {InputLabels, ColumnHeaders} from "./AppData";
import React from 'react';
import {useState} from 'react';

function App() {
  const [computer_components, changeData] = useState(InsertData());
  const [AlertBox, changeAlert] = useState(<></>);

  return (
    <div className="App">
      <div className="PanelTitle">Computer Store Administrator Panel</div>
      <div className="PagePanel">
        <Table AppData={[computer_components, changeData]} headers={ColumnHeaders}/>
        <InputPanel AppData={[computer_components, changeData, changeAlert]} labels={InputLabels}/>
      </div>
      {AlertBox}
    </div>
  );
}

export default App;
