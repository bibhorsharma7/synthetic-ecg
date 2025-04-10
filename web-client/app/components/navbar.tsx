import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex h-24 flex-row items-center space-x-8 bg-sky-300 p-2">
      <Link href="/">
        <Image
          src="/images/logo.png"
          height={1}
          width={100}
          alt="SynECG"
          className="rounded-md"
        />
      </Link>
      <h1 className="text-xl">Synthetic ECG Generator</h1>
    </div>
  );
}
