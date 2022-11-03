import NavBar from "./Navbar";
import Image from "next/image";
import BeachImage from "../public/beach.jpg";
import Waves from "../public/waves.svg";
import Reviews from "./Reviews";
import { request } from "./lib/graphql-client";
import Location from "./products/Location";

async function getData() {
  const GetAllReviews = await request(/* GraphQL */ `
    query GetAllReviews {
      allReviews {
        id
        customerName
        review
      }
    }
  `);
  return GetAllReviews.json();
}

export default async function Home() {
  const reviews = await getData();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="max-w-7xl pt-32 mx-auto">
        <div className="text-center">
          <h1 className="pt-32 text-7xl font-[800]">C&S Homestay.</h1>
          <p className="pt-4 pb-14 text-xl font-[400] text-zinc-700">
            Cozy & Sweet Homestay is there for you to stay during your vacation.
          </p>
          <button className="py-4 mb-32 px-6 bg-zinc-800 text-white font-bold text-xl">
            Book Now
          </button>
        </div>

        <Image
          src={BeachImage}
          quality={50}
          alt="Architecture"
          placeholder="blur"
        />
        <Location />
      </main>
      <div className="mt-20">
        <Reviews data={reviews} />
      </div>
    </>
  );
}
