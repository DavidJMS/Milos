import React from "react"

import SimpleTable from "../component/Table"
import SimpleSidebar from "../component/SimpleSidebar"
import AgregarProveedor from "../component/AgregarProveedor"
import { HStack } from "@chakra-ui/react"

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
      <>
      <HStack w={'80%'} display={'flex'} justifyContent={'end'} mr={4}>
        <AgregarProveedor />
      </HStack>
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