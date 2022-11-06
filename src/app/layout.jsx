import Link from "next/link";

import { silkaRegular } from "./fonts/fonts";

import { ExternalLink } from "./components/ExternalLink";
import { InternalLink } from "./components/InternalLink";

import css from "./styles/Header.module.css";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={silkaRegular.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <InternalLink href="/">All Posts</InternalLink>
      </nav>
    </header>
  );
}
