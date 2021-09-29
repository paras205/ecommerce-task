import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { GoPlus } from "react-icons/go";
import { TiMinus } from "react-icons/ti";
import { increaseQuantity, decreaseQuantity } from "store/actions/cart";
import { CartItem as CartProps } from "store/types";

const CartItem: FC<CartProps> = ({
  name,
  imageUrl,
  quantity,
  price,
  id,
}: CartProps) => {
  const dispatch = useDispatch();
  const handleIncreaseQuantity = () => {
    const dataToSend = { name, imageUrl, quantity, price, id };
    dispatch(increaseQuantity(dataToSend));
  };
  const handleDecreaseQunatity = () => {
    const dataToSend = { name, imageUrl, quantity, price, id };
    dispatch(decreaseQuantity(dataToSend));
  };
  return (
    <tr>
      <td>{name}</td>
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>
        <div className="quantity">
          <span onClick={handleIncreaseQuantity}>
            <GoPlus />
          </span>
          <p className="count"> {quantity}</p>
          <span onClick={handleDecreaseQunatity}>
            <TiMinus />
          </span>
        </div>
      </td>
      <td>{price}</td>
    </tr>
  );
};

export default CartItem;
