import Layout from "@/components/layout";
import { getItems } from "../../services/itemService";
import Product from "../../components/products";
import style from "../../styles/store.module.css";
import styleItems from "../../styles/product.module.css";

export default function Index({ products }) {
  return (
    <>
      <Layout title="Store" />
      <div className={style.container}>
        <div className={styleItems.items}>
          {products &&
            products.map((item) => (
              <Product key={item.id} item={item} showAs="Default" />
            ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      products: res,
    },
  };
}
