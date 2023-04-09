import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex h-24 min-w-full flex-row items-center bg-sky-300 p-2">
      {/* <Image src="/logo.png" alt="SynECG" width={250} height={250} /> */}
      <div className="">
        <img src="/logo.png" alt="SynECG" className="w-30 h-20 rounded-md" />
      </div>
      <div className="flex flex-1 flex-row items-center justify-center space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};
5;

export default Nav;
