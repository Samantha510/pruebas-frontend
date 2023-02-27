import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
import { Navbar, Pagination } from "../../UI";

export const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const {register,watch,setValue} = useForm();
  let watchItems = watch();
  //const [usuario, setTablaUsuarios] = useState([]);
  //const [busqueda, setBusqueda] = useState("");
 
  

  const obtenerUsuarios = async () => {
    await axios
      .get("http://localhost:8080/api/usuarios",{params:{search:watchItems.buscador}})
      .then(function (response) {
        // handle success
        setUsuarios(response.data.usuarios);
        //setTablaUsuarios(response.data.usuarios);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    obtenerUsuarios();
  }, [watchItems.buscador]);


  /*const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log("busqueda: " + e.target.value);

    if (e.target.value === "") {
      obtenerUsuarios();
    }
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = usuarios.filter((elemento) => {
      if (
        elemento.email
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  };*/

  const eliminarUsuario = (id) => {
    axios
      .delete(`http://localhost:8080/api/usuarios/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        obtenerUsuarios();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };


  const editarUsuario = async (id, email, password, rol) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/usuarios/${id}`,
        {
          email,
          password,
          id_rol: rol,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="m-4">
        <div className="flex justify-end p-5">
          <Link to="/Register">
            <button className="block bg-blue-700 text-white hover:bg-blue-800 mt-0 mx-1 px-4 py-2 rounded mr-2">
              Crear usuario
            </button>
          </Link>
        </div>

        <div className=" block max-w-6xl mx-auto pb-8 pl-5 absolute bottom-96">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className=" p-4 pl-10 max-w-3xl text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Búsqueda"
                {...register('buscador')}
                name = "buscador"
              />
              
            </div>
          </form>
        </div>

        <div className="w-full snap-x snap-mandatory overflow-x-auto p-5 pt-0">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="p-3 font-bold uppercase bg-blue-900 text-white border border-blue-300 hidden sm:table-cell">
                  Correo
                </th>
                <th className="p-3 font-bold uppercase bg-blue-900 text-white border border-blue-300 hidden sm:table-cell">
                  Contraseña
                </th>
                <th className="p-3 font-bold uppercase bg-blue-900 text-white border border-blue-300 hidden sm:table-cell">
                  Rol
                </th>
                <th className="p-3 font-bold uppercase bg-blue-900 text-white border border-blue-300 hidden sm:table-cell">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((item, index) => (
                <tr
                  key={index}
                  className="flex justify-between sm:table-row flex-row sm:flex-row flex-wrap sm:flex-nowrap mb-10 sm:mb-0 hover:bg-blue-200 bg-white"
                >
                  <td className="w-full sm:w-auto py-3 px-1 text-gray-800 border border-b border-blue-100 relative sm:static">
                    <div className="text-right sm:text-center w-1/2 sm:w-full">
                      {item.email}
                    </div>
                  </td>

                  <td className="w-full sm:w-auto py-3 px-1 text-gray-800 border border-b border-blue-100 relative sm:static">
                    <div className="text-center sm:text-center w-1/2 sm:w-full">
                      {item.password}
                    </div>
                  </td>

                  <td className="w-full sm:w-auto py-3 px-1 text-gray-800 border border-b border-blue-100 relative sm:static">
                    <div className="text-right sm:text-center w-1/2 sm:w-full">
                      {item.id_rol}
                    </div>
                  </td>

                  <td className="w-full sm:w-auto py-3 px-1 text-gray-800 border border-b border-blue-100 relative sm:static">
                    <div className="text-right sm:text-center w-1/2 sm:w-full">
                      <div className="flex justify-around text-black">
                        <button className="block mt-2 sm:mt-0 lg:inline-block lg:mt-0 bg-green-600 text-white hover:bg-green-800 mx-1 px-4 py-2 rounded">
                          Editar
                        </button>
                        <button
                          className="block mt-2 sm:mt-0 lg:inline-block lg:mt-0 bg-red-500 text-white hover:bg-red-700 mx-1 px-4 py-2 rounded"
                          onClick={() => {
                            Swal.fire({
                              title:
                                "¿Está seguro de que desea eliminar este usuario?",
                              text: "No podrás revertir esto",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#d33",
                              cancelButtonColor: "#3085d6",
                              confirmButtonText: "Sí, eliminar",
                              cancelButtonText: "Cancelar",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                eliminarUsuario(item.id_usuario);
                                Swal.fire(
                                  "Eliminado",
                                  "El usuario ha sido eliminado",
                                  "success"
                                );
                              }
                            });
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination/>
    </div>
  );
};
