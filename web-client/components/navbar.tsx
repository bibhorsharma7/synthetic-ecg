"use client";

import Link from "next/link";
import Image from "next/image";
import { UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  return (
    <div className="flex h-24 w-full flex-row justify-between space-x-4 bg-sky-300 p-2">
      <div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            height={1}
            width={100}
            alt="SynECG"
            className="rounded-md"
          />
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <h1 className="">SynECG App</h1>
      </div>
      <div className="flex flex-row items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserRound />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/login">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/signup">SignUp</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
