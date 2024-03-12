import './styles/App.css';
import InputPanel from "./my_comps/InputPanel";
import Table from "./my_comps/Table";
import InsertData, {InputLabels, ColumnHeaders} from "./AppData";
import React, { ReactElement } from 'react';
import {useState, createContext, Context} from 'react';
import { ComputerComponent } from '../old/ComputerComponent';

export let DataContext: Context<{ComputerComponents: ComputerComponent[]; changeData: React.Dispatch<React.SetStateAction<ComputerComponent[]>>}>;
// export let DataContext: Context<{ComputerComponents: any; changeData: any}>;
export let AlertBoxContext: Context<{AlertBox: ReactElement, changeAlert: React.Dispatch<React.SetStateAction<ReactElement>>}>;

function App() {
  const [ComputerComponents, changeData] = useState(InsertData());
  const [AlertBox, changeAlert] = useState(<></>);

  // DataContext = createContext<{ComputerComponents: ComputerComponent[], changeData: React.Dispatch<React.SetStateAction<ComputerComponent[]>>} | undefined>(undefined);
  DataContext = createContext<{ComputerComponents: ComputerComponent[]; changeData: React.Dispatch<React.SetStateAction<ComputerComponent[]>>}>({ComputerComponents, changeData});
  AlertBoxContext = createContext<{AlertBox: ReactElement, changeAlert: React.Dispatch<React.SetStateAction<ReactElement>>}>({AlertBox, changeAlert});

  return (
    <div className="App">
      <div className="PanelTitle">Computer Store Administrator Panel</div>
      <div className="PagePanel">
        <Table headers={ColumnHeaders}/>
        <InputPanel labels={InputLabels}/>
      </div>
      {AlertBox}
    </div>
  );
}

export default App;
