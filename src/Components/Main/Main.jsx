import React from "react";
import { useSelector } from "react-redux";
import ListPage from "./ListPage/ListPage";
import classes from "./Main.module.css";

const Main = () => {
  const isFetching = useSelector((state) => !!state.products.isFetching);

  return (
    <div className={classes.main}>
      {!isFetching ? (
        <div>
          <ListPage />
        </div>
      ) : (
        <div className={classes.fetching}></div>
      )}
    </div>
  );
};

export default Main;
