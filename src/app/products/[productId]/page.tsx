type ProductDetailProps = {
  params: {
    productId: string; // Assuming productId is a string, you can adjust the type accordingly
  };
};

export default function ProductDetail({ params }: ProductDetailProps) {
  return (
    <div>
      <h1>Product Detail{params.productId}</h1>
    </div>
  );
}
