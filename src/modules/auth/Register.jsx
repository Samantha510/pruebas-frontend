
import { useForm } from "react-hook-form";
import { Input, InputSelectOption, Navbar} from "../../UI";
import { apiClient } from "../../api/ApiClient";
import { Button } from "../../UI/components/Button";
import { useNavigate } from "react-router-dom";





let roles = [{id_rol:1,rol:"administrador"}, {id_rol:2,rol:"usuario"},{id_rol:3,rol:"superadmin"}]
export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
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
    <div>
      <Navbar/>
    <div
      className={`flex h-max w-full items-center justify-center bg-cover bg-no-repeat bg-white mt-10`}>
      <div className="rounded-2xl bg-blue-900 bg-opacity-90 px-12 py-12 shadow-xl z-20 ">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            {/* <img
              src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
              width="150"
              alt=""
              srcSet=""
            /> */}
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Crear usuario</h1>
            {/* <span className="text-gray-300">Registrar</span> */}
          </div>

          <form
            onSubmit={handleSubmit((data) => {
              registrar(data);
              
            })}
          >
            <Input
              dimensionA="space-y-4"
              dimensionB="flex justify-center"
              dimensionC="flex flex-wrap justify-center"
              register={register}
              name="email"
              regex={/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/}
              messageA="El campo debe cumplir con la nomenclatura de un correo"
              designInput="block rounded-3xl border-none bg-blue-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              placeHolder="id@email.com"
              errors={errors}
              nameLabel="Correo electronico"
            />

            <Input
              dimensionA="space-y-4"
              dimensionB="flex justify-center"
              dimensionC="flex flex-wrap justify-center"
              register={register}
              name="password"
              messageA="El campo debe cumplir con la nomenclatura de un correo"
              designInput="block rounded-3xl border-none bg-blue-300 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              placeHolder="********"
              typeInput="Password"
              errors={errors}
              nameLabel="Contraseña"
            />

            <InputSelectOption
              dimensionA="space-y-4"
              dimensionB="flex justify-center"
              dimensionC="flex flex-wrap justify-center"
              register={register}
              name="rol"
              designInput="block rounded-3xl border-none bg-blue-300 bg-opacity-50 px-12 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              errors={errors}
              nameLabel="Rol"
              array={roles}
              valueOption={'id_rol'}
              nameOption={'rol'}
            />




            <Button
            onClick = {navigate('./users/Users.jsx')}
              dimension="text-center mt-6"
              typeButton="submit"
              designButton="rounded-3xl bg-blue-300 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
            />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
