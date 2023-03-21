export default function Product(props) {
    console.log(props)
    return (
        <div>
        <h1>Product Detail</h1>
        <p>Product id = {props?.productId}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
  const { productId } = context.params
  console.log(productId)

  return {
    props: {
      productId,
    },
  }
}