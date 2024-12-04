export default function ReviewDetails({
    params,
}: {
    params: { reviewId: string };
}) {

    return <h1>Details about  review for product  {params.reviewId}</h1>
}