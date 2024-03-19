import React from 'react'

export default function ArticleReview({params}) {
  return (
    <div>
      <h1>Article {params.articleId}</h1>
      <p>review N {params.reviewId}</p>
    </div>
  )
}
