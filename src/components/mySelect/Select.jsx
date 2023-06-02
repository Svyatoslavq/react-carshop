import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const CustomSelect = ({ title, options, formKey, register, control, setValue }) => {

  const handleCategoryInputChange = (newValue) => {
    console.log(newValue.value);
    return setValue(`${formKey}`, newValue.value);
  };

  return (
    <div className="sell__item">
      <h3>{title}</h3>
      <div style={{ width: '60%' }}>
        <Controller
          name={`${formKey}`}
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              {...register(`${formKey}`)}
              styles={{
                singleValue: (defaultStyles, state) => ({
                  ...defaultStyles,
                  borderRadius: '15px',
                  backgroundColor: '#312f3d',
                  outline: state.isFocused && 'none',
                  color: state.isSelected && '#d4d4d4'
                }),
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: '15px',
                  border: 'none',
                  backgroundColor: '#312f3d',
                  boxShadow: 'none',
                  '&:hover': {
                    border: '1px solid  #c4c4c4b0',
                  },
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  backgroundColor: state.isSelected ? '#38354b' : '#312f3d',
                  color: state.isSelected ? '#743ecc' : '#d4d4d4',
                }),
              }}
              inputRef={ref}
              options={options}
              value={options.find((c) => c.value === value)}
              onChange={handleCategoryInputChange}
              classNamePrefix='react-select'
            />
          )}
        />
      </div>
    </div>
  );
};

export default CustomSelect;
