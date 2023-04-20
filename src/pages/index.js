import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import style from '../styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title="Bienvenido"/>
      <div className={style.container}>Home</div>
    </>
  );
}
