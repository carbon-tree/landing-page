
export default function HeroSection() {
  return (
    <section className="container mx-auto py-16 px-4">
    <div className="bg-gradient-to-br from-green-500 to-purple-600 text-white p-10 rounded-2xl shadow-2xl">
      <h2 className="text-5xl font-extrabold mb-6 leading-tight">Carbon 3 Labs</h2>
      <p className="text-xl mb-8 opacity-90">
        Aqui está a nossa visão e valores, com uma história de sucesso e
        crescimento.
      </p>
      <button className="bg-green-400 hover:bg-yellow-300 text-gray-900 py-3 px-8 rounded-full font-bold transition duration-300 transform hover:scale-105">
        Conheça-nos
      </button>
    </div>
  </section>
  );
}
