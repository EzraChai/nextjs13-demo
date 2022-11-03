import NavBar from "./Navbar";
import Image from "next/image";
import ArchitectureImage from "../public/architecture.jpg";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="max-w-7xl pt-20 mx-auto">
        <div className="text-7xl font-[800]">Hello World</div>
        <Image src={ArchitectureImage} alt="Architecture" placeholder="blur" />
      </main>
    </>
  );
}
