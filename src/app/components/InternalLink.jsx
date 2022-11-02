import Link from "next/link";

import { silkaBold } from "../fonts/fonts";

export const InternalLink = ({ children, href }) => {
  return (
    <Link className={silkaBold.className} href={href}>
      {children}
    </Link>
  );
};
