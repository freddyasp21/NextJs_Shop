import Layout from '../../components/layout'
import Product from '../../components/products'

export default function Productpage() {
  return (
    <>
      <Layout />
      <Product />
    </>
  );
}


export async function getStaticPaths(){
    const paths = 
}