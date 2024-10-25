import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-indigo-600 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logotipo */}
        <h1 className="text-3xl font-extrabold tracking-tight">
          Carbon 3 Labs
        </h1>
        <nav>
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
    </header>
  );
}
