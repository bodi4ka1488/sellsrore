import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/About_us/AboutUs";
import NotFoundPage from "./Components/Pages/notFoundPage";
import React, { useEffect, useState } from "react";
import Modal from "./Components/MyOffice/modal/Modal";
import MyOffice from "./Components/MyOffice/MyOffice";
import Main from "./Components/Main/Main";
import SingleProductPage from "./Components/Main/SingleProductPage/SingleProductPage";
import ListPage from "./Components/Main/ListPage/ListPage";
import Cart from "./Components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./Components/reducers/productsReducer";
import { OrderPage } from "./Components/OrderPage/OrderPage";
import OrderFinalyPage from "./Components/OrderPage/OrderItem/OrderForm/OrderFinalyPage/OrderFinalyPage";
import { getProducts } from "./Components/actions/products";
// import FooterDescription from "./Components/FooterDescription/FooterDescription";
// import AboutUsSocial from "./Components/About_us/aboutUsSocial/AboutUsSocial";
function App() {
  const dispatch = useDispatch();

  const islogin = useSelector((state) => state.authData.islogin);
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    getProducts().then((json) => {
      dispatch(setProducts(json));
    });
  }, [dispatch]);
  return (
    <div className="App">
      <div className="wrapper">
        <Modal active={modalActive} setActive={setModalActive}></Modal>
        <header className="App-header">
          <Link className="Link" to="/">
            Main
          </Link>
          {!islogin && (
            <div>
              <button
                className="button-regist"
                onClick={() => {
                  setModalActive(!modalActive);
                }}
              >
                Зарегестрироватся
              </button>
            </div>
          )}

          {islogin && (
            <>
              <Link className="Link" to="/Cart">
                Cart
              </Link>
              <Link className="Link" to="/MyOffice">
                MyOffice
              </Link>
            </>
          )}

          <Link className="Link" to="/AboutUs">
            AboutUs
          </Link>
        </header>

        <main>
          <div className="Container">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route
                path="/:category/:id"
                element={<SingleProductPage />}
              ></Route>
              <Route path="/:category" element={<ListPage />}></Route>
              <Route path="/MyOffice" element={<MyOffice />}></Route>
              {islogin && <Route path="/Cart" element={<Cart />}></Route>}

              <Route path="/AboutUs" element={<AboutUs />}></Route>
              <Route path="/Order" element={<OrderPage />}></Route>
              <Route
                path="/Order/sending"
                element={<OrderFinalyPage />}
              ></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
