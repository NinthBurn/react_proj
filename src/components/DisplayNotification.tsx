import React, {ReactElement} from 'react'
import Alert from '@mui/material/Alert';

let timeout: null | ReturnType<typeof setTimeout> = null;

export function displayNotification(changeNotification: React.Dispatch<React.SetStateAction<ReactElement>>, alertMessage:string, alertType: string){
    let alert = (<Alert className="AlertNotification" variant="filled" severity={alertType === "success" ? "success" : alertType === "error" ? "error" : alertType === "info" ? "info" : "warning"}>
      {alertMessage}
    </Alert>);
  
    if(timeout != null){
      changeNotification(<></>)
      clearTimeout(timeout);
  
      // this is stupid but I have to do it
      // there is probably a better way to do this
      setTimeout(() => { changeNotification(alert) }, 10);
  
      timeout = setTimeout(() => { changeNotification(<></>) }, 5000);
  
    }else{
      timeout = setTimeout(() => { changeNotification(<></>) }, 5000);
      changeNotification(alert);
    }

  return;
}
