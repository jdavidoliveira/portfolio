import React from 'react'

export default function ContactSection() {
  return (
    <section className="bg-secondary-bg py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">
          Entre em Contato
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Tem interesse em colaborar ou precisa de mais informações? Fique à
          vontade para entrar em contato comigo. Estou sempre aberto para novas
          ideias e projetos!
        </p>
      </div>
      <form className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-100 font-medium mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Seu nome"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-100 font-medium mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Seu e-mail"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-gray-100 font-medium mb-2"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            placeholder="Escreva sua mensagem"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="inline-block bg-dark-primary-bg text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-accent/90 transition"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Fique à vontade para me contatar através das informações abaixo. Seja
          para novos projetos, colaborações ou dúvidas, será um prazer conversar
          com você!
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/5521982964498"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              +55 51 98296-4498
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">E-mail</h3>
            <a
              href="mailto:djoao6757@gmail.com"
              className="text-blue-400 hover:underline"
            >
              seuemail@dominio.com
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              LinkedIn
            </h3>
            <a
              href="https://linkedin.com/in/joao-david-de-oliveira-carneiro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/joao-david-de-oliveira-carneiro
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              Currículo
            </h3>
            <a
              href="/curriculo.pdf" // Certifique-se de ter o arquivo no diretório público
              download
              className="text-blue-400 hover:underline"
            >
              Baixe aqui
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Estou sempre aberto para novas oportunidades e colaborações. Vamos
          trabalhar juntos!
        </p>
        <a
          href="https://wa.me/5551987654321" // Substitua pelo seu número no formato internacional
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-dark-primary-bg text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-accent/90 transition"
        >
          Fale comigo no WhatsApp
        </a>
      </div>
    </section>
  )
}
