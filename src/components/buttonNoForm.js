import { useForm } from 'react-hook-form';

export default function ButtonNoForm() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="noForm">
      <input defaultValue={"default"} {...register("example")} />
      <input {...register("exampleRequired", {required: true})} />
      {errors.exampleRequired && <span>This field is required</span>}
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
}
