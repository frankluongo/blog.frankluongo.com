import { silkaBold } from "../fonts/fonts";

export const ExternalLink = ({ children, href }) => {
  return (
    <a
      className={silkaBold.className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
