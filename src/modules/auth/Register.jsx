
import { useForm } from "react-hook-form";
import { Input, InputButton, InputSelectOption } from "../../UI";
import { apiClient } from "../../api/ApiClient";


let roles = [{id_rol:1,rol:"administrador"}, {id_rol:2,rol:"usuario"},{id_rol:3,rol:"superadmin"}]
export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registrar = async (data1) => {
    await apiClient
      .post(`/usuarios`, data1)
      .then((response) => {
        console.log(data1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={`flex h-max w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url("../public/assets/images/morado.png")]`}
    >
      <div className="rounded-xl bg-blue-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
              width="150"
              alt=""
              srcSet=""
            />
            <h1 className="mb-2 text-2xl">GITHUB</h1>
            <span className="text-gray-300">Registrar</span>
          </div>

          <form
            onSubmit={handleSubmit((data) => {
              registrar(data);
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
              designInput="block rounded-3xl border-none bg-blue-800 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              placeHolder="samantha@email.com"
              errors={errors}
              nameLabel="Correo electronico"
            />

            <Input
              dimensionA="mb-4 text-lg"
              dimensionB="flex justify-center"
              dimensionC="flex flex-wrap justify-center"
              register={register}
              name="password"
              messageA="El campo debe cumplir con la nomenclatura de un correo"
              designInput="block rounded-3xl border-none bg-blue-900 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              placeHolder="********"
              typeInput="Password"
              errors={errors}
              nameLabel="Contraseña"
            />

            <InputSelectOption
              dimensionA="mb-4 text-lg"
              dimensionB="flex justify-center"
              dimensionC="flex flex-wrap justify-center"
              register={register}
              name="rol"
              designInput="block rounded-3xl border-none bg-blue-800 bg-opacity-50 px-12 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              errors={errors}
              nameLabel="Rol"
              array={roles}
              valueOption={'id_rol'}
              nameOption={'rol'}
            />

            <InputButton
              dimension="mt-8 flex justify-center text-lg text-black"
              typeButton="submit"
              designButton="rounded-3xl bg-blue-700 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
