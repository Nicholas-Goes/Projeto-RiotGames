import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <html className="scroll-smooth">
      <Head>
        <title>Riot Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='flex flex-col items-center w-full max-w-lg min-h-screen p-11'>

          <img src="" alt="" className='w-36 mb-20' />

          <h1 className='text-zinc-800 text-2xl mb-5'>Fazer Login</h1>

          <label className="w-full block mb-5">
            <span className='absolute text-xs font-bold uppercase text-zinc-400 m-5 cursor-text'>Nome De Usuário</span>
            <input type="text" name='username' className='w-full bg-zinc-200 rounded-md border-2 border-zinc-900/10 outline-0 text-sm pt-6 px-2.5 pb-2.5 font-semibold text-zinc-800 focus:bg-zinc-100' />
          </label>

          <label className="w-full block mb-5">
            <span className='absolute text-xs font-bold uppercase text-zinc-400 m-5 cursor-text'>Senha</span>
            <input type="text" name='username' className='w-full bg-zinc-200 rounded-md border-2 border-zinc-900/10 outline-0 text-sm pt-6 px-2.5 pb-2.5 font-semibold text-zinc-800 focus:bg-zinc-100 ' />
          </label>

        </section>
      </main>

      
    </html>
  )
}

export default Home
