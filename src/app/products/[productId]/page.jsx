

export const generateMetadata = ({params}) => {
  return {
    title: `Product ${params.productId}`,
    description: `Product description ${params.productId}`
  }
}

export default function ProductDetails({params}) {
  return (
    <div>
      <h1>ProductDetails {params.productId}</h1>
    </div>
  )
}
