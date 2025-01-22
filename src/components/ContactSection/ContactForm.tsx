'use client'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const sendMailFormSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  email: z.string().email('Insira um e-mail válido.'),
  message: z.string().min(3, 'Sua mensagem deve ter no mínimo 3 caracteres.')
})

export default function ContactForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    const formHandling = sendMailFormSchema.safeParse(data)
    if (formHandling.success) {
      console.log(formHandling.data)
      const { name, email, message } = formHandling.data

      const tag = '[PORTFÓLIO]'
      const subject = `${tag} Mensagem de ${name}`

      const mailtoLink = `mailto:?to=${'djoao6757@gmail.com'}&subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(message)}`
      window.open(mailtoLink, '_blank')
    } else {
      formHandling.error.errors.forEach((error) => {
        toast.error(error.message)
      })
    }
  })

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-gray-800 dark:bg-[#333] shadow-md rounded-lg p-6 mb-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-100 dark:text-[#E0E0E0] font-medium mb-2"
          >
            Nome
          </label>
          <input
            {...form.register('name')}
            type="text"
            id="name"
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-lg border border-gray-700 dark:border-[#555] bg-gray-900 dark:bg-[#444] text-gray-100 dark:text-[#E0E0E0] focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#AAAAAA] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-100 dark:text-[#E0E0E0] font-medium mb-2"
          >
            E-mail
          </label>
          <input
            {...form.register('email')}
            type="email"
            id="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-3 rounded-lg border border-gray-700 dark:border-[#555] bg-gray-900 dark:bg-[#444] text-gray-100 dark:text-[#E0E0E0] focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#AAAAAA] focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-gray-100 dark:text-[#E0E0E0] font-medium mb-2"
        >
          Mensagem
        </label>
        <textarea
          {...form.register('message')}
          id="message"
          placeholder="Escreva sua mensagem"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-700 dark:border-[#555] bg-gray-900 dark:bg-[#444] text-gray-100 dark:text-[#E0E0E0] focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#AAAAAA] focus:outline-none"
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
  )
}
