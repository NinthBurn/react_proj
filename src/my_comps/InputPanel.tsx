import '.././styles/input_panel_styles.css';
import { ComputerComponent } from './ComputerComponent';
import React, {useState} from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { TextFieldTheme } from '../styles/InputElementsThemes';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled} from '@mui/material/styles';
import { SaveButton } from './Buttons';

interface InputPanelProps{
  AppData: [ComputerComponent[], any, any];
  labels: string[];
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
      <Box className="InputBoxPanel" sx={{width: "40%"}}>
        <Box sx={{borderColor: 'black', borderWidth: '59px'}}>
        <Stack sx={{width: "100%", height: "100%", alignSelf:"center", rowGap:"3px", justifyContent:"center"}}>
          {props.labels.map((value, key) => {
            const index = key;
            return (
              <StackItem >
                  <ThemeProvider theme={TextFieldTheme}><TextField className="InputEntryBox" color="textFieldWhite"
                  sx={{
                  input: { fontSize: "1vmax", fontFamily:'Franklin Gothic Medium', color: 'white' }}} size="small" label={value} 
                  variant="filled" value={text[index]} onChange={e => textChanged(text, e.target.value, index)}/>
                  </ThemeProvider>
              </StackItem>
          )})}

          <br/>
          <SaveButton AppData={props.AppData} InputData={text}/>
          </Stack>
        </Box></Box>
    );
}

export let textChanged: (oldText: string[], newText: string, index: number) => void;

/*
https://stackoverflow.com/questions/5619202/parsing-a-string-to-a-date-in-javascript
thanks Kaseem
*/

const StackItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'theme.palette.text.secondary',
  boxShadow: "none"
}));

export default InputPanel;