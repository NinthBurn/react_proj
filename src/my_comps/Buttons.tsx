import '.././styles/table_button_styles.css';
import React, { ReactElement } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ButtonTheme from '.././styles/InputElementsThemes';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { ComputerComponent } from './ComputerComponent';
import { textChanged } from './InputPanel';
import ValidateData, { stringToDate } from './DataValidation';
import { AlertBoxContext, DataContext} from '../App';

interface ButtonProps{
    element_id: number;
}
  
interface SaveButtonProps{
    InputData: string[];
}

export function DeleteButton(props: ButtonProps){
    const {ComputerComponents, changeData} = React.useContext(DataContext);
    const {AlertBox, changeAlert} = React.useContext(AlertBoxContext);  

    const deleteClicked = (identifier: number) => {
        console.log("delete clicked " + identifier);
        let x = ComputerComponents.filter((part) => {
            return part.id === identifier ? false : true;
        });

        changeData(x);
        displayAlert(changeAlert, "Entry with ID " + identifier + " has been successfully deleted.", "success");   
    }

    return (<ThemeProvider theme={ButtonTheme}><Button variant="contained" color="buttonRed" onClick={() => deleteClicked(props.element_id)} className="DeleteButton">DELETE</Button></ThemeProvider>);
  }
  
  export function EditButton(props: ButtonProps){   
    const {ComputerComponents, changeData} = React.useContext(DataContext);
    const {AlertBox, changeAlert} = React.useContext(AlertBoxContext);  

    const editClicked = (identifier: number) => {
        console.log("edit clicked " + identifier);
        const arr: string[] = [];
        const pc_part: ComputerComponent = ComputerComponents.filter((p) => {return p.id === identifier;})[0];
  
        Object.entries(pc_part).map((column_data, key) => {
          if(column_data[0] === "releaseDate"){
            arr.push(column_data[1].getUTCDate() + 1 + "/" + (column_data[1].getMonth() + 1)+ "/" + column_data[1].getFullYear());
          }else{
            arr.push(column_data[1].toString());
          }
          return 1;
        });  
        displayAlert(changeAlert, "Entry with ID " + identifier + " has been selected.", "info"); 
        console.log(arr, arr[0]);
        textChanged(arr, arr[0], 0);
    }

    return <ThemeProvider theme={ButtonTheme}><Button variant="contained" color="buttonBlue" onClick={() => editClicked(props.element_id)} className="EditButton">EDIT</Button></ThemeProvider>;
  }

export function SaveButton(props: SaveButtonProps){
  const {ComputerComponents, changeData} = React.useContext(DataContext);
  const {AlertBox, changeAlert} = React.useContext(AlertBoxContext);  

  const saveClicked = (inputData: string[]) => {
      console.log("save clicked");

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
        const index = ComputerComponents.findIndex((part) => {return part.id === pc_part.id;});
        if(index === -1){
          alertText = "Entry successfully added!";
          newData = [...ComputerComponents, pc_part];
        }else{
          alertText = "Entry successfully updated!";
          newData = ComputerComponents.map((x) => {return x;});
          newData[index]= pc_part;
        }

        changeData(newData);
        displayAlert(changeAlert, alertText, "success");

      }else displayAlert(changeAlert, dataValidation, "error");
  }

  return <ThemeProvider theme={ButtonTheme}><Button variant="contained" color="buttonGreen" onClick={() => saveClicked(props.InputData)} className="InsertButton">SAVE</Button></ThemeProvider>;
}

let timeout: null | ReturnType<typeof setTimeout> = null;

export function displayAlert(changeAlert: React.Dispatch<React.SetStateAction<ReactElement>>, alertMessage:string, alertType: string){
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

  return;
}
