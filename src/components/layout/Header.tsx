// Header Component
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 hover:cursor-pointer">
            <img src="/logo.svg" alt="logo" className="h-10 w-10" />
            <Link href="/" className="text-2xl font-bold text-darkblue">
              Talento Network
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Job
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About Us
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="items-center space-x-4 hidden md:flex">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-gray-700 hover:bg-transparent"
              >
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-gray-200">
          <nav className="py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              Job
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              About Us
            </Link>
            <div className="flex space-x-2 px-4 pt-2">
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Log in
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
