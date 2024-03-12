import React from 'react';

export interface ComputerComponent{
    id: number;
    manufacturer: string;
    productName: string;
    category: string;
    price: number;
    releaseDate: Date; 
    quantity: number;
}

interface Props{
    pc_part: ComputerComponent;
}

export function ComputerComponentElement(props: Props) {
    return(
        Object.entries(props.pc_part).map((column_data, key) => {
            if(column_data[0] === "manufacturer"){
                return (
                    <td style={{width: '10%'}} key={key} className="ComputerPart">
                        {column_data[1].toString()}
                    </td>)
            }

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

            else if(column_data[0] === "id"){
                return;
            }

            else return (
                <td key={key} className="ComputerPart">
                    {column_data[1].toString()}
                </td>)
        }));
}

export default ComputerComponentElement;