import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { removeFromCart, moreInCart, addInCart, lessInCart, deleteFromCart } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'

const CartListing = () => {

    const cart = useSelector(state => state.cart);
    const totalPrice = cart.reduce((accumulator, product) => {//inizializzo accumulator a zero e product rappresenta ogni oggetto del mio array
        return accumulator + product.price * product.quantity;
    }, 0);
    const dispatch = useDispatch();

    const handleAddToCart = (productId) => {
        dispatch(moreInCart(productId));
    },
        handleLessToCart = (productId) => {
            dispatch(lessInCart(productId));
        };

    const handleRemoveFromCart = (productId) => {
        dispatch(deleteFromCart(productId));
    };

    const renderCart = cart.map((product, index) => {
        const { id, image, price, quantity, title } = product
        return (
            <Card key={id} className="full-width-card " style={{ maxWidth: "90%", padding: "20px", margin: "10px auto" }}>
                <div className="card-content card-cart" style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Link to={`/product/${id}`} >
                        <Image src={image} size="small" className="card-image" />
                    </Link>
                    <div className="card-details">
                        <Card.Header style={{ margin: "5px" }}>{title}</Card.Header>
                        <Card.Meta style={{ margin: "5px" }}>Price: ${price}</Card.Meta>
                        <Card.Meta style={{ margin: "5px" }}><strong>Quantity:</strong> {quantity}</Card.Meta>
                        <Button.Group>
                            <Button icon="minus" onClick={() => handleLessToCart(id)} />
                            <Button.Or text={product.quantity} />
                            <Button icon="plus" onClick={() => handleAddToCart(id)} />
                        </Button.Group>
                        <div style={{ marginTop: "10px" }}>
                            <Button color="red" onClick={() => handleRemoveFromCart(id)}>
                                <Icon name="trash" /> Delete
                            </Button>
                        </div>
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
            <Link to={`/pay`} >
                <Button>PAY</Button>
            </Link>

        </div>
    )
};

export default CartListing;