type ReviewDetailProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ReviewDetail({ params }: ReviewDetailProps) {
  return (
    <div>
      <h1>
        Review Detail {params.productId} for {params.reviewId}
      </h1>
    </div>
  );
}
