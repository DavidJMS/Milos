import React from "react"

import SimpleTable from "../component/Table"
import SimpleSidebar from "../component/SimpleSidebar"

import AgregarMaterial from "../component/AgregarMaterial"

const Proveedores = () => {
  const title = "Materiales"
  const fields = ["Nombre", "Existencia", "Minimo en almacen"]
  const values = [
    ["Harina de trigo", 30, 5],
    ["Huevo", 30, 5],
    ["Leche liquida 4 litros", 30, 5],
    ["Harina de trigo", 30, 5],
    ["Azucar", 15, 10],
    ["Mantequilla", 15, 4]
  ]
  return (
    <SimpleSidebar>
      <>
        <AgregarMaterial/>
        <SimpleTable
          title={title}
          fields={fields}
          values={values}
        />
        
      </>
    </SimpleSidebar>
  )
}

export default Proveedores