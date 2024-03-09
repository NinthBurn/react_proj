import './input_panel_styles.css';
import { ComputerComponent } from './ComputerComponent';
import React, {useState} from 'react';

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
  return <button onClick={() => deleteClicked(props.AppData[0], props.element_id)} className="DeleteButton">DELETE</button>;
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

function InputPanel(props: InputPanelProps) {
    const [text, textChange] = useState(["", "", "", "", "", "", ""]);
    textChanged = (oldText: string[], newText: string, index: number) => {
      //console.log(newText);
      //console.log(index);

      let t = oldText.map((x) => x);
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
          <button className="InsertButton">SAVE</button>
        </div>
    );
}

let textChanged: (oldText: string[], newText: string, index: number) => void;

export default InputPanel;