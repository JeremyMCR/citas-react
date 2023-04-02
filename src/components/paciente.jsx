import Swal from "sweetalert2";

const paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () =>{
      Swal.fire({
        title: '¿Desea eliminar este paciente?',
        icon : 'warning',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        confirmButtonColor: '#be4d25',
        denyButtonText: `Cancelar`,
        denyButtonColor: '#3730a3',
      }).then((respuesta) => {
        /* Read more about isConfirmed, isDenied below */
        if (respuesta.isConfirmed) {
          eliminarPaciente(id)
          Swal.fire('Paciente Eliminado', '', 'success')
        } else if (respuesta.isDenied) {
          Swal.fire('Se conservo el paciente', '', 'info')
        }
      })
  }
  return (
    
    <div className=" mx-3 mt-3 bg-white shadow-lg px-3 py-10 rounded-xl">
        <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-8">
          <button type="button"
                  className="py-2 px-10 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg font-black transition-all uppercase"
                  onClick={() => setPaciente(paciente)}
          >Editar</button>

          <button type="button"
                  className="py-2 px-10 bg-red-800 hover:bg-red-900 transition-all text-white rounded-lg font-black uppercase"
                  onClick={handleEliminar}
          >Eliminar</button>

        </div>
      </div>
  )
}

export default paciente