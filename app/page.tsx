import NavBar from "./Navbar";
import Image from "next/image";
import BeachImage from "../public/beach.jpg";
import Reviews from "./Reviews";
import { request } from "./lib/graphql-client";
import Location from "./products/Location";
import Mission from "./Mission";
import Book from "./Booking";
import { PrimaryBookNowButton } from "./BookNowButton";

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
          <p className="pt-4 pb-14 text-xl text-zinc-700">
            Cozy & Sweet Homestay is there for you to stay during your vacation.
          </p>
          <PrimaryBookNowButton />
        </div>

        <Image
          src={BeachImage}
          quality={50}
          alt="Architecture"
          placeholder="blur"
        />

        <Mission />

        <Location />

        <div className="mt-20">
          <Reviews data={reviews} />
        </div>

        <div id="book-now" className="pt-10">
          <Book />
        </div>
      </main>
    </>
  );
}
