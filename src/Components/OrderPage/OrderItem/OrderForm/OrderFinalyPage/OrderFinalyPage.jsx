import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../../Main/CustomButton/CustomButton';
import { setClearReducer } from '../../../../reducers/cartReducer';
import './OrderFinalyPage.css'
const OrderFinalyPage = () => {
    const dispatch= useDispatch()
    const navigate = useNavigate();
    const redirectHandler = () => {
        navigate(`/`);
       dispatch(setClearReducer())
    }
    return (
        <div className='wrapperOrderFinalyPage'>
           <h1> Дякуюємо за покупку !</h1>
           <p>Наші працівники зв'яжуться з вами в найблищий час </p>
           <CustomButton clickHandler={()=>redirectHandler()} title='Ok'/>
        </div>
    );
};

export default OrderFinalyPage;