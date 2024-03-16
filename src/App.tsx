import './styles/App.css';
import InsertData from "./AppData.tsx";
import React from 'react';
import {useState, createContext, Context} from 'react';
import { ComputerComponent } from './components/ComputerComponent.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import AdminPanel from './pages/AdminPage.tsx';
import ProductPage from './pages/ProductPage.tsx';
export let DataContext: Context<{DataList: ComputerComponent[]; changeData: React.Dispatch<React.SetStateAction<ComputerComponent[]>>}>;

function App() {
  const [DataList, changeData] = useState(InsertData());
  DataContext = createContext<{DataList: ComputerComponent[]; changeData: React.Dispatch<React.SetStateAction<ComputerComponent[]>>}>({DataList: DataList, changeData});
  
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={
          <AdminPanel/>
        }/>
        <Route path="/about" element={
          <h1>some text</h1>
        }/>
         {DataList.map((part) => {
          return <Route 
          path={"/product-" + part.id}
          element={
            <ProductPage product={part}/>
          }/>
        })}
      </Routes>
  </Router>
  );
}

export default App;
