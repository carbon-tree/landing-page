import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-indigo-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-white mb-4">Carbon 3 Labs</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#" className="hover:text-gray-300 transition duration-300 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-300 transition duration-300 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300 transition duration-300 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300 transition duration-300 text-2xl">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-sm">Siga-nos nas redes sociais para ficar por dentro das novidades!</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-white mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📧</span>
                contato@carbon3labs.com 
              </p>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Carbon 3 Labs. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
