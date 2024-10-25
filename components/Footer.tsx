export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-white mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Links para Suporte
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-white mb-4">Redes Sociais</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-white mb-4">Contato</h3>
            <p className="mb-2">Email: contato@empresa.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 Carbon 3 Labs. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
