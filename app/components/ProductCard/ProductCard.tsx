import React from 'react'
import AddToCart from '../AddToCart'

function ProductCard() {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500 hover:cursor-pointer">
      <AddToCart />
    </div>
  )
}

export default ProductCard
