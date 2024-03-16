import "../styles/App.css"
import React from 'react'
import InputPanel from '../components/InputPanel.tsx';
import Table from '../components/Table.tsx';
import {InputLabels, ColumnHeaders} from "../AppData.tsx";
import { ReactElement } from 'react';
import {useState, createContext, Context} from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ButtonTheme from "../styles/InputElementsThemes.tsx";
import ThemeProvider from '@mui/material/styles/ThemeProvider';

export let NotificationBoxContext: Context<{NotificationBox: ReactElement, changeNotification: React.Dispatch<React.SetStateAction<ReactElement>>}>;

function AdminPanel(){
    const [NotificationBox, changeNotification] = useState(<></>);
    NotificationBoxContext = createContext<{NotificationBox: ReactElement, changeNotification: React.Dispatch<React.SetStateAction<ReactElement>>}>({NotificationBox: NotificationBox, changeNotification: changeNotification});
    const navigate = useNavigate(); 

    return(
          <div>
          <div className="App">
            <div className="PanelTitle">Computer Store Administrator Panel</div>
            <div className="PagePanel">
              <Table headers={ColumnHeaders}/>
              <InputPanel labels={InputLabels}/>
            </div>
            {NotificationBox}
          </div>
            <ThemeProvider theme={ButtonTheme}>
              <Button 
              style={{position: "absolute", left: "10px", top: "10px"}}
              variant="contained" className="NavigationButton" color="buttonGreen"
              onClick={() => navigate("/")}>
                <ArrowBackIosIcon></ArrowBackIosIcon>Home
              </Button>
            </ThemeProvider>
          </div>
       
    );
}

export default AdminPanel;