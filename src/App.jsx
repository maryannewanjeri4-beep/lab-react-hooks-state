import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './index.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => {
    setIsDarkMode((currentMode) => !currentMode)
  }

  const addToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product])
  }

  return (
    <main className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="shopping-container">
        <header className="app-header">
          <div>
            <p className="eyebrow">Fresh finds, simple shopping</p>
            <h1>🛒 Shopping App</h1>
          </div>

          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </header>

        <section className="filter-section" aria-label="Product filters">
          <label htmlFor="category-filter">Filter by Category:</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="all">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
          </select>
        </section>

        <div className="shopping-layout">
          <ProductList
            selectedCategory={selectedCategory}
            addToCart={addToCart}
          />
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </main>
  )
}

export default App
