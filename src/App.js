import './App.css';
import InputPanel from "./InputPanel.js"
import Table from "./Table.js"


function App() {
  let computer_components = [
    {manufacturer: "Nvidia", productName: "RTX 4090", price: 1599.99, releaseDate: new Date("2022/10/30"), quantity: 5},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzfasfasfafassaffasfasgfasdgadsgdasgasdgzsdagsadgdgdsgtsagdsaen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "Intel", productName: "Core i7 14700K", price: 449.99, releaseDate: new Date("2023/8/24"), quantity: 17}
  ];

  let input_labels = ["Manufacturer", "Name", "Price", "Release Date", "Quantity"];
  let column_headers = ["Manufacturer", "Product Name", "Price", "Release Date", "Quantity", "", ""];
  return (
    <div className="App">
      <div className="PanelTitle">Computer Store Administrator Panel</div>
      
      <div className="PagePanel">
        <Table headers={column_headers} data_rows={computer_components}/>
        <InputPanel input_labels={input_labels}/>
      </div>
        
    </div>
  );
}

export default App;
