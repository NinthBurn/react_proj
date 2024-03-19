import "../styles/App.css"
import React from 'react'
import InputPanel from '../components/InputPanel.tsx';
import Table from '../components/Table.tsx';
import {InputLabels, ColumnHeaders} from "../AppData.tsx";
import { ReactElement } from 'react';
import {useState, createContext, Context} from 'react';
import HomeButton from "../components/buttons/HomeButton.tsx";
import StatisticsButton from "../components/buttons/StatisticsButton.tsx";

export let NotificationBoxContext: Context<{NotificationBox: ReactElement, changeNotification: React.Dispatch<React.SetStateAction<ReactElement>>}>;

function AdminPanel(){
    const [NotificationBox, changeNotification] = useState(<></>);
    NotificationBoxContext = createContext<{NotificationBox: ReactElement, changeNotification: React.Dispatch<React.SetStateAction<ReactElement>>}>({NotificationBox: NotificationBox, changeNotification: changeNotification});

    return(
      <div>
        <div className="AdminPage">
          <div className="App">
            <div className="PanelTitle">Computer Store Administrator Panel</div>
            <div className="PagePanel">
              <Table headers={ColumnHeaders}/>
              <InputPanel labels={InputLabels}/>
            </div>
            {NotificationBox}
          </div>
        </div>
        <HomeButton/>
        <StatisticsButton/>
      </div>
    );
}

export default AdminPanel;