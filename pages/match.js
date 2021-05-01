import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { db } from "../utils/db/firebase";

export default function Match() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Detalhes</title>
      </Head>
      <NavBar page={'leaderboard'} />
      <div className="w-full flex-grow">
        <div className="flex flex-col w-full pt-2 px-2 sm:px-10 md:px-20">
          <h1 className="sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">
            Detalhes
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}