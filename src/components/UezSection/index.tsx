import Link from 'next/link'
import React from 'react'

export default function UezSection() {
  return (
    <section className="bg-primary-bg dark:bg-dark-primary-bg py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Conheça a{' '}
          <span className="bg-gradient-to-r from-[#2A14B7] to-[#535FFF] bg-clip-text text-transparent">
            UEZ Company
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
          A <strong>UEZ Company</strong> é um projeto que nasceu da minha paixão
          por conectar pessoas e facilitar a vida delas. Lançada em 2023, a
          plataforma une clientes e profissionais para realizar serviços online,
          garantindo segurança, confiança e praticidade.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Meu Papel na UEZ
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Criação e desenvolvimento da plataforma.</li>
            <li>
              Planejamento estratégico e liderança de um time de
              desenvolvedores.
            </li>
            <li>
              Implementação e controle de infraestrutura, hospedagem e serviços
              externos.
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Destaques da UEZ
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              Oferece serviços de diversas áreas, como programação, design,
              videomaking e social media.
            </li>
            <li>
              Conecta diretamente profissionais e clientes com total segurança.
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center mt-12">
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
          A UEZ reflete meu compromisso com inovação e minha habilidade em
          transformar ideias em soluções reais.
        </p>
        <Link
          href="https://uezcompany.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#535FFF] text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-[#535FFF]/75 dark:hover:bg-[#535FFF]/90 transition"
        >
          Visite a UEZ Company
        </Link>
      </div>
    </section>
  )
}
