import Link from "next/link";
import { SecondaryBookNowButton } from "./BookNowButton";

export default function NavBar() {
  return (
    <nav className="fixed z-10 w-full h-20 backdrop-blur-md bg-white/20 shadow-md">
      <div className="flex justify-between items-baseline max-w-7xl mx-auto">
        <div className=" text-2xl font-[800]">Cozy & Sweet.</div>
        <div className="mt-4 text-lg font-semibold text-zinc-600 hover:text-black transition flex items-baseline gap-4">
          <div className="px-4 flex gap-4">
            <Link className="" href="/products">
              Products
            </Link>
          </div>
          <SecondaryBookNowButton />
        </div>
      </div>
    </nav>
  );
}
