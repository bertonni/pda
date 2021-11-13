import Layout from '../components/Layout';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from 'next/router';

export default function Profile() {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  
  if (!currentUser) {
    router.push('/auth');
    return;
  }

  return (
    <Layout title="Classificação" page="profile">
      <div className="flex items-center justify-center">
        <h1 className="text-xl mt-20">Olá, {currentUser.email}</h1>
      </div>
    </Layout>
  )
}
