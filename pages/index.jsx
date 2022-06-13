import Head from 'next/head'
import Image from 'next/image'

export default function Home(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Spotify clone</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>Yo</h1>
      </main>
    </div>
  )
}

