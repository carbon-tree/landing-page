"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-600 to-indigo-600 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Carbon 3 Labs
            </h1>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-gray-400">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-gray-400">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-gray-400">
                  Casos de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/"
                className="block hover:text-yellow-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="block hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="block hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </Link>
            </li>
            <li>
              <Link
                href="/success-stories"
                className="block hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos de Sucesso
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
