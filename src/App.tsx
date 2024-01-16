import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReuseableForm";
import Container from "./components/ui/Container";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      <Form
        double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <Input
            type="text"
            register={register("name")}
            errors={errors}
            label="Name"
          ></Input>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          ></Input>
          <Input
            type="password"
            register={register("password")}
            errors={errors}
            label="Password"
          ></Input>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
