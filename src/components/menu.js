import Link from "next/link";
import style from "../styles/menu.module.css";

export default function Menu() {
  return (
    <nav className={style.menu}>
      <div>
        <Link href="/">
          <span className={style.link}>Home</span>
        </Link>
        <Link href="/store">
          <span className={style.link}>Store</span>
        </Link>
        <Link href="/faq">
          <span className={style.link}>FAQ</span>
        </Link>
      </div>

      <div>
        <a className={style.link}>Cart (0)</a>
      </div>
    </nav>
  );
}
