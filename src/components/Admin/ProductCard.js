import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard() {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('http://localhost:8000/products')
            .then((response) => {
                return response.json();
            }).then((myjson) => {
                setData(myjson);
            })
    }

    useEffect(() => {
        getData();
    }, []);


    const renderPrice = (price, action) => {
        if (action > 0) {
            const newPrice = Math.ceil(price - (price * (action / 100)));
            return (
                <>
                    <div className="new-price">{newPrice} RSD</div>
                    <div className="old-price"><del>{price} RSD</del></div>
                    <div className="concession">{action}%</div>
                </>
            );
        } else {
            return <div className="new-price">{price} RSD</div>;
        }
    };

    return (
        <>
            {data && data.length > 0 ? (data.map((val) => (
                <div className="card" data-aos='fade-up' key={val.id}>
                    <div className="card-img">
                        <img src={val.img} alt={val.name} />
                    </div>
                    <div className="slogan">Big<span>White</span></div>
                    <div className="line"></div>
                    <div className="product-title">{val.name}</div>
                    <div className="product-price">
                        {renderPrice(val.price, val.action)}
                    </div>
                    <div className="button">
                        <Link to={`/product/${val.id}`}>Megnézem</Link>
                    </div>
                </div>
                ))
            ): (
                <div>Nincs elérhető adat.</div>
            )}
        </>
    );
}

export default ProductCard;