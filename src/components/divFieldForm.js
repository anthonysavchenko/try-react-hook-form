import React from 'react';
import { useForm } from 'react-hook-form';

export default function DivFieldForm() {
  const {register, setValue, handleSubmit, formState: {errors, isSubmitting}} = useForm();
  const onSubmit = data => console.log(data);
  const [clicked, setClicked] = React.useState(false);
  const clickedRef = React.useRef(null);
  register('clicked', {required: true});
  
  React.useEffect(() => {
    console.log('isSubmitting', isSubmitting);
    if (isSubmitting && !errors['exampleRequired'] && errors['clicked'] && clickedRef.current) {
      clickedRef.current.scrollIntoView();
    }
  }, [isSubmitting]);

  return (
    <div className="noForm">
      <input defaultValue={"default"} {...register("example")} />
      <input {...register("exampleRequired", {required: true})} />
      {errors.exampleRequired && <span>This field is required</span>}
      <div ref={clickedRef} onClick={() => {setClicked(true); setValue('clicked', true, {shouldValidate: true})}}>{clicked ? "I'm done" : 'Click me'}</div>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
}
