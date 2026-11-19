import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <aside className="cart-section">
      <div className="cart-heading">
        <h2>Shopping Cart</h2>
        <span className="cart-count" aria-label={`${cartItems.length} items`}>
          {cartItems.length}
        </span>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Cart
