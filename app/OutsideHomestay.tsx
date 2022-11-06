import HomestayFacilitiesCard from "./HomestayFacilitiesCard";

export default function OutsideHomestay({ data }: any) {
  return (
    <div className="bg-zinc-100 py-20">
      <div className="text-center">
        <h3 className="text-5xl font-extrabold">Facilities</h3>
        <p className="text-2xl text-zinc-600 mt-1">
          Facilities that you can use for free during your visit with us.
        </p>
      </div>
      <div className="mt-16 max-w-2xl mx-auto">
        <HomestayFacilitiesCard data={data} />
      </div>
    </div>
  );
}
