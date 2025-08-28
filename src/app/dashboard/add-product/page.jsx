"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import React from "react";

const page = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
  }

  return <div>add products</div>;
};

export default page;
