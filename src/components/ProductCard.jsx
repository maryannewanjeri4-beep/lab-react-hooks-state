import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <article
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <div>
        <span className={styles.category}>{product.category}</span>
        <h3>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.status}>
          Status: {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>

      <button
        type="button"
        data-testid={'product-' + product.id}
        onClick={() => addToCart(product)}
        className={styles.addButton}
      >
        Add to Cart
      </button>
    </article>
  )
}

export default ProductCard
