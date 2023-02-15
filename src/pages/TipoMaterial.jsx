import React from "react"

import {
  MdDeleteForever,
} from 'react-icons/md';
import {
  FaEdit,
} from 'react-icons/fa';

import SimpleTable from "../component/Table"
import SimpleSidebar from "../component/SimpleSidebar"

import AgregarTipoDeMaterial from "../component/AgregarTipoDeMaterial"

const TipoMaterial = () => {
  const title = "Materiales"
  const fields = ["Nombre", "Unidad de medida", "Accion"]
  const values = [
    ["Harina de trigo", "1 kg", <><MdDeleteForever /><FaEdit /></>],
    ["Carton de huevo", "12 unidades", <><MdDeleteForever /><FaEdit /></>],
    ["Leche liquida", "1 L", <><MdDeleteForever /><FaEdit /></>],
  ]
  return (
    <SimpleSidebar>
      <>
        <AgregarTipoDeMaterial/>
        <SimpleTable
          title={title}
          fields={fields}
          values={values}
        />
        
      </>
    </SimpleSidebar>
  )
}

export default TipoMaterial