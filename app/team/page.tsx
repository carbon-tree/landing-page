import Link from "next/link";

export default function Team() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-white text-center">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img src={member.image} alt={member.name} width={600} height={400} className="w-full h-64 object-cover"></img>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {member.name}
              </h2>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.description}</p>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const teamMembers = [
  {
    name: "Alexandre",
    role: "CEO",
    description:
      "Blockchain technology and sustainability expert, Alexandre leads our mission to revolutionize the carbon market.",
    image: "/team/alexandre.jpg",
    linkedin: "https://www.linkedin.com/in/alexandre-cruz-web3/",
  },
  {
    name: "André",
    role: "CTO",
    description:
      "With extensive experience in software development, André leads our technological innovations.",
    image: "/team/andre.jpg",
    linkedin: "https://www.linkedin.com/in//andre-de-faria",
  },
  {
    name: "Panayotis Giannopoulos",
    role: "Legal Advisor",
    description: "Entrepreneur, technology enthusiast since 1983",
    image: "/team/panayotis.jpg",
    linkedin: "https://www.linkedin.com/in/panayotis-giannopoulos-br/",
  },
  {
    name: "Leonardo Ferah",
    role: "CDO",
    description: "Entrepreneur and marketing professional with a decade of experience bridging traditional and digital marketing. My expertise spans Strategic Planning, Digital Marketing, AI & Automation tools, Business Administration, and Team Management. In 2024, I was introduced to the Web3 and Blockchain market, which sparked my passion for this transformative space. Since then, I’ve been fully dedicated to developing my skills and exploring the endless possibilities within this innovative industry.",
    image: "/team/leonardo.jpg",
    linkedin: "https://www.linkedin.com/in/leonardoferah/",
  },
  {
    name: "Bruno Candiota",
    role: "Operational Support and Web3 Analyst",
    description: "I have experience in customer service, with more than three years working in companies such as AES Eletropaulo and the Ministry of Agriculture, Livestock and Supply, managing emergency and commercial demands with tools such as the SAP system.",
    image: "/team/bruno.jpg",
    linkedin: "https://www.linkedin.com/in/bruno-candiota-b91a4bb8/",
  },
];
