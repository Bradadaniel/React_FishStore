import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch detailed product information based on the id
        fetch(`http://localhost:8000/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const renderProductDetails = (product) => {
        const { action, price } = product;
    
        if (action > 0) {
            const newPrice = Math.ceil(price - (price * (action / 100)));
            return (
                <>
                    <div className="new-price">{newPrice} RSD</div>
                    <div className="old-price"><del>{price} RSD</del></div>
                    <span><div className="concession">{action}%</div></span>
                </>
            );
        } else {
            return <div className="new-price">{price} RSD</div>;
        }
    };


    return (
        <>
            <Navbar />
            <section className="content">
                <div className="left">
                    <img src={`.${product.img}`} alt={product.name} />
                </div>
                <div className="right">
                    <h2>{product.name}</h2>
                    <span>{product.categories}</span><br />
                    <strong className='price'>
                        {renderProductDetails(product)}
                    </strong>
                    <p>Leírás: {product.text}</p>
                    <div className="button">
                        <a href="/">Kosárba</a>
                    </div>
                    <div className="button">
                        <Link to="/home">Vissza</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ProductDetails;