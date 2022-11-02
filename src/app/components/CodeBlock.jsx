import { silkaMonoRegular } from "../fonts/fonts";

export const CodeBlock = ({ children }) => {
  return <pre className={silkaMonoRegular.className}>{children}</pre>;
};
