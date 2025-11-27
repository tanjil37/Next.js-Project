"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const res = await signIn("credentials", { redirect: false, email, password });
    if (res.ok) router.push("/");
    else alert("Login failed");
  }

  return (
    <div className="container mx-auto py-16">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <button onClick={() => signIn("google")} className="btn btn-outline w-full mb-4">Continue with Google</button>

        <form onSubmit={onSubmit} className="space-y-3">
          <input type="email" placeholder="Email" className="input w-full" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="input w-full" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </div>
  );
}
