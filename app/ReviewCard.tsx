export default function ({ review }: any) {
  return (
    <div className="group bg-white backdrop-blur-md p-10 transition rounded-lg hover:bg-red-100">
      <div className="card-header flex justify-between">
        <h3 className="font-extrabold text-2xl text-primary">
          {review.customerName}
        </h3>
      </div>

      <div className="card-body mt-1 pt-1">
        <p className="text-xl text-zinc-600">{review.review}</p>
      </div>
    </div>
  );
}
