import React from "react";
import { useSelector } from "react-redux";
import { OrderForm } from "./OrderItem/OrderForm/OrderForm";
import { OrderItem } from "./OrderItem/OrderItem";
import "./OrderPage.css";

export const OrderPage = () => {
  const arrOfId = useSelector((state) => state.cart.arrOfId);
  const products = useSelector((state) => state.products.items);
  const currentCard = products.filter((item) => arrOfId.includes(item.id));
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className="orderPage-wrapper">
      {arrOfId.length == 0 ? (
        <div className="wrapperItem">Ваша корзина пуста</div>
      ) : (
        <>
          <div className="containerOrder">
            <OrderForm />
            <div>
              <div className="titleForm">
                Ви замовили {arrOfId.length} товарів на суму {totalPrice.toFixed(2)} $
              </div>
              {currentCard.map((item) => (
                <OrderItem item={item} />
              ))}
              <div className="titleForm">
                Для замовлення заповніть форму і натисніть оформити
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
