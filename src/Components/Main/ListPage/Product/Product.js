import React from 'react';
import './Product.css';
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
const Product = ({ prod , children }) => {
    const navigate = useNavigate();
    const redirectHandler = () => navigate(`/${prod.category}/${prod.id}`);

    return (
        <div key={prod.id} className='item-content'  >
            <div className='product-rate'>{prod.rating.rate} <FaStar /> </div>
            <div className='img-wrapper' onClick={redirectHandler}>
                <img className='product-img' src={prod.image} alt={prod.title} />
            </div>
            <div className='prodAndPrice'>
                <div className='product-title'>{prod.title}</div>
                <div className='product-price'>{prod.price} $</div>
            </div>
            <div className='btnAddProdItem'>
                {children}
            </div>
        </div>
    );
};

export default Product;