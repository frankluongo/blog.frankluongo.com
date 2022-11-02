import Link from "next/link";

import { silkaRegular } from "./fonts/fonts";

import { ExternalLink } from "./components/ExternalLink";

import css from "./styles/Header.module.css";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={silkaRegular.variable}>
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
        <ExternalLink href="https://frankluongo.com">Home</ExternalLink>
        <Link href="/">All Posts</Link>
      </nav>
    </header>
  );
}
