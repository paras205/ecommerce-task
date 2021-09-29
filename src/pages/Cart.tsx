import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { CartItem as ItemProps } from "store/types";
import CartItem from "components/CartItem";
import NoData from "components/NoData";

const Cart = () => {
  const { cartItems, deliveryCharge, subTotal, total } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className="content cart_page">
      <div className="container">
        {cartItems?.length > 0 ? (
          <>
            <div className="cart_left">
              <table className="cart_table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item: ItemProps, idx: number) => {
                    return <CartItem key={idx} {...item} />;
                  })}
                </tbody>
              </table>
            </div>
            <div className="cart_right">
              <div className="cart_right_wrapper">
                <ul>
                  <li>
                    <p>
                      Subtotal: <span>{subTotal}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      delivery charge: <span>{deliveryCharge}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Total: <span>{total}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Cart;
