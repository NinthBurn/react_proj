import './table_styles.css';
import './table_button_styles.css';
import ComputerComponentElement, {ComputerComponent} from './ComputerComponent';
import {useState} from 'react';
import React from 'react';

interface TableProps{
    AppData: [ComputerComponent[], any];
    headers: string[];
}

function Table(props: TableProps) {   
    const onDataChange = props.AppData[1];
    const data_rows = props.AppData[0];
    
    const deleteClicked = (data: ComputerComponent[], identifier: number) => {
        console.log("delete clicked " + identifier);
        let x = data.filter((part) => {
            return part.id === identifier ? false : true;
        });
        onDataChange(x);
    }

    const editClicked = (data: ComputerComponent[], identifier: number) => {
        console.log("edit clicked " + identifier);
    }

    return (
        <div className="TablePanel">
          <table className="PartTable">
            <thead className="TableHeader">
                {CreateTableHeader(props.headers)}
            </thead>
            <tbody>
              {data_rows.map((pc_part, key) => {
                  return (
                    <tr key={pc_part.id}>
                        <ComputerComponentElement pc_part={pc_part}/>
                        <td className="ComputerPart"><button onClick={() => editClicked(data_rows, pc_part.id)} className="EditButton">EDIT</button></td>
                        <td className="ComputerPart"><button onClick={() => deleteClicked(data_rows, pc_part.id)} className="DeleteButton">DELETE</button></td>
                    </tr>
                    );})}
            </tbody>
          </table>
        </div>
    );
}


const CreateTableHeader = (headers: string[]) => {
    return (
        <tr>
            {headers.map((column_name: string, key: number) => {
                  return (
                    <th key={key}> 
                        {column_name}
                    </th>
                    )
              })}
        </tr>
    );
}

export default Table;