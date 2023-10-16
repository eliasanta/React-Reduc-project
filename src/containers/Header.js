import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import { Label, Icon } from 'semantic-ui-react';

const Header = () => {
    const cart = useSelector(state => state.cart)
    const totalQuantity = cart.reduce((accumulator, product) => {//inizializzo accumulator a zero e product rappresenta ogni oggetto del mio array
        return accumulator + product.quantity;
    }, 0);
    return (
        <div className='header_nav'>
            <Link to={"/"}>
                <div className='ui container center'>
                    <h1>Elia Shop</h1>
                </div>
            </Link>
            <Link to={"/cart"}>
                <div style={{ position: 'absolute', bottom: '10px', right: '30px' }}>
                    <Icon name='cart' size='large' color='teal' />
                    <Label color='teal'>
                        {totalQuantity}
                    </Label>
                </div>
            </Link>
        </div>
    )
}
export default Header;