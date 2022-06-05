import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  
  const router = useRouter()

  return (
    <div className="scroll-smooth font-DmSans">
      <Head>
        <title>Riot Games</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <main className='flex '>
        <section className='flex flex-col items-center w-full max-w-lg min-h-screen p-11 justify-between'>

          <section className='w-full flex flex-col items-center justify-center'>
            <img src="/logo.png" alt="" className='w-36 mb-20 mt-20' />

            <h1 className='text-zinc-800 text-2xl mb-8'>Fazer Login</h1>

            <label className="w-full block mb-5">
              <span className='absolute text-xs font-bold uppercase text-zinc-400 m-5 cursor-text'>Nome De Usuário</span>
              <input type="text" name='username' className='input w-full bg-zinc-200 rounded-md border-2 border-zinc-900/10 outline-0 text-sm pt-6 px-2.5 pb-2.5 font-semibold text-zinc-800 focus:bg-zinc-100' />
            </label>

            <label className="w-full block mb-5">
              <span className='absolute text-xs font-bold uppercase text-zinc-400 m-5 cursor-text '>Senha</span>
              <input type="text" name='password' className='input w-full bg-zinc-200 rounded-md border-2 border-zinc-900/10 outline-0 text-sm pt-6 px-2.5 pb-2.5 font-semibold text-zinc-800 focus:bg-zinc-100 ' />
            </label>

            <section className='flex gap-2 w-full mt-5'>
              <button type='button' className='flex items-center justify-center w-4/12 h-9 rounded-md cursor-pointer border-none bg-blue-600'>
              <img src="/facebook.png" alt="Icone para logar pelo Facebook" className='w-5' />
            </button>

            <button type='button' className='flex items-center justify-center w-4/12 h-9 rounded-md cursor-pointer border-none bg-zinc-200'>
              <img src="/google.png" alt="Icone para logar pelo Google" className='w-5' />
            </button>

            <button type='button' className='flex items-center justify-center w-4/12 h-9 rounded-md cursor-pointer border-none bg-black'>
              <img src="/apple.png" alt="Icone para logar pelo Apple" className='w-5' />
            </button>
          </section>

          <label className='flex items-center w-full mt-4 mx-0 mb-14 text-xs font-bold' >
            <input type="checkbox" className="appearance-none w-5 h-5 bg-zinc-200 mr-2 rounded-sm checked:after:content-[''] checked:after:block checked:after:w-2 checked:after:h-3 checked:after:border-t-0 checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:mx-1.5 checked:after:my-0.5 checked:after:rotate-45 checked:bg-red-600" />
            Manter Login
          </label>
          </section>

          <section className='w-full flex flex-col items-center justify-center'>
            <button type="button" className='w-16 h-16 p-5 flex items-center justify-center bg-red-600 rounded-lg border-none cursor-pointer mb-16' disabled>
              <img src="/login.png" alt="Botão para efetuar Login na sua conta" />
            </button>

            <button type="button" className='text-sm uppercase text-zinc-600 mb-1 font-bold' onClick={() => router.push('/support')}>Não Consegue Iniciar a Sessão?</button>
            <button type="button" className='text-sm uppercase text-zinc-600 mb-1 font-bold' onClick={() => router.push('/signinpage')}>Criar Conta</button>
          </section>
          <address className='text-sm uppercase text-zinc-600 mb-1 font-bold'>Maked with ❤ by Nicholas Goes</address>
        </section>
        <section className='w-full bg-wallpaper bg-cover bg-center flex-1'></section>
      </main>
    </div>
  )
}

export default Home
