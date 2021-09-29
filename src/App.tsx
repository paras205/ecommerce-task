import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setUser } from "store/actions/auth";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Search from "pages/Search";
import Cart from "pages/Cart";
import Login from "components/Login";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser());
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search" exact component={Search} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
      <Login />
    </Router>
  );
}

export default App;
