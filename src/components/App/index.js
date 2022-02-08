import "./App.css";
import Layout from "../Layout";
import Home from "../Home";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProductCategory from "../ProductCategory";
import ProductListing from "../ProductListing";
import { useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import ScrollToTop from "../ScrollToTop";
import Checkout from "../Checkout";

function App() {
  const location = useLocation();
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <div className="App">
      <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
        <Layout>
          <ScrollToTop>
            <AnimatePresence exitBeforeEnter={true} initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/products/:slug">
                  <ProductListing />
                </Route>
                <Route path="/checkout">
                  <Checkout />
                </Route>
                <Route path="/:product">
                  <ProductCategory />
                </Route>
              </Switch>
            </AnimatePresence>
          </ScrollToTop>
        </Layout>
      </CartContext.Provider>
    </div>
  );
}

export default App;
