import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../Main/CustomButton/CustomButton";
import { setTotalPriceDiscount } from "../../reducers/cartReducer";
import "./DiscountModal.css";
export const DiscountModal = () => {
  const dispatch = useDispatch();
  let [isOpen = true, setIsOpen] = useState();
  function closeDiscount(num) {
    dispatch(setTotalPriceDiscount(num));
    setIsOpen(false);
  }
  let classWrapper = isOpen ? "discountWrapper" : "closeDicsountModal";

  return (
    <div className={classWrapper}>
      <h2>Вітаємо</h2>
      <p>Ваш заказ більше 1000% ви отримуєте скидку 10%!!!</p>
      <div className="btnPosition">
        <CustomButton clickHandler={() => closeDiscount(10)} title="agree" />
        <CustomButton isTrue={false} title="disagree" />
      </div>
    </div>
  );
};
