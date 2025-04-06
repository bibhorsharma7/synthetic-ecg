import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex h-24 w-full flex-row space-x-4 bg-sky-300 p-2">
      <Link href="/">
        <Image
          src="/images/logo.png"
          height={1}
          width={100}
          alt="SynECG"
          className="rounded-md"
        />
      </Link>
      <div className="flex w-full flex-1 items-center justify-center">
        <h1 className="">Synthetic ECG Generator</h1>
      </div>
    </div>
  );
}
