import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, InputButton } from "../../UI";
import { apiClient } from "../../api/ApiClient";
import {
  getRol,
  getToken,
  setRolLocalStorage,
  setTokenLocalStorage,
} from "../../utils/manajer";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [token,setToken]= useState('');
  const [rol,setRol]= useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const navigate = useNavigate();
  
  useEffect(() => {
    if(token !== '' && rol !== ''){
      navigate('/');
    }
     // eslint-disable-next-line
  }, [token,rol])
  

  const inicioSesion = async (data1) => {
    await apiClient
      .post(`/auth/login`, data1)
      .then((response) => {
        setTokenLocalStorage(response.data.token);
        setRolLocalStorage(response.data.rol);
        setToken(getToken());
        setRol(getRol());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={`flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url("../public/assets/images/morado.png")]`}
    >
      <div className="rounded-xl bg-yellow-400 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
              width="150"
              alt=""
              srcSet=""
            />
            <h1 className="mb-2 text-2xl">STAR WARS</h1>
            <span className="text-gray-300">Inicio de sesión</span>
          </div>

          <form
            onSubmit={handleSubmit((data) => {
              inicioSesion(data);
            })}
          >
            <Input
              dimensionA="mb-4 text-lg"
              dimensionB="flex justify-center"
              dimensionC="flex flex-wrap justify-center"
              register={register}
              name="email"
              regex={/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/}
              messageA="El campo debe cumplir con la nomenclatura de un correo"
              designInput="block rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              placeHolder="id@email.com"
              errors={errors}
            />

            <Input
              dimensionA="mb-4 text-lg"
              dimensionB="flex justify-center"
              dimensionC="flex flex-wrap justify-center"
              register={register}
              name="password"
              messageA="El campo debe cumplir con la nomenclatura de un correo"
              designInput="block rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              placeHolder="********"
              typeInput="Password"
              errors={errors}
            />

            <InputButton
              dimension="mt-8 flex justify-center text-lg text-black"
              typeButton="submit"
              designButton="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
