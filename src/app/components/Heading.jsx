import { silkaBold } from "../fonts/fonts";

export const Heading = ({ children, size }) => {
  const Tag = `h${size}`;

  return <Tag className={silkaBold.className}>{children}</Tag>;
};

Heading.defaultProps = {
  size: 1,
};
