export default function ({ review }: any) {
  return (
    <div className=" bg-white backdrop-blur-md p-10 transition">
      <div className="card-header flex justify-between border-b-2 ">
        <h3 className="font-[600] text-2xl text-primary pb-2">
          {review.customerName}
        </h3>
      </div>

      <div className="card-body mt-1 pt-1">
        <p className="text-xl text-zinc-600">{review.review}</p>
      </div>
    </div>
  );
}
