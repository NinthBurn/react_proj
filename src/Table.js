import './table_styles.css';
import './table_button_styles.css';

function Table(props) {
    return (
        <div className="TablePanel">
          <table className="PartTable">
            <thead className="TableHeader">
                <CreateTableHeader headers={props.headers}/>
            </thead>
            <tbody>
              {props.data_rows.map((pc_part, key) => {
                  return <ComputerComponent key={key} pc_part={pc_part}/>
              })}
            </tbody>
          </table>
        </div>
    );
}

const CreateTableHeader = (props) => {
    return (
        <tr>
            {props.headers.map((column_name, key) => {
                  return (
                    <th  key={key} > 
                        {column_name}
                    </th>)
              })}
        </tr>
    );
}

const ComputerComponent = (props) => {
    return (
            <tr key={props.key}>
                {Object.entries(props.pc_part).map((column_data, key) => {
                    if(column_data[0] === "price"){
                        return (
                            <td key={key} className="ComputerPart">
                                {column_data[1].toString() + '$'}
                            </td>)
                    }

                    else if(column_data[0] === "releaseDate"){
                        return (
                            <td key={key} className="ComputerPart">
                                {column_data[1].getUTCDate() + 1 + "/" + (column_data[1].getMonth() + 1)+ "/" + column_data[1].getFullYear()}
                            </td>)
                    }

                    else return (
                        <td key={key} className="ComputerPart">
                            {column_data[1].toString()}
                        </td>)
                })}
              
              <td className="ComputerPart"><button className="EditButton">EDIT</button></td>
              <td className="ComputerPart"><button className="DeleteButton">DELETE</button></td>
            </tr>
    )
  }

export default Table;