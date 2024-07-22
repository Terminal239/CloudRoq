import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={`mx-auto max-w-6xl ${className} px-4`}>{children}</div>;
};

export default Container;
