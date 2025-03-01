import React from "react";
import Link from "next/link";
import GetStartedModal from "./GetStartedModal";

// components/Header.tsx
interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setShowGetStarted: (value: boolean) => void;
  setShowSignUpForm: (value: boolean) => void;
  setActiveLogin: (value: boolean) => void;
  activeLogin: boolean;
  closeLogin: () => void;
  handleOverlayClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  showSignUpForm: boolean; // showSignUpForm prop'unu ekleyin
  showGetStarted: boolean;
}

export default function Header({
  isMobileMenuOpen,
  toggleMobileMenu,
  setShowGetStarted,
  setShowSignUpForm,
  setActiveLogin,
  // activeLogin,
  // closeLogin,
  // handleOverlayClick,
  showGetStarted,
}: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <h1 className="text-2xl font-bold text-green-600">Fitsnap</h1>
        </Link>

        {/* Nav Link'leri */}
        <nav
          className={`md:flex space-x-6 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="#recipes"
            className="text-gray-700 hover:text-green-500"
            aria-label="Go to popular recipes"
          >
            Popular Recipes
          </Link>
          <Link
            href="#blog"
            className="text-gray-700 hover:text-green-500"
            aria-label="Go to blog"
          >
            Blog
          </Link>
          <Link
            href="#faq"
            className="text-gray-700 hover:text-green-500"
            aria-label="Go to FAQ"
          >
            F.A.Q
          </Link>

          {/* Get Started Butonu */}
          <button
            className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition shadow-md hover:shadow-lg"
            onClick={() => setShowGetStarted(true)}
            aria-label="Get started"
          >
            Get Started
          </button>

          {/* Login Butonu */}
          <button
            className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition shadow-md hover:shadow-lg"
            onClick={() => setActiveLogin(true)}
            aria-label="Login"
          >
            Login
          </button>
        </nav>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>

        {/* GetStartedModal */}
        {showGetStarted && (
          <GetStartedModal
            onClose={() => setShowGetStarted(false)}
            onSignUp={() => {
              setShowSignUpForm(true);
              setShowGetStarted(false);
            }}
          />
        )}
      </div>
    </header>
  );
}
