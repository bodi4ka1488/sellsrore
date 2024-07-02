import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../Main/CustomButton/CustomButton';
import Product from '../../Main/ListPage/Product/Product';
import { setAddMoreProducts, setRemoveItem } from '../../reducers/cartReducer';
import "./CartWithProducts.css"

const CartWithProducts = ({product}) => {
    const dispatch = useDispatch();
  const arrOfId = useSelector(state => state.cart.arrOfId);
    let arr =[];
   for (const i of arrOfId) {
        if (i === product.id) {
            arr.push(i)
        }
}
return (
        <div>
          
            <Product prod={product}>
                <CustomButton isTrue={false} title = "Delete" clickHandler={() =>dispatch(setRemoveItem(product.id , product.price)) } />
                <CustomButton  clickHandler={() =>dispatch(setAddMoreProducts(product.id , product.price)) } />
                <div className='amountOfProducts'>{arr.length}</div>
            </Product>
            
        </div>
    );
};

export default CartWithProducts;