import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProducts } from '../../actions/products';
import { setAddMoreProducts } from '../../reducers/cartReducer';
import {  setProducts, setSingleProduct } from '../../reducers/productsReducer';
import CustomButton from '../CustomButton/CustomButton';
import "./SingleProductPage.css"

const SingleProductPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [currentProd, setCurrentProd] = useState();
    // sp - single product
    useEffect(()=>{
        getSingleProducts(id)
        .then(json=>{
            dispatch(setSingleProduct(json))
        })
        setCurrentProd()
    },[])

    const currentProduct = useSelector(state=> state.products.singleProduct)
    return (
        <div className='singleProductWrapper'>
            <div className='headSP'>{currentProduct.title}</div>
            <div className='foroSP'>
                <img className='fotoSP-img' src={`${currentProduct.image}`} alt={currentProduct.title} />
            </div>
            <div className='price-wrapper'>
            <div className='descSP'>{currentProduct.title} - {currentProduct.description}</div>
            <div className='priceSP'>
                <div>{currentProduct.price}<span>$</span></div>
                <CustomButton  clickHandler={() =>dispatch(setAddMoreProducts(currentProduct.id , currentProduct.price)) } />
            </div> 

            </div>
            
            
        </div>
    );
};

export default SingleProductPage;