import React from "react";

export const Input = ({
  dimensionA,
  dimensionB,
  dimensionC,
  register,
  name,
  regex,
  messageA,
  req = true,
  designInput,
  typeInput = "text",
  placeHolder,
  errors,
  nameLabel
}) => {
  return (
    <div className={dimensionA}>
      
        <label>{nameLabel}</label>
      
      <div className={dimensionB}>
        <input
          {...register(name, {
            pattern: {
              value: regex,
              message: messageA,
            },
            required: {
              value: req,
              message: "El campo es obligatorio",
            },
          })}
          className={designInput}
          type={typeInput}
          name={name}
          placeholder={placeHolder}
        />
      </div>
      <div className={dimensionC}>
        {errors[name] && (
          <span className="text-red-500">{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};


