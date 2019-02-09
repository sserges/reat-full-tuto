import React from "react";

const Product = props => (
    <div>
        <p>Name: {props.name}</p>
        <p>Price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
        <p>Description: {props.description}</p>
        <hr />
    </div>
);

export default Product;