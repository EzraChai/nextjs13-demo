import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed w-full h-20 backdrop-blur-xl bg-white/80">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div className="py-6 text-2xl font-[800]">Cozy & Sweet.</div>
        <div className="py-6 text-lg font-semibold text-zinc-600 hover:text-black transition">
          <Link href="/products">Products</Link>
        </div>
      </div>
    </nav>
  );
}
