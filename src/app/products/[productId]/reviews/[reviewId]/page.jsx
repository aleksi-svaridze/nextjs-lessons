import React from 'react'

export default function ProductReview({params}) {
  return (
    <div>
      <h1>Product {params.productId}</h1>
      <p>review N{params.reviewId}</p>
    </div>
  )
}
