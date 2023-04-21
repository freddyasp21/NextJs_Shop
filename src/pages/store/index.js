import Layout from "@/components/layout";
import style from "../../styles/store.module.css";
import { getItems } from "../../services/itemService";
import Image from "next/image";
import Product from '../../components/products'

export default function Index({ items }) {
  return (
    <>
      <Layout title="Store" />
      <div className={style.container}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="Default"/>
          ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
