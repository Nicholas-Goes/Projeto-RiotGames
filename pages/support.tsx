import type { NextPage } from 'next'
import Head from 'next/head'
import router from 'next/router'


const Support: NextPage = () => {
  return (
    <div className="scroll-smooth font-DmSans">   
      <Head>
        <title>Riot Games - Support</title>
        <link rel="icon" href="/logo-mark.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <main className='flex'>
        <section className='flex flex-col items-center w-full max-w-lg min-h-screen p-11 justify-between'>
          <section className='w-full flex flex-col items-center justify-center'>
            <img src="/logo.png" alt="Logo da Riot Games" className='w-36 mb-20 mt-20' />

            <h1 className='text-zinc-800 text-2xl mb-8'>Suporte</h1>

            <label className="w-full block mb-5">
              <span className='absolute text-xs font-bold uppercase text-zinc-400 m-5 cursor-text'>Melhor Email</span>
              <input type="email" name='email' className='input w-full bg-zinc-200 rounded-md border-2 border-zinc-900/10 outline-0 text-sm pt-6 px-2.5 pb-2.5 font-semibold text-zinc-800 focus:bg-zinc-100' />
            </label>

            <label className="w-full block mb-5">
              <span className='absolute text-xs font-bold uppercase text-zinc-400 m-5 cursor-text'>Título</span>
              <input type="text" name='username' className='input w-full bg-zinc-200 rounded-md border-2 border-zinc-900/10 outline-0 text-sm pt-6 px-2.5 pb-2.5 font-semibold text-zinc-800 focus:bg-zinc-100' />
            </label>

            <label className="w-full block mb-5">
              <span className='absolute text-xs font-bold uppercase text-zinc-400 m-5 cursor-text'>Descrição do Problema</span>
              <input type="password" name='password' className='input w-full bg-zinc-200 rounded-md border-2 border-zinc-900/10 outline-0 text-sm pt-6 px-2.5 pb-32 font-semibold text-zinc-800 focus:bg-zinc-100' />
            </label>

          </section>

          <section className='w-full flex flex-col items-center justify-center'>
            <button type="button" className='w-16 h-16 p-5 flex items-center justify-center bg-red-600 rounded-lg border-none cursor-pointer mb-16' disabled>
              <img src="/login.png" alt="Botão para efetuar Login na sua conta" />
            </button>

            <button type="button" className='text-sm uppercase text-zinc-600 mb-1 font-bold' onClick={() => router.push('/signinpage')}>Criar Conta</button>
            <button type="button" className='text-sm uppercase text-zinc-600 mb-1 font-bold' onClick={() => router.push('/')}>Fazer Login</button>

          </section>
        </section>
        <section className='w-full bg-wallpaper-vayne bg-cover bg-center flex-1'></section>
  
      </main> 
    </div>
  )
}

export default Support