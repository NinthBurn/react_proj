import './input_panel_styles.css';
import { ComputerComponent } from './ComputerComponent';
import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

interface InputPanelProps{
  AppData: [ComputerComponent[], any];
  labels: string[];
}

interface ButtonProps{
  AppData: [ComputerComponent[], any];
  element_id: number;
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
  return (<button onClick={() => deleteClicked(props.AppData[0], props.element_id)} className="DeleteButton">DELETE</button>);
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
      });  

      textChanged(arr, arr[0], 0);
  }
  return <button onClick={() => editClicked(props.AppData[0], props.element_id)} className="EditButton">EDIT</button>;
}

interface SaveButtonProps{
  AppData: [ComputerComponent[], any];
  InputData: string[];
}

export function SaveButton(props: SaveButtonProps){
  const saveClicked = (data: ComputerComponent[], inputData: string[]) => {
      console.log("save clicked");
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

      const index = data.findIndex((part) => {return part.id === pc_part.id;});
      if(index === -1){
        newData = [...data, pc_part];
      }else{
        newData = data.map((x) => {return x;});
        newData[index]= pc_part;
      }
       
      const onDataChange = props.AppData[1];
      onDataChange(newData);
  }
  return <button onClick={() => saveClicked(props.AppData[0], props.InputData)} className="InsertButton">SAVE</button>;
}

function InputPanel(props: InputPanelProps) {
    const [text, textChange] = useState(["", "", "", "", "", "", ""]);
    textChanged = (oldText: string[], newText: string, index: number) => {
      //console.log(newText);
      //console.log(index);

      const t = oldText.map((x) => x);
      t[index] = newText;
      textChange(t);
    }

    return (
        <div className="InputBoxPanel">
          {props.labels.map((value, key) => {
            const index = key;
            return (
            <div key={key} className="InputEntryBox">
              {value}<input type="text" value={text[index]} onChange={e => textChanged(text, e.target.value, index)} className="InputBox"/>
            </div>)
          })}

          <br/>
          <SaveButton AppData={props.AppData} InputData={text}/>
        </div>
    );
}

let textChanged: (oldText: string[], newText: string, index: number) => void;

/*
https://stackoverflow.com/questions/5619202/parsing-a-string-to-a-date-in-javascript
thanks Kaseem
*/

function stringToDate(_date: string, _format:string ,_delimiter: string)
{
  var formatLowerCase=_format.toLowerCase();
  var formatItems=formatLowerCase.split(_delimiter);
  var dateItems=_date.split(_delimiter);
  var monthIndex=formatItems.indexOf("mm");
  var dayIndex=formatItems.indexOf("dd");
  var yearIndex=formatItems.indexOf("yyyy");
  var month=parseInt(dateItems[monthIndex]);
  month-=1;
  var formatedDate = new Date(parseInt(dateItems[yearIndex]),month,parseInt(dateItems[dayIndex]));
  return formatedDate;
}

stringToDate("17/9/2014","dd/MM/yyyy","/");
stringToDate("9/17/2014","mm/dd/yyyy","/")
stringToDate("9-17-2014","mm-dd-yyyy","-")

export default InputPanel;