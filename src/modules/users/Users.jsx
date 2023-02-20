import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Navbar } from "../../UI";


export const Users = () => {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = () => {
    axios
      .get("http://localhost:8080/api/usuarios")
      .then(function (response) {
        // handle success
        setUsuarios(response.data.usuarios);
        console.log(response);
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
  }, []);

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

  const editarUsuario = async(id, email,password,rol) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/usuarios/${id}`, {
        email,
        password,
        id_rol: rol
      });
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
                        <button className="block mt-2 sm:mt-0 lg:inline-block lg:mt-0 bg-green-600 text-white hover:bg-green-800 mx-1 px-4 py-2 rounded"
                        
                        >
                          Editar
                        </button>
                        <button
                          className="block mt-2 sm:mt-0 lg:inline-block lg:mt-0 bg-red-500 text-white hover:bg-red-700 mx-1 px-4 py-2 rounded"
                          onClick={() => {
                            Swal.fire({
                              title: '¿Está seguro de que desea eliminar este usuario?',
                              text: 'No podrás revertir esto',
                              icon: 'warning',
                              showCancelButton: true,
                              confirmButtonColor: '#d33',
                              cancelButtonColor: '#3085d6',
                              confirmButtonText: 'Sí, eliminar',
                              cancelButtonText: 'Cancelar'
                            }).then((result) => {
                              if (result.isConfirmed) {
                                eliminarUsuario(item.id_usuario);
                                Swal.fire(
                                  'Eliminado',
                                  'El usuario ha sido eliminado',
                                  'success',
                                  
                                  
                                )
                              }
                            })
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
    </div>
  );
};
