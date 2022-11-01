import Link from "next/link";

import css from "./styles/Header.module.css";
import "./styles/globals.css";
import { fontVars } from "./fonts/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVars}>
      <head>
        <title>FLDC | Blog</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className={css.Header}>
      <nav className="container blog flex gap:1">
        <a href="https://frankluongo.com">Home</a>
        <Link href="/">All Posts</Link>
      </nav>
    </header>
  );
}
