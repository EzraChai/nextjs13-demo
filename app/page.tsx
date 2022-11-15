import NavBar from "./Navbar";
import Image from "next/image";
import BeachImage from "../public/beach.jpg";
import Reviews from "./Reviews";
import { request } from "./lib/graphql-client";
import Location from "./Location";
import Mission from "./Mission";
import Book from "./Booking";
import { PrimaryBookNowButton } from "./BookNowButton";
import OutsideHomestay from "./OutsideHomestay";
import ContactMe from "./ContactMe";

async function getData() {
  const GetAllData = await request(/* GraphQL */ `
    query GetAllData {
      allReviews {
        id
        customerName
        review
      }
      allFacilities {
        id
        titleFacility
        image {
          url
          height
          width
          blurhash
        }
      }
    }
  `);
  return GetAllData.json();
}

export default async function Home() {
  const { data } = await getData();
  return (
    <>
      <NavBar />
      <main className="max-w-7xl pt-32 mx-auto">
        <div className="text-center">
          <h1 className="pt-32 text-7xl font-[800]">C&S Homestay.</h1>
          <p className="text-2xl text-zinc-600 mt-4 mb-10">
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

        <OutsideHomestay data={data?.allFacilities} />

        <Location />
        <div className="mt-20">
          <Reviews data={data?.allReviews} />
        </div>
        <div id="book-now" className="pt-10">
          <Book />
        </div>
      </main>
      <ContactMe />
    </>
  );
}
