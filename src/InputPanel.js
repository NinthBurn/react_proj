import './input_panel_styles.css';

function InputPanel(props) {
    return (
        <div className="InputBoxPanel">
          {props.input_labels.map((value, key) => {
            return <InputEntryBox key={key} InputLabel={value}/>;
          })}

          <br/>
          <button className="InsertButton">INSERT</button>
        </div>
    );
}

const InputEntryBox = (props) => {
    return <div className="InputEntryBox">
      {props.InputLabel}<input className="InputBox"/>
    </div>
  }

export default InputPanel;