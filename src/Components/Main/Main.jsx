import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import { products } from '../Data/Data';
import { setProducts } from "../reducers/productsReducer";
import ListPage from './ListPage/ListPage';
import classes from "./Main.module.css";

const Main = () => {
    const isFetching = useSelector(state=> !!state.products.isFetching)
    
    
 
    return (
        <div className={classes.main}>
            {
                !isFetching 
                ?
                <div>
                    <ListPage/>       
                </div>
                :
                <div className={classes.fetching}>

                </div>
            }
        </div>
    );
};

export default Main;