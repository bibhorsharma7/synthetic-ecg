"use client";

import Link from "next/link";
import AuthForm from "../authform";
import { Button } from "@/components/ui/button";

export default function Login() {
  function onSubmit(values: { email: string; password: string }): void {
    console.log("Logging in...");
  }

  return (
    <div className="flex h-full flex-col items-center p-8">
      <h1 className="text-md">Login to your Account</h1>
      <AuthForm onSubmit={onSubmit}>
        <Link href="/signup" className="text-blue-500 underline">
          Create an account
        </Link>
        <Button type="submit">Login</Button>
      </AuthForm>
    </div>
  );
}
