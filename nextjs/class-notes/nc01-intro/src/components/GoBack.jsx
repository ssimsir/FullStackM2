"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GoBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className=" text-gray-800 hover:text-gray-100 hover:bg-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded shadow float-right mt-4"
    >
      GoBack
    </button>
  );
};

export default GoBack;
