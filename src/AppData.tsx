import { ComputerComponent } from "./ComputerComponent";

export const InputLabels = ["ID", "Manufacturer", "Name", "Price", "Release Date", "Quantity"];
export const ColumnHeaders = ["Manufacturer", "Product Name", "Price", "Release Date", "Quantity", "", ""];

function InsertData() {
  const data: ComputerComponent[] = [
      {id: 1, manufacturer: "Nvidia", productName: "RTX 4090", price: 1599.99, releaseDate: new Date("2022/10/30"), quantity: 5},
      {id: 2, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 3, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 4, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 5, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 6, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 7, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 8, manufacturer: "AMD", productName: "Ryzfasfasfafassaffasfasgfasdgadsgdasgasdgzsdagsadgdgdsgtsagdsaen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 9, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 10, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 11, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 12, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 13, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 14, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 15, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 16, manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 17, manufacturer: "Intel", productName: "Core i7 14700K", price: 449.99, releaseDate: new Date("2023/8/24"), quantity: 17}
    ];
  return data;
}

export default InsertData;