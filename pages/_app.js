import '../styles/globals.css'
import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Avatar from '../components/UI/Avatar'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen'>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
      </Head>

      <header className="bg-white flex p-6 shadow-sm items-center">
        <h6 className='flex-grow text-2xl font-bold'>Dashboard</h6>
        <Link href='/profile'>
          <a href="/profile">
            <Avatar src="https://i.pravatar.cc/300"/>
          </a>
        </Link>
      </header>

      <div className="bg-gray-100 h-full">
        <main className='flex'>
          <Sidebar/>
          <div className='p-12 w-full'>
            <Component {...pageProps} />
          </div>
        </main>
      </div>

      <footer className="flex items-center justify-center w-full h-32 border-t">
        <span>Powered by<span className='font-bold'> parradura</span></span>
      </footer>
    </div>
  )
}

export default MyApp
