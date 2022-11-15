import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactMe() {
  return (
    <Link
      target={"_blank"}
      href={"https://wa.link/z1sa7g"}
      className="z-10 w-19 h-19 right-16 bottom-10 fixed rounded-full bg-green-500 hover:bg-green-400 transition-colors flex items-center justify-center"
    >
      <FaWhatsapp className="w-16 h-16 text-white" />
    </Link>
  );
}
