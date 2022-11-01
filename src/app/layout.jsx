import Link from "next/link";

import css from "./styles/Header.module.css";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <nav className="container blog">
        <Link href="/">Home</Link>
      </nav>
    </header>
  );
}
