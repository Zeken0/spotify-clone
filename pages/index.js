import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify clone</title>
      </Head>

      <main className="bg-black h-screen overflow-hidden">
        <Sidebar />
      </main>
    </div>
  );
}
