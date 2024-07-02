import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategory } from "../../actions/products";
import {
  setCaregorySearchValue,
  setIsActive,
  setProductCategory,
} from "../../reducers/productsReducer";
import "./CategoryBar.css";

const CategoryBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.prodCategory);
  const isActive = useSelector((state) => state.products.isActive);
  useEffect(() => {
    getCategory().then((json) => {
      dispatch(setProductCategory(json));
    });
  });

  return (
    <div className="CategoryBarWrapper">
      {isActive ? (
        <div>
          <div
            className="category-btn"
            onClick={() => dispatch(setIsActive(!isActive))}
          >
            Category
          </div>
          <div className="listCategory">
            {categories.map((cat) => (
              <Link
                onClick={() => dispatch(setCaregorySearchValue(cat))}
                to={`/${cat}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="category-btn"
          onClick={() => dispatch(setIsActive(!isActive))}
        >
          Category
        </div>
      )}
    </div>
  );
};

export default CategoryBar;
