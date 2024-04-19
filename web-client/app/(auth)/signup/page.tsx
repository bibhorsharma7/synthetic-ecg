"use client";

import Link from "next/link";
import AuthForm from "../authform";
import { Button } from "@/components/ui/button";

export default function Signup() {
  function onSubmit(values: { email: string; password: string }): void {
    console.log("signing up...");
  }

  return (
    <div className="flex h-full flex-col items-center p-8">
      <h1 className="text-md">Login to your Account</h1>
      <AuthForm onSubmit={onSubmit}>
        <Link href="/login" className="text-blue-500 underline">
          Already have an account? SignIn
        </Link>
        <Button type="submit">Register</Button>
      </AuthForm>
    </div>
  );
}
