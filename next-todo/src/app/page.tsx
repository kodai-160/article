import Image from "next/image"
import Link from "next/link"
import Price from "./_components/Price";

export default function Home() {
  return (
    <>
      Hello world
      <Image src="/icon.png" alt="icon" width={100} height={100} />
      <Link href="/cart">Go to cart</Link>
      <Price />
    </>
  );
}