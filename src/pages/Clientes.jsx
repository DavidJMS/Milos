import React from "react"

import SimpleTable from "../component/Table"
import SimpleSidebar from "../component/SimpleSidebar"
import AgregarCliente from "../component/AgregarCliente"
import { HStack } from "@chakra-ui/react"


const Clientes = () => {
  const title = "Clientes"
  const fields = ["Nombres", "Apellidos", "Cedula", "Telefono"]
  const values = [
    ["David", "Marabay", "27113327", "04148605204"]
  ]
  return (
    <SimpleSidebar>
      <HStack w={'80%'} display={'flex'} justifyContent={'end'} mr={4}>
      <AgregarCliente />
      </HStack>
      <SimpleTable
        title={title}
        fields={fields}
        values={values}
      />
    </SimpleSidebar>
  )
}

export default Clientes