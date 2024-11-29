import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './features/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-thumbnail" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>
      <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
      <div className="cart-item-total">
        <p>Total: ${item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
