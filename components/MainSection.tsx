export default function MainSection() {
  return (
    <main className="bg-gray-50">
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

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Sobre Nós</h2>
        <p className="text-center text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Nossa empresa está focada em entregar soluções inovadoras para o
          mercado, com uma abordagem moderna e focada em resultados.
        </p>
      </section>

      <section className="container mx-auto py-16 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Impacto</h2>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-8 rounded-full font-bold transition duration-300 transform hover:scale-105">
            Saiba Mais
          </button>
        </div>
      </section>
    </main>
  );
}
