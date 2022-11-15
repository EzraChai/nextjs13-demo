import asyncComponent from "./lib/asyncComponent";
import ReviewCard from "./ReviewCard";

const Review = asyncComponent(async ({ data }: any) => {
  return (
    <div className="py-10 mt-[-2px] ">
      <div>
        <h3 className="text-5xl text-center font-extrabold">Reviews</h3>
        <p className="text-2xl text-center text-zinc-600 mt-1 mb-10">
          Honest reviews from our previous guests through platform including
          Airbnb.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 py-10">
        {data?.map((review: any) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
});

export default Review;
