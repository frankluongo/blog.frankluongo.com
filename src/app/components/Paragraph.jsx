import { silkaRegular } from "../fonts/fonts";

export const Paragraph = ({ children }) => {
  return <p className={silkaRegular.className}>{children}</p>;
};
