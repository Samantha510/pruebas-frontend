import React from "react";
import { Register } from "../../modules/auth/Register";

export const InputSelectOption = ({
  nameLabel,
  dimensionA,
  dimensionB,
  dimensionC,
  register,
  name,
  req=true,
  designInput,
  errors,
  array,
  valueOption,
  nameOption
}) => {
  return (
    <div className={dimensionA}>
      <label>{nameLabel}</label>

      <div className={dimensionB}>
        <select
          {...register(name, {
            required: {
              value: req,
              message: "El campo es obligatorio",
            },
          })}
          className={designInput}
          name={name}
        >
          <option value="">
            --ninguna opcion--
          </option>
          {
            array.map((item)=>(
              <option key={item[valueOption]} value={item[valueOption]}>
                {item[nameOption]}
              </option>
            ))
          }
        </select>

        
      </div>
      <div className={dimensionC}>
        {errors[name] && (
          <span className="text-red-500">{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};
