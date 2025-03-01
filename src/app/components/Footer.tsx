// components/Footer.tsx
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Fitsnap Hakkında */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Fitsnap</h3>
            <p className="text-gray-400">Eat Healthy, Live Happy!</p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-white">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  F.A.Q
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya Bağlantıları */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="text-gray-400">
              <li>
                <Link
                  href="https://instagram.com/fitsnap"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/fitsnap"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/fitsnap"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://tiktok.com/fitsnap"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </Link>
              </li>
            </ul>
          </div>

          {/* Bülten Aboneliği */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated!</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for healthy tips, new recipes, and
              exclusive offers.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="mt-8 text-center text-gray-400">
          © 2025 Fitsnap. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
