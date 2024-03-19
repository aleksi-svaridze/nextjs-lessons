import { notFound } from "next/navigation"

export default function ArticleReview({params}) {

  if(parseInt(params.reviewId > 10)) {
    notFound();
  }

  return (
    <div>
      <h1>Article {params.articleId}</h1>
      <p>review N {params.reviewId}</p>
    </div>
  )
}
