import React from 'react';

const CustomInput = ({title, formKey, register, placeholder}) => {
  return (
    <div className="sell__item">
      <h3>{title}</h3>
      <div className="sell__inp-content">
        <input {...register(`${formKey}`)} placeholder={placeholder} className="sell__inp-item" />
      </div>
    </div>
  );
};

export default CustomInput;
