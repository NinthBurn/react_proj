import '.././styles/table_button_styles.css';
import React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ButtonTheme from '.././styles/InputElementsThemes';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { ComputerComponent } from './ComputerComponent';
import { textChanged } from './InputPanel';
import ValidateData, { stringToDate } from './DataValidation';

interface ButtonProps{
    AppData: [ComputerComponent[], any];
    element_id: number;
  }
  
  interface SaveButtonProps{
    AppData: [ComputerComponent[], any, any];
    InputData: string[];
  }

export function DeleteButton(props: ButtonProps){
    const deleteClicked = (data: ComputerComponent[], identifier: number) => {
        console.log("delete clicked " + identifier);
        let x = data.filter((part) => {
            return part.id === identifier ? false : true;
        });
        const onDataChange = props.AppData[1];
        onDataChange(x);
        
    }
    return (<ThemeProvider theme={ButtonTheme}><Button variant="contained" color="buttonRed" onClick={() => deleteClicked(props.AppData[0], props.element_id)} className="DeleteButton">DELETE</Button></ThemeProvider>);
  }
  
  export function EditButton(props: ButtonProps){    
    const editClicked = (data: ComputerComponent[], identifier: number) => {
        console.log("edit clicked " + identifier);
        const arr: string[] = [];
        const pc_part: ComputerComponent = data.filter((p) => {return p.id === identifier;})[0];
  
        Object.entries(pc_part).map((column_data, key) => {
          if(column_data[0] === "releaseDate"){
            arr.push(column_data[1].getUTCDate() + 1 + "/" + (column_data[1].getMonth() + 1)+ "/" + column_data[1].getFullYear());
          }else{
            arr.push(column_data[1].toString());
          }
          return 1;
        });  
  
        textChanged(arr, arr[0], 0);
    }
    return <ThemeProvider theme={ButtonTheme}><Button variant="contained" color="buttonBlue" onClick={() => editClicked(props.AppData[0], props.element_id)} className="EditButton">EDIT</Button></ThemeProvider>;
  }

export function SaveButton(props: SaveButtonProps){
  const saveClicked = (data: ComputerComponent[], inputData: string[]) => {
      console.log("save clicked");
      const changeAlertText = props.AppData[2];

      // id manufacturer name category price release_date quantity
      let newData: ComputerComponent[];
      const pc_part:ComputerComponent = {
        id: Number(props.InputData[0]),
        manufacturer: props.InputData[1],
        productName: props.InputData[2],
        category: props.InputData[3],
        price: Number(props.InputData[4]),
        releaseDate: stringToDate((props.InputData[5]), "dd/MM/yyyy", "/"),
        quantity: Number(props.InputData[6])
      };

      const dataValidation = ValidateData(pc_part);

      if(dataValidation === ""){
        let alertText: string;
        const index = data.findIndex((part) => {return part.id === pc_part.id;});
        if(index === -1){
          alertText = "Entry successfully added!";
          newData = [...data, pc_part];
        }else{
          alertText = "Entry successfully updated!";
          newData = data.map((x) => {return x;});
          newData[index]= pc_part;
        }

        const onDataChange = props.AppData[1];
        onDataChange(newData);
        displayAlert(changeAlertText, alertText, "success");

      }else displayAlert(changeAlertText, dataValidation, "error");
  }
  return <ThemeProvider theme={ButtonTheme}><Button variant="contained" color="buttonGreen" onClick={() => saveClicked(props.AppData[0], props.InputData)} className="InsertButton">SAVE</Button></ThemeProvider>;
}

let timeout: null | ReturnType<typeof setTimeout> = null;

function displayAlert(changeAlert: any, alertMessage:string, alertType: string){
    let alert = (<Alert className="AlertNotification" variant="filled" severity={alertType === "success" ? "success" : alertType === "error" ? "error" : alertType === "info" ? "info" : "warning"}>
      {alertMessage}
    </Alert>);
  
    if(timeout != null){
      changeAlert(<></>)
      clearTimeout(timeout);
  
      // this is stupid but I have to do it
      // there is probably a better way to do this
      setTimeout(() => { changeAlert(alert) }, 10);
  
      timeout = setTimeout(() => { changeAlert(<></>) }, 5000);
  
    }else{
      timeout = setTimeout(() => { changeAlert(<></>) }, 5000);
      changeAlert(alert);
    }
}
