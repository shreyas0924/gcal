"use client"
import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default function Home() {
  const { userId } = useAuth();
  if (userId != null) redirect("/events");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  );
}
