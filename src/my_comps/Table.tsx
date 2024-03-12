import '.././styles/table_styles.css';
import { DataContext, AlertBoxContext } from '../App';
import { DeleteButton, EditButton } from './Buttons';
import { displayAlert } from './Buttons';
import ComputerComponentElement from './ComputerComponent';
import React from 'react';

interface TableProps{
    headers: string[];
}

let sort_ascending: Boolean[] = [true, true, true, true, true, true];

function Table(props: TableProps) {   
    const {ComputerComponents, changeData} = React.useContext(DataContext);
    const {AlertBox, changeAlert} = React.useContext(AlertBoxContext);  

    const onColumnHeadClick = (index: number) => {
        if(index < 1 || index > 6)
            return 0;

        let newData = ComputerComponents.map((x) => {return x});
        newData = newData.sort((x, y) => {
            const x_value: any = Object.values(x)[index];
            const y_value: any = Object.values(y)[index];
            
            if(sort_ascending[index - 1])
                return x_value < y_value ? -1 : x_value > y_value ? 1 : 0;     
            else
                return x_value < y_value ? 1 : x_value > y_value ? -1 : 0;           

        });

        let sort_notification = "";
        if(sort_ascending[index - 1])
            sort_notification = "Sorted in ascending order by ";
        else
            sort_notification = "Sorted in descending order by ";

        sort_ascending[index - 1] = !sort_ascending[index - 1]
        
        sort_notification += props.headers[index - 1] + '.';
        displayAlert(changeAlert, sort_notification, "info")

        changeData(newData); 
    }

    return (
        <div className="TablePanel">
          <table className="PartTable">
            <thead className="TableHeader">
                <tr key={-1}>
                {props.headers.map((column_name: string, key: number) => {
                    if(key < props.headers.length - 2)
                        return (
                            <th className="TableHeaderColumn" onClick={() => {onColumnHeadClick(key + 1)}} key={key}> 
                                {column_name}
                            </th>
                            )
                    else return (
                        <th key={key}> 
                            {column_name}
                        </th>
                        )
                })}
                </tr>
            </thead>
            <tbody key={100}>
              {ComputerComponents.map((pc_part, key) => {
                  return (
                    <tr className="TableRow" onClick={() => console.log(pc_part.id)} key={key}>
                        <ComputerComponentElement pc_part={pc_part}/>
                        <td className="ComputerPart"><EditButton element_id={pc_part.id}></EditButton></td>
                        <td className="ComputerPart"><DeleteButton element_id={pc_part.id}></DeleteButton></td>
                    </tr>
                    );})}
            </tbody>
          </table>
        </div>
    );
}

export default Table;