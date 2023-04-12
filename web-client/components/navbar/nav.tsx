import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex h-24 min-w-full flex-row items-center bg-sky-300 p-2">
      {/* <Image src="/logo.png" alt="SynECG" width={250} height={250} /> */}
      <Link href="/" className="">
        <img src="/logo.png" alt="SynECG" className="w-30 h-20 rounded-md" />
      </Link>
      <div className="flex flex-1 flex-row items-center space-x-8 pl-20">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/signal">Signal</Link>
      </div>
    </div>
  );
};
5;

export default Nav;
