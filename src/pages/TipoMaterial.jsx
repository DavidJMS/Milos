import React from "react"

import SimpleTable from "../component/Table"
import SimpleSidebar from "../component/SimpleSidebar"

import AgregarTipoDeMaterial from "../component/AgregarTipoDeMaterial"

const TipoMaterial = () => {
  const title = "Materiales"
  const fields = ["Nombre", "Unidad de medida", "Accion"]
  const values = [
    ["Harina de trigo", "1 kg"],
    ["Carton de huevo", "12 unidades"],
    ["Leche liquida", "1 L"],
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