export default function ({ review }: any) {
  return (
    <div className=" bg-white backdrop-blur-md p-10 hover:scale-105 transition">
      <div className="card-header flex justify-between border-b-2 ">
        <h3 className="font-bold text-2xl text-zinc-800">
          {review.customerName}
        </h3>
      </div>

      <div className="card-body mt-1">
        <p className="text-lg text-zinc-600">{review.review}</p>
      </div>
    </div>
  );
}
