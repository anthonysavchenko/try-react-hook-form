import React from 'react';
import { useForm } from 'react-hook-form';

export default function ConditionalForm() {
  const {register, handleSubmit, trigger, formState: {errors, isSubmitted}} = useForm({shouldUnregister: true});
  const onSubmit = data => console.log('data', data);

  const [valA, setValA] = React.useState('');
  const [valB, setValB] = React.useState('');
  const [valC, setValC] = React.useState('');
  const [valD, setValD] = React.useState('');
  const [valE, setValE] = React.useState('');
  const [valF, setValF] = React.useState('');

  const [more, setMore] = React.useState(false);

  const validate = React.useCallback(value => {
    if (!value) {
      const notEmptyValues = (more ? [valA, valB, valC, valD, valE, valF] : [valA, valB, valC]).filter(val => val);
      return notEmptyValues.length >= 3;
    }
    return true;
  }, [valA, valB, valC, valD, valE, valF, more]);

  React.useEffect(() => {
    if (more && isSubmitted) {
      trigger(["d", "e", "f"]);
    };
  }, [more, isSubmitted, trigger]);

  const errorStyle = {boxShadow: '0 0 0 2px red'};

  console.log(errors);
  return (
    <div className="noForm">
      <input style={errors.a && errorStyle} {...register("a", {onChange: (event) => {setValA(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
      <input style={errors.b && errorStyle} {...register("b", {onChange: (event) => {setValB(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
      <input style={errors.c && errorStyle} {...register("c", {onChange: (event) => {setValC(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
      {!more && <button onClick={() => setMore(true)}>More</button>}
      {more && <>
        <button onClick={() => setMore(false)}>Less</button>
        <input style={errors.d && errorStyle} {...register("d", {onChange: (event) => {setValD(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
        <input style={errors.e && errorStyle} {...register("e", {onChange: (event) => {setValE(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
        <input style={errors.f && errorStyle} {...register("f", {onChange: (event) => {setValF(event.target.value);}, validate, deps: ["a", "b", "c", "d", "e", "f"]})} />
      </>}
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
}
