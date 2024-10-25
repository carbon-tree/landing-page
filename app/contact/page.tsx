import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold mb-10 text-gray-800 text-center">
        Entre em Contato
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulário de Contato */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Envie uma mensagem
          </h2>
          <form className="space-y-4"> {/* Adicionado espaço entre os elementos do formulário */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" // Adicionado foco
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" // Adicionado foco
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" // Adicionado foco
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Informações de Contato e Redes Sociais */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Informações de Contato
          </h2>
          <p className="text-xl mb-4 text-gray-600">
            Estamos ansiosos para ouvir de você! Entre em contato conosco
            através dos seguintes meios:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-600">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              contato@carbon3labs.com
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +55 (11) 9999-9999
            </li>
          </ul>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Siga-nos</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
