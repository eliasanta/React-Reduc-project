import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header_nav'>
            <Link to={"/"}>
                <div className='ui container center'>
                    <h1>Elia Shop</h1>
                </div>
            </Link>
        </div>
    )
}
export default Header;