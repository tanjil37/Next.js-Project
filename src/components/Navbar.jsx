"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <nav className="hidden lg:flex gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "font-bold text-primary" : "font-medium"}>
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button className="btn btn-ghost" onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {!session ? (
            <>
              <button onClick={() => signIn()} className="btn btn-outline btn-sm hidden sm:inline">Login</button>
              <Link href="/login" className="btn btn-primary btn-sm">Register</Link>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="flex items-center gap-2 btn btn-ghost">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  {session.user?.image ? <Image src={session.user.image} alt="avatar" width={32} height={32}/> : null}
                </div>
                <span>{session.user?.name || session.user?.email}</span>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/dashboard/profile">Profile</Link></li>
                <li><Link href="/dashboard/add-product">Add Product</Link></li>
                <li><Link href="/dashboard/manage-products">Manage Products</Link></li>
                <li><button onClick={() => signOut()}>Logout</button></li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile dropdown content */}
        {open && (
          <div className="lg:hidden absolute left-4 right-4 top-20 bg-white shadow p-4 rounded">
            <ul className="space-y-3">
              {navLinks.map(l => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}
              {!session ? (
                <>
                  <li><button onClick={() => signIn()}>Login</button></li>
                  <li><Link href="/login">Register</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/dashboard/add-product">Add Product</Link></li>
                  <li><Link href="/dashboard/manage-products">Manage Products</Link></li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
