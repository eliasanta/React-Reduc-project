import React, { useEffect } from 'react';
import { useDispatch /* useSelector */ } from "react-redux"
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react';

const ProductListing = () => {
    //const products = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err));
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <Grid style={{ width: '80%', margin: "0 auto" }}>
            <Grid.Row>
                <ProductComponent />
            </Grid.Row>
        </Grid>
    )
};

export default ProductListing;