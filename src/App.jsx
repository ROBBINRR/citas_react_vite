import {useState, useEffect} from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente,  setPaciente ] = useState({});

  useEffect (() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      console.log(pacientesLS)
      setPacientes(pacientesLS)
      
    }
    obtenerLS();
  }, []);

  useEffect (() => {
    //console.log('Cambiando paciente')
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = id=> {
    //console.log('Eliminando Paciente',id)

    const pacienteActualizado = pacientes.filter( paciente => paciente.id !== id)

    setPacientes(pacienteActualizado)
  }

  
  return (
    <div className="container mx-auto mt-20 ">
      <Header
       
      />
      <div className="mt-12 md:flex">
        <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
        />
        <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
    
  )
}

export default App
