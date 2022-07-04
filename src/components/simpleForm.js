import { useForm } from 'react-hook-form';

export default function SimpleForm() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="form">
      <input defaultValue={"default"} {...register("example")} />
      <input {...register("exampleRequired", {required: true})} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" value="Submit" onClick={handleSubmit(onSubmit)} />
    </form>
  );
}
