import Link from "next/link";
import style from "../styles/menu.module.css";

export default function Menu() {
  return (
    <nav className={style.menu}>
      <div>
        <Link href="/">
          <span className={style.link}>Home</span>
        </Link>
        <Link href="/tienda">
          <span className={style.link}>Tienda</span>
        </Link>
        <Link href="/faq">
          <span className={style.link}>Span</span>
        </Link>
      </div>

      <div>
        <a>Cart (0)</a>
      </div>
    </nav>
  );
}
