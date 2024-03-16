import React from "react";
import '../styles/Home.css';
import { useNavigate } from "react-router-dom";
import '../styles/button_styles.css';
import { Button } from "@mui/material";
import { ComputerComponent } from "../components/ComputerComponent";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ProductPage(props: {product: ComputerComponent}){
    const navigate = useNavigate(); 
    const product = props.product;
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2>{product.productName}</h2>
            <h4>ID: {product.id}</h4>
            <h4>Manufacturer: {product.manufacturer}</h4>
            <h4>Category: {product.category}</h4>
            <h4>Price: {product.price}$</h4>
            <h4>Release Date: {product.releaseDate.getUTCDate() + 1 + "/" + (product.releaseDate.getMonth() + 1)+ "/" + product.releaseDate.getFullYear()}</h4>
            <h4>Quantity: {product.quantity}</h4>
            <Button variant="contained" className="NavigationButton" onClick={() => navigate("/admin")}><ArrowBackIosIcon></ArrowBackIosIcon>Back</Button>
        </div>
    );
};
 
export default ProductPage;