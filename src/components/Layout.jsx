import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Layout({ children, title, page, club }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar page={page} club={club ?? 'undefined'} />
      <div className="w-full flex-grow">
        { children }
      </div>
      <Footer />
    </div>
  )
}
