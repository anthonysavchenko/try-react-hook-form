import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);
  
  console.log(watch("example"));

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={"default"} {...register("example")} />
        <input {...register("exampleRequired", {required: true})} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
