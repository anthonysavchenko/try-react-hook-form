import React from 'react';
import { useForm } from 'react-hook-form';

export default function ConditionalForm() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  const [valA, setValA] = React.useState('');
  const [valB, setValB] = React.useState('');
  const [valC, setValC] = React.useState('');
  const [valD, setValD] = React.useState('');
  const [valE, setValE] = React.useState('');
  const [valF, setValF] = React.useState('');

  const validate = React.useCallback(value => {
    if (!value) {
      const emptyValues = [valA, valB, valC, valD, valE, valF].filter(val => !val);
      console.log('emptyValues', emptyValues);
      if (emptyValues.length > 3) {
        console.log('bad validation');
        return false;
      }
    }
    console.log('good validation');
    return true;
  }, [valA, valB, valC, valD, valE, valF]);

  console.log(errors);
  return (
    <div className="noForm">
      <div>
        <input {...register("a", {onChange: (event) => {setValA(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
        {errors.a && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("b", {onChange: (event) => {setValB(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
        {errors.b && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("c", {onChange: (event) => {setValC(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
        {errors.c && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("d", {onChange: (event) => {setValD(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
        {errors.d && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("e", {onChange: (event) => {setValE(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
        {errors.e && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("f", {onChange: (event) => {setValF(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
        {errors.f && <span style={{color: 'red'}}>*</span>}
      </div>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
}
