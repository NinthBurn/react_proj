import { ComputerComponent } from "./components/ComputerComponent";

export const InputLabels = ["ID", "Manufacturer", "Name", "Category", "Price", "Release Date", "Quantity"];
export const ColumnHeaders = ["Manufacturer", "Product Name", "Category", "Price", "Release Date", "Quantity", "Actions"];

function InsertData(): ComputerComponent[] {
  const data: ComputerComponent[] = [
      {id: 1, manufacturer: "Nvidia", productName: "RTX 4090", category: "Graphics Card", price: 1599.99, releaseDate: new Date("2022/10/30"), quantity: 5},
      {id: 2, manufacturer: "AMD", productName: "Ryzen 5 7600X", category: "Processor", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
      {id: 3, manufacturer: "AMD", productName: "Ryzen 7 5800X3D", category: "Processor", price: 449.99, releaseDate: new Date("2022/4/22"), quantity: 3},
      {id: 4, manufacturer: "Intel", productName: "Arc A770 16GB", category: "Graphics Card", price: 329.99, releaseDate: new Date("2022/11/12"), quantity: 100},
      {id: 5, manufacturer: "AMD", productName: "RX 6700XT 12GB", category: "Graphics Card", price: 379.99, releaseDate: new Date("2021/11/18"), quantity: 21},
      {id: 6, manufacturer: "Intel", productName: "Core i7 14700K", category: "Processor", price: 449.99, releaseDate: new Date("2023/8/24"), quantity: 17},
      {id: 7, manufacturer: "AMD", productName: "Ryzen 5 5600X3D", category: "Processor", price: 299.99, releaseDate: new Date("2023/7/7"), quantity: 41},
      {id: 8, manufacturer: "Crucial", productName: "8GB DDR4 3200MHz CL22", category: "RAM", price: 119.99, releaseDate: new Date("2020/4/15"), quantity: 35},
      {id: 10, manufacturer: "G.Skill", productName: "White Trident Z5 RGB Series DDR5-8200 24GBx2", category: "RAM", price: 459.99, releaseDate: new Date("2023/6/28"), quantity: 14},
      {id: 11, manufacturer: "Nvidia", productName: "RTX 3060 12GB", category: "Graphics Card", price: 329.99, releaseDate: new Date("2020/02/25"), quantity: 118},
      {id: 12, manufacturer: "Nvidia", productName: "RTX 4070 Ti Super 16GB", category: "Graphics Card", price: 799.99, releaseDate: new Date("2024/01/24"), quantity: 55},
      {id: 13, manufacturer: "Gigabyte", productName: "B650M GAMING PLUS WIFI", category: "Motherboard", price: 199.99, releaseDate: new Date("2023/07/03"), quantity: 7},
      {id: 14, manufacturer: "ASRock", productName: "Z790 Taichi Intel Z790 LGA 1700 Extended ATX", category: "Motherboard", price: 229.99, releaseDate: new Date("2023/06/15"), quantity: 11},
      {id: 15, manufacturer: "AMD", productName: "RX 6950 XT 16GB", category: "Graphics Card", price: 649.99, releaseDate: new Date("2021/03/15"), quantity: 3},
      {id: 16, manufacturer: "MSI", productName: "B650M GAMING PLUS WIFI", category: "Motherboard", price: 219.99, releaseDate: new Date("2023/07/03"), quantity: 12},
      {id: 17, manufacturer: "G.Skill", productName: "White Trident Z5 RGB Series DDR5-8200 24GB", category: "RAM", price: 229.99, releaseDate: new Date("2023/6/28"), quantity: 2},

    ];

  let cachedData = localStorage.getItem("mydata_pcparts");

  if(cachedData !== null){
    let unpackedData = JSON.parse(cachedData);
    unpackedData = unpackedData?.map((part: ComputerComponent) => {
      part.releaseDate = new Date(part.releaseDate)
      return part;
    })
    return unpackedData;
  }else{
    localStorage.setItem("mydata_pcparts", JSON.stringify(data));
    return data;
  }
}

export default InsertData;