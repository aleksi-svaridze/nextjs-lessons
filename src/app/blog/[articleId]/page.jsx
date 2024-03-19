import React from 'react'

export default function ArticleDetails({params}) {
  return (
    <div>
      <h1>Article {params.articleId}</h1>
    </div>
  )
}
