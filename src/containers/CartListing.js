import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Card, Image, Button } from 'semantic-ui-react';
import { removeFromCart, moreInCart, addInCart, lessInCart } from '../redux/actions/productActions';

import 'semantic-ui-css/semantic.min.css'

const CartListing = () => {

    const cart = useSelector(state => state.cart);
    const totalPrice = cart.reduce((accumulator, product) => {//inizializzo accumulator a zero e product rappresenta ogni oggetto del mio array
        return accumulator + product.price * product.quantity;
    }, 0);
    const dispatch = useDispatch();

    const handleAddToCart = (productId) => {
        dispatch(moreInCart(productId));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(lessInCart(productId));
    };

    const renderCart = cart.map((product, index) => {
        const { id, image, price, quantity, title } = product
        return (
            <Card key={id} className="full-width-card " style={{ maxWidth: "90%", padding: "20px", margin: "10px auto" }}>
                <div className="card-content" style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Image src={image} size="tiny" className="card-image" />
                    <div className="card-details">
                        <Card.Header>{title}</Card.Header>
                        <Card.Meta>Price: ${price}</Card.Meta>
                        <Card.Meta><strong>Quantity:</strong> {quantity}</Card.Meta>
                        <Button.Group>
                            <Button icon="minus" onClick={() => handleRemoveFromCart(id)} />
                            <Button.Or text={product.quantity} />
                            <Button icon="plus" onClick={() => handleAddToCart(id)} />
                        </Button.Group>
                    </div>
                </div>
            </Card >
        )
    })
    return (
        <div>
            <h2 style={{ marginTop: "20px" }}>Total {totalPrice.toFixed(2)} $</h2>
            <Card.Group itemsPerRow={1} style={{ margin: "3% 2%" }}>
                {renderCart}
            </Card.Group>
            <Button>PAY</Button>

        </div>
    )
};

export default CartListing;