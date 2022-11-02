import { silkaMonoRegular } from "../fonts/fonts";

export const Code = ({ children }) => {
  return <code className={silkaMonoRegular.className}>{children}</code>;
};
