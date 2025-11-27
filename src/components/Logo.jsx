// components/Logo.jsx
"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/MainLogo.png" 
        alt="Learnify Logo"
        width={70}
        height={50}
        priority
      />

      
      <h1 className="text-3xl font-bold">Learnify</h1>
    </div>
  );
}
