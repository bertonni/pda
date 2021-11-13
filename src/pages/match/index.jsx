import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";

export default function MatchInfo() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Detalhes">
      <div className="flex flex-col w-full pt-2 px-2 sm:px-10 md:px-20">
        <h1 className="sm:px-10 md:px-20 text-xl sm:text-2xl text-gray-550">
          Detalhes {id}
        </h1>
      </div>
    </Layout>
  )
}