import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Job Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="logo" className="h-10 w-10" />
              <span className="font-semibold tẽ">Talento Network</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering your career journey with smarter, fastehr, and more
              personalized job search tools.
            </p>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Partners
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                For Candidates
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                For Employers
              </Link>
            </nav>
          </div>

          {/* Job Categories Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Job Categories</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Telecommunications
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Hotels & Tourism
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Construction
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Education
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Financial Services
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter to stay updated with the latest job
              opportunities and career tips.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-600"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © Copyright Talento 2025. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
