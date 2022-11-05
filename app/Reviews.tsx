import ReviewCard from "./ReviewCard";

function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}

const Review = asyncComponent(async ({ data }: any) => {
  return (
    <div className="pb-20 mt-[-2px]">
      <div className="">
        <h3 className="text-5xl font-extrabold">Reviews</h3>
        <p className="text-2xl text-zinc-600 mt-1">
          Honest reviews from our previous guests through platform including
          Airbnb.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 py-10">
        {data?.data?.allReviews?.map((review: any) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
});

export default Review;
