import Link from "next/link";

export default function SuccessStories() {
  return (
        <section className="container mx-auto py-16 px-4">
          <h1 className="text-5xl font-extrabold mb-12 text-gray-800 text-center">
            Success Stories
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img src={testimonial.image} alt={testimonial.name} width={400} height={400} className="w-full h-64 object-cover"></img>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {testimonial.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{testimonial.company}</p>
                  <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
                  <Link
                    href={testimonial.caseStudy}
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Read Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
  );
}

const testimonials = [
  {
    name: "John Smith",
    company: "Microsoft",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695167344576?e=1735171200&v=beta&t=agb9Rtcb9jVWWTazmqtCv2yz0Ij7h2_QeI-6YwSaKDQ",
    testimonial:
      "The system implementation revolutionized our productivity. I strongly recommend it!",
    caseStudy: "https://www.linkedin.com/in/williamhgates",
  },
  // Add more testimonials here
];
