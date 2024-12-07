import Link from "next/link";

const products = [
  {
    name: "Rastreamento",
    description:
      "Sistema avançado de rastreamento de emissões de carbono para empresas e projetos.",
    image:
      "https://s2.static.brasilescola.uol.com.br/img/2015/11/carbono-60.jpg",
    features: [
      "Monitoramento em tempo real",
      "Análise detalhada de dados",
      "Relatórios personalizados",
    ],
  },
  {
    name: "Tokenização",
    description:
      "Transforme créditos de carbono em tokens digitais seguros e negociáveis.",
    image:
      "https://www.infomoney.com.br/wp-content/uploads/2023/10/GettyImages-1364156483.jpg?fit=788%2C443&quality=50&strip=all",
    features: [
      "Blockchain integrado",
      "Transações transparentes",
      "Liquidez aumentada",
    ],
  },
  {
    name: "Certificação",
    description:
      "Processo de certificação confiável para validar projetos de redução de emissões.",
    image:
      "https://www.docstibrasil.com.br/wp-content/uploads/2023/04/para-que-serve-certificado-digital.jpg",
    features: [
      "Auditoria rigorosa",
      "Conformidade com padrões internacionais",
      "Selo de qualidade Carbon 3 Labs",
    ],
  },
];

export default function Product() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-white text-center">
        Nossos Produtos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">
                {product.name}
              </h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link
                href={`/product/${product.name.toLowerCase()}`}
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
