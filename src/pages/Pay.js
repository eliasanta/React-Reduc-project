import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
const Pay = () => {
    //ho a disposizione allProducts, product e cart
    const cart = useSelector(state => state.cart);
    return (
        <div>
            <h1>Checkout</h1>
            <div>
                <h2>Total: ${calculateTotal(cart)}</h2>
            </div>
            <h1>Buy me a coffe, Thanks! <Icon name="coffee" style={{ color: 'brown', fontSize: '24px' }} /></h1>

        </div>
    );
};

const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Pay;