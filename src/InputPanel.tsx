import './input_panel_styles.css';
import { ComputerComponent } from './ComputerComponent';
import React from 'react';

interface InputPanelProps{
  AppData: [ComputerComponent[], any];
  labels: string[];
}

interface InputEntryBoxProps{
  key: number;
  InputLabel: string;
}

function InputPanel(props: InputPanelProps) {
    return (
        <div className="InputBoxPanel">
          {props.labels.map((value, key) => {
            return <InputEntryBox key={key} InputLabel={value}/>;
          })}

          <br/>
          <button className="InsertButton">INSERT</button>
        </div>
    );
}


const InputEntryBox = (props: InputEntryBoxProps) => {
    return <div className="InputEntryBox">
      {props.InputLabel}<input className="InputBox"/>
    </div>
  }

export default InputPanel;