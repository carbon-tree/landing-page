import Link from "next/link";

const products = [
  {
    name: "Tracking",
    description:
      "Advanced carbon emissions tracking system for companies and projects.",
    image:
      "https://s2.static.brasilescola.uol.com.br/img/2015/11/carbono-60.jpg",
    features: [
      "Real-time monitoring",
      "Detailed data analysis",
      "Custom reports",
    ],
  },
  {
    name: "Tokenization",
    description:
      "Transform carbon credits into secure and tradable digital tokens.",
    image:
      "https://www.infomoney.com.br/wp-content/uploads/2023/10/GettyImages-1364156483.jpg?fit=788%2C443&quality=50&strip=all",
    features: [
      "Integrated blockchain",
      "Transparent transactions",
      "Increased liquidity",
    ],
  },
  {
    name: "Certification",
    description:
      "Reliable certification process to validate emission reduction projects.",
    image:
      "https://www.docstibrasil.com.br/wp-content/uploads/2023/04/para-que-serve-certificado-digital.jpg",
    features: [
      "Rigorous audit",
      "Compliance with international standards",
      "Carbon 3 Labs quality seal",
    ],
  },
];

export default function Product() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-white text-center">
        Our Products
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
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
