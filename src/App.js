import './App.css';
import './component_styles.css';
import './input_panel_styles.css';
function App() {
  let computer_components = [
    {manufacturer: "Nvidia", productName: "RTX 4090", price: 1599.99, releaseDate: new Date("2022/10/30"), quantity: 5},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
    {manufacturer: "AMD", productName: "Ryzen 5 7600X", price: 399.99, releaseDate: new Date("2023/6/14"), quantity: 1},
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

  let input_labels = ["Manufacturer", "Name", "Price", "Release Date", "Quantity"]
  return (
    <div className="App">
      <div className="PanelTitle">Computer Store Administrator Panel</div>
      
      <div className="PagePanel">
        
       <div className="ComponentList"> 
          {computer_components.map((pc_part, key) => {
              return <ComputerComponent key={key} manufacturer={pc_part.manufacturer} 
                productName={pc_part.productName} price={pc_part.price} 
                releaseDate={pc_part.releaseDate} quantity={pc_part.quantity}/>
          })}
        </div>

        <div className="InputBoxPanel">
          {input_labels.map((value, key) => {
            return <InputEntryBox key={key} InputLabel={value}/>;
          })}

          <br/>
          <button className="InsertButton">INSERT</button>
        </div>
      </div>
        
    </div>
  );
}

const InputEntryBox = (props) => {
  return <div className="InputEntryBox">
    {props.InputLabel}<input className="InputBox"/>
  </div>
}

const ComputerComponent = (props) => {
  return (
          <div className="ComputerPart">
            <div className="PartLabel">{props.manufacturer}</div>
            <div className="PartLabel">{props.productName}</div>
            <div className="PartLabel">{props.price}</div>
            <div className="PartLabel">{props.releaseDate.getUTCDate() + 1 + "/" + (props.releaseDate.getMonth() + 1)+ "/" + props.releaseDate.getFullYear()}</div>
            <button className="EditButton">EDIT</button>
            <button className="DeleteButton">DELETE</button>
          </div>
   
  )
}

export default App;
