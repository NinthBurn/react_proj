import React from 'react';
import { ComputerComponent } from './ComputerComponent';

function ValidateData(entry: ComputerComponent){
    let result = "";
  
    if(entry.manufacturer.length === 0 || entry.category.length === 0 || entry.productName.length === 0)
      result += "Empty field was detected. Please insert data. ";
    if(!Number.isInteger(entry.id) || entry.id < 1)
      result += "ID must be a positive integer. ";
    if(!Number.isInteger(entry.quantity) || entry.quantity < 0) 
      result += "Quantity must be a positive integer. ";
    if(entry.releaseDate.toDateString() === "Invalid Date")
      result += "Invalid date. ";
    if(isNaN(entry.price) || entry.price <= 0)
      result += "Price must be a positive number. ";
    return result;
}

export function stringToDate(_date: string, _format:string ,_delimiter: string)
{
  var formatLowerCase=_format.toLowerCase();
  var formatItems=formatLowerCase.split(_delimiter);
  var dateItems=_date.split(_delimiter);
  var monthIndex=formatItems.indexOf("mm");
  var dayIndex=formatItems.indexOf("dd");
  var yearIndex=formatItems.indexOf("yyyy");
  var month=parseInt(dateItems[monthIndex]);
  month-=1;
  var formatedDate = new Date(parseInt(dateItems[yearIndex]),month,parseInt(dateItems[dayIndex]));
  return formatedDate;
}

export default ValidateData;