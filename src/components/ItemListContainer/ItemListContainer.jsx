import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './ItemListContainer.css';

const ItemListContainer = ({ productsData }) => {
    return (
        <div className="ItemListContainer">
            {productsData?.map ((products)=>{
                return (
                    <Card key={products.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ products.thumbnail } />
                        <Card.Body>
                            <Card.Title>{ products.title }</Card.Title>
                            <Link to={`/item/${products.id}`}>
                                <Button variant="primary">View product</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default ItemListContainer;