import React from 'react';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import CartWithProducts from './CartWithProducts/CartWithProducts';
import {DiscountModal} from './DiscountModal/DiscountModal'

import { Link } from 'react-router-dom';
import { setCheckArrAndTotal } from '../reducers/cartReducer';

const ListOfCardComponent = () => {
  const dispatch = useDispatch();
  const arrOfId = useSelector(state => state.cart.arrOfId);
  const totalPrice = useSelector(state=> state.cart.totalPrice);
  const products = useSelector(state=> state.products.items);
  const currentCard = products.filter((item) => arrOfId.includes(item.id));
    const check = ()=>{
      dispatch(setCheckArrAndTotal())
    }
    check()
  return (
    <div className='CartWrapper'>
        {
          !totalPrice
          ?
          <div className='emptyCart'>
           <h2> Your cart is empty</h2>
           <p>But you can to correct it </p>
           <di>Buy items more than 1000$ and have discount</di>
            <img src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs=" alt="" />
            </div>
          :
          <div className='productWrapper'>
            {
              currentCard.map(product =>
                <CartWithProducts product={product}/>
              )
            }
          </div>
            
        }
          <div className='totalPrice'>
              Total price: {totalPrice.toFixed(2)}
               <Link className='orderBtn' to="/Order">Order</Link>
          </div>
              
        {
              totalPrice >= 1000 && <DiscountModal/>
          }
    </div>
  );
};

export default ListOfCardComponent;

