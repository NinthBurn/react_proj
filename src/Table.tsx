import './styles/table_styles.css';
import { DeleteButton, EditButton } from './my_comps/Buttons';
import ComputerComponentElement, {ComputerComponent} from './my_comps/ComputerComponent';
import React from 'react';

interface TableProps{
    AppData: [ComputerComponent[], any];
    headers: string[];
}

function Table(props: TableProps) {   
    const data_rows = props.AppData[0];
    
    return (
        <div className="TablePanel">
          <table className="PartTable">
            <thead className="TableHeader">
                {CreateTableHeader(props.headers)}
            </thead>
            <tbody>
              {data_rows.map((pc_part, key) => {
                  return (
                    <tr className="TableRow" onClick={() => console.log(pc_part.id)} key={pc_part.id}>
                        <ComputerComponentElement pc_part={pc_part}/>
                        <td className="ComputerPart"><EditButton AppData={props.AppData} element_id={pc_part.id}></EditButton></td>
                        <td className="ComputerPart"><DeleteButton AppData={props.AppData} element_id={pc_part.id}></DeleteButton></td>
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