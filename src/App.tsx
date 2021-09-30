import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "store/actions/auth";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Search from "pages/Search";
import Cart from "pages/Cart";
import Login from "components/Login";
import Product from "components/Product";
import SearchModal from "components/Search";
import { RootState } from "store/store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser());
  }, []);
  const { isDark } = useSelector((state: RootState) => state.theme);
  return (
    <div className={`main_wrapper ${isDark ? "dark_theme" : "light_theme"}`}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          transition={Slide}
        />
        <Header />
        <Switch>
          <Route path="/search" exact component={Search} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
        <Login />
        <Product />
        <SearchModal />
      </Router>
    </div>
  );
}

export default App;
