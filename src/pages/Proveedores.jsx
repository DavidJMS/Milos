import React from "react"

import SimpleTable from "../component/Table"
import SimpleSidebar from "../component/SimpleSidebar"

const Proveedores = () => {
  const title = "Proveedores"
  const fields = ["Nombre", "Telefono", "Articulos"]
  const values = [
    ["Distribuidor el Jeke", "045254556", "Harina de trigo, azucar"],
    ["Distribuidor el Jeke", "045254556", "Harina de trigo, azucar"],
    ["Distribuidor el Jeke", "045254556", "Harina de trigo, azucar"]
  ]
  return (
    <SimpleSidebar>
      <SimpleTable
        title={title}
        fields={fields}
        values={values}
      />
    </SimpleSidebar>
  )
}

export default Proveedores