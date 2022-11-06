"use client";

export function PrimaryBookNowButton() {
  return (
    <button
      onClick={() =>
        document
          .getElementById("book-now")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="py-4 mb-32 px-6 bg-primary text-white  rounded-md font-bold text-xl hover:bg-secondary transition "
    >
      Book Now
    </button>
  );
}

export function SecondaryBookNowButton() {
  return (
    <button
      onClick={() =>
        document
          .getElementById("book-now")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="bg-secondary hover:bg-primary transition rounded-md text-white py-2 px-4"
    >
      Book Now
    </button>
  );
}
