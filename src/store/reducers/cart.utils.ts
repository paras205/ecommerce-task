import { CartItem, Cart } from "../types";

export const removeItemFromCart = (
  cartItems: any,
  cartItemToRemove: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem: CartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem: CartItem) => cartItem.id !== cartItemToRemove.id
    );
  }

  return cartItems.map((cartItem: CartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const increaseQuantity = (cartItems: CartItem[], payload: CartItem) => {
  return cartItems.map((cartItem: any) =>
    cartItem.id === payload.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const calculateSubTotal = (items: CartItem[]) => {
  return items.reduce((acc: any, item: any) => {
    return item.discountAvailable
      ? (item.price - (item.discount / 100) * item.price) * item.quantity + acc
      : item.price * item.quantity + acc;
  }, 0);
};

export const calculateTotal = (items: CartItem[], deliveryCharge: number) => {
  return (
    items.reduce((acc: any, item: any) => {
      return item.discountAvailable
        ? (item.price - (item.discount / 100) * item.price) * item.quantity +
            acc
        : item.price * item.quantity + acc;
    }, 0) + deliveryCharge
  );
};
