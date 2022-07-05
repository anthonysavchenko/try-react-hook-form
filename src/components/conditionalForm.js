import React from 'react';
import { useForm } from 'react-hook-form';

export default function ConditionalForm() {
  const {register, unregister, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  const [valA, setValA] = React.useState('');
  const [valB, setValB] = React.useState('');
  const [valC, setValC] = React.useState('');
  const [valD, setValD] = React.useState('');
  const [valE, setValE] = React.useState('');
  const [valF, setValF] = React.useState('');

  React.useEffect(() => {
    const vals = [valA, valB, valC, valD, valE, valF].filter(val => !val);
    if (vals.length > 3) {
      if (!valA) register("a", {required: true, onChange: (event) => {setValA(event.target.value);}});
      if (!valB) register("b", {required: true, onChange: (event) => {setValB(event.target.value);}});
      if (!valC) register("c", {required: true, onChange: (event) => {setValC(event.target.value);}});
      if (!valD) register("d", {required: true, onChange: (event) => {setValD(event.target.value);}});
      if (!valE) register("e", {required: true, onChange: (event) => {setValE(event.target.value);}});
      if (!valF) register("f", {required: true, onChange: (event) => {setValF(event.target.value);}});
    }
    else {
      if (!valA) unregister("a");
      if (!valB) unregister("b");
      if (!valC) unregister("c");
      if (!valD) unregister("d");
      if (!valE) unregister("e");
      if (!valF) unregister("f");
    }
  }, [valA, valB, valC, valD, valE, valF, register, unregister]);

  console.log(errors);
  return (
    <div className="noForm">
      <div>
        <input {...register("a", {onChange: (event) => {setValA(event.target.value);}})} />
        {errors.a && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("b", {onChange: (event) => {setValB(event.target.value);}})} />
        {errors.b && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("c", {onChange: (event) => {setValC(event.target.value);}})} />
        {errors.c && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("d", {onChange: (event) => {setValD(event.target.value);}})} />
        {errors.d && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("e", {onChange: (event) => {setValE(event.target.value);}})} />
        {errors.e && <span style={{color: 'red'}}>*</span>}
      </div>
      <div>
        <input {...register("f", {onChange: (event) => {setValF(event.target.value);}})} />
        {errors.f && <span style={{color: 'red'}}>*</span>}
      </div>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
}
