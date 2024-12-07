import Link from "next/link";

export default function Team() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-800 text-center">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img src={member.image} alt={member.name} width={400} height={400} className="w-full h-64 object-cover"></img>
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
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFdEu6p9s2jhw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712708067341?e=1735171200&v=beta&t=2kPuCJehw4A_aArlyRGHHm-B2t320b4uovDr5T01WlY",
    linkedin: "https://www.linkedin.com/in/andre-de-faria",
  },
  {
    name: "André",
    role: "CTO",
    description:
      "With extensive experience in software development, André leads our technological innovations.",
    image: "https://avatars.githubusercontent.com/u/39014633",
    linkedin: "https://www.linkedin.com/in//andre-de-faria",
  },
  {
    name: "Panayotis Giannopoulos",
    role: "Legal Advisor",
    description: "Entrepreneur, technology enthusiast since 1983",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFS3XeIcdYLRQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723007679779?e=1735171200&v=beta&t=izKif7BpCrxVzqwW_vO3iRrXQ0tnimoyMiWPmFwIT7Y",
    linkedin: "https://www.linkedin.com/in/panayotis-giannopoulos-br/",
  },
];
