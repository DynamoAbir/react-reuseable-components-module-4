import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TNormalForm>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  console.log(watch("name"));
  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-gray-300 shadow-sm rounded-md p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(" grid grid-cols-1 justify-items-center gap-5 ", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            type="email"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-full"
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="w-full max-w-md">
          <label className="block" htmlFor="dropbox">
            Gender
          </label>
          <select {...register("gender")}>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
      </div>
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
    </form>
  );
};

export default NormalForm;
