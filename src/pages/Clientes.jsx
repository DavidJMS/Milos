import React from "react"

import SimpleTable from "../component/Table"
import SimpleSidebar from "../component/SimpleSidebar"

const Clientes = () => {
  const title = "Clientes"
  const fields = ["Nombres", "Apellidos", "Cedula", "Telefono"]
  const values = [
    ["David", "Marabay", "27113327", "04148605204"]
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

export default Clientes