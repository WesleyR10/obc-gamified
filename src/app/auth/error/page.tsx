import React from 'react'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Erro de Autenticação</h1>
      <p>Desculpe, ocorreu um erro durante o processo de autenticação.</p>
      <p>
        Por favor, tente novamente ou entre em contato com o suporte se o
        problema persistir.
      </p>
      <Link href="/auth/login" className="text-red-700">
        Voltar para a página de login
      </Link>
    </div>
  )
}

export default ErrorPage
