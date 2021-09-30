import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "store/actions/theme";
import { showProductForm, showSearchForm } from "store/actions/product";
import { showLoginForm } from "store/actions/auth";
import { GoPlus } from "react-icons/go";
import { BiCartAlt, BiUser, BiSearch } from "react-icons/bi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { Formik, Form } from "formik";
import Field from "./Field";
import { Link } from "react-router-dom";
import Button from "./Button";
import { RootState } from "store/store";
import { useHistory } from "react-router-dom";

interface SearchProps {
  searchTerm: string;
}

const Header: FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const setTheme = () => {
    dispatch(toogleTheme());
  };
  const handleProductForm = () => {
    dispatch(showProductForm());
  };
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const onSubmit = (values: SearchProps, { resetForm }: any) => {
    const { searchTerm } = values;
    history.push(`/search?name=${searchTerm}`);
    resetForm();
  };
  const handleLoginForm = () => {
    dispatch(showLoginForm());
  };
  const handleSearchForm = () => {
    dispatch(showSearchForm());
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header_logo">
              <Link to="/">Ecommerce</Link>
            </div>
            <div className="header-search">
              <Formik initialValues={{ searchTerm: "" }} onSubmit={onSubmit}>
                {() => (
                  <Form>
                    <Field
                      name="searchTerm"
                      control="input"
                      type="text"
                      placeholder="momo, Chowmein..."
                    />
                    <Button
                      type="submit"
                      placeholder="search"
                      loading={loading}
                      className="search_btn"
                    />
                  </Form>
                )}
              </Formik>
              <BiSearch onClick={handleSearchForm} />
            </div>
            <div className="header-right">
              <ul>
                <li className="add_product">
                  <Button
                    type="button"
                    placeholder="Add Product"
                    className="add_new"
                    onClick={handleProductForm}
                  />
                  <GoPlus onClick={handleProductForm} />
                </li>
                <li>
                  {authenticated ? (
                    <Link to="/cart" className="cart_icon">
                      <BiCartAlt />
                      {cartItems?.length > 0 && (
                        <span className="cart_badge">{cartItems.length}</span>
                      )}
                    </Link>
                  ) : (
                    <BiUser onClick={handleLoginForm} />
                  )}
                </li>
                {!isDark ? (
                  <li onClick={setTheme}>
                    <BsToggleOff />
                  </li>
                ) : (
                  <li onClick={setTheme}>
                    <BsToggleOn />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
