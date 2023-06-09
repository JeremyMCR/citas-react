import { useState, useEffect } from "react"
import Error from "./Error"
import Swal from "sweetalert2"

const Formulario = ( {pacientes, setPacientes, paciente, setPaciente} ) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarID = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random+fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log("Hay al menos un campo vacio")
      setError(true)
      return;
    }

    setError(false)


    //objeto para llamar a los pacientes
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id){
      //Editando el Registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === 
        paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})
    }
    else{
      //Nuevo registro
      objetoPaciente.id = generarID()
      setPacientes([...pacientes, objetoPaciente])
    }

    
    
    //limpiar campos
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-3/5">
        <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-xl mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form onSubmit={handleSubmit}
              className="bg-white shadow-xl py-10 rounded-xl px-5 ml-2.5 mr-3 mb-10"
        >
          
          {error && <Error>
            <p>Todos los campos son obligatorios</p>
            </Error>}

          <div className=" mb-5">
            <label htmlFor="Mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            <input 
            id = "Mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input 
            id = "propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input 
            id = "email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              alta
            </label>
            <input 
            id = "alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
            </label>
            <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
            />
          </div>

          <input type="submit"
          className="bg-emerald-800 w-full p-5 text-white text-lg uppercase font-bold
          hover:bg-emerald-900 rounded-md cursor-pointer transition-all"
          onSubmit={handleSubmit}
          value = {paciente.id ? ' Editar Paciente' : 'Agregar Paciente' }
          />
        </form>
    </div>
  )
}

export default Formulario