import { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from ".";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" grid grid-cols-1 justify-items-center my-5 gap-5 ", {
        "md:grid-cols-2 ": double,
      })}
    >
      <div className=" w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
        <button
          className="btn w-full md:w-fit bg-purple-500 text-white font-semibold hover:bg-purple-300 "
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
