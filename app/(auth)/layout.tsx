"use client";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = useAuth();
  if (userId != null) redirect("/");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
