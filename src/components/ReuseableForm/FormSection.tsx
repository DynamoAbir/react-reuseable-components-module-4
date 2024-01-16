import { ReactNode, useContext } from "react";
import { FormElementContext } from ".";
import cn from "../../utils/cn";

export const FormSection = ({ children }: { children: ReactNode }) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" grid grid-cols-1 justify-items-center gap-5 ", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
