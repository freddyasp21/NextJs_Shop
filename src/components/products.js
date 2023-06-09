import Link from "next/link";
import Image from "next/image";
import style from '../styles/product.module.css'

export default function Product({ item, showAs }) {

  if (showAs === "Page") {
    return <div>Page</div>;
  }

  if (showAs === "ListItem") {
    return <div>List item</div>;
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/url-a-mi-componente`}>
          <Image
            src={item.image}
            alt={item.description}
            width="200"
            height="200"
          />
        </Link>
      </div>

      <div>
        <h3>
          <Link href={`/store/url-a-mi-componente`}>{item.title}</Link>
        </h3>
      </div>

      <div>
        ${item.price}
      </div>

      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
