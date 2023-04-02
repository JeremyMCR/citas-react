import Paciente from "./paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen ">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10 ">
            Adminitra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className=" md:h-screen lg:overflow-y-scroll -mt-3">
            { pacientes.map( (paciente) => (
              <Paciente
                  key={paciente.id}
                  paciente = {paciente}
                  setPaciente = {setPaciente}
                  eliminarPaciente = {eliminarPaciente}/>
            ))}
          </div>
        </>

      ): (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10 ">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">Y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes