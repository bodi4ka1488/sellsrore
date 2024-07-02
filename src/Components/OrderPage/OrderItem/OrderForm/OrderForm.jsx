import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderForm.css";
export const OrderForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [errorPhone, setErrorPhone] = useState("Це поле не може бути пустим");
  const [errorEmail, setErrorEmail] = useState("Це поле не може бути пустим");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );
    if (!emailRegex.test(e.target.value)) {
      setErrorEmail("Email is invalid");
    } else {
      setErrorEmail("");
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const phoneRegex = new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
    if (!phoneRegex.test(e.target.value)) {
      setErrorPhone("Phone is invalid");
    } else {
      setErrorPhone("");
    }
  };
  const blurHandle = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      default:
        break;
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/Order/sending`);
  };

  return (
    <form className="orderForm" onSubmit={(e) => SubmitHandler(e)}>
      <h1>Оформлення заказу</h1>
      <input
        className="formInput"
        name="firtsName"
        type="text"
        placeholder="Ivan"
        required
      />
      <input
        className="formInput"
        name="lastName"
        type="text"
        placeholder="Ivanov"
        required
      />
      {phoneDirty && errorPhone && <div className="error">{errorPhone}</div>}
      <input
        value={phone}
        className="formInput"
        onChange={(e) => phoneHandler(e)}
        onBlur={(e) => blurHandle(e)}
        name="phone"
        type="tel"
        placeholder="+380"
        required
      />
      {emailDirty && errorEmail && <div className="error">{errorEmail}</div>}
      <input
        value={email}
        className="formInput"
        onChange={(e) => emailHandler(e)}
        onBlur={(e) => blurHandle(e)}
        name="email"
        type="text"
        placeholder="email"
        required
      />

      <button className="orderBtn" type="submit">
        Оформить
      </button>
    </form>
  );
};
