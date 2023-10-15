import React from 'react';
import { useSelector } from "react-redux"
import 'semantic-ui-css/semantic.min.css'
import { Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProductComponent = () => {

    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map((products, index) => {
        const { title, price, category, image, id } = products;
        return (
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Link to={`/product/${id}`} >
                    <Card style={{ padding: "20px", margin: "", height: '85%' }} key={index}>
                        <div className="custom-image-container">
                            <Image src={image} alt={title} className="custom-image" />
                        </div>
                        <Card.Content>
                            <Card.Header>{title}</Card.Header>
                            <Card.Meta>$ {price}</Card.Meta>
                            <Card.Description>{category}</Card.Description>
                        </Card.Content>
                    </Card>
                </Link>
            </Grid.Column>
        )

    })
    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent;