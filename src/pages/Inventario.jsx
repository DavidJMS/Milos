import React from "react"

import SimpleTable from "../component/Table"
import SimpleSidebar from "../component/SimpleSidebar"

import AgregarMaterial from "../component/AgregarMaterial"
import { HStack } from "@chakra-ui/react"

const Inventario = () => {
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
      <HStack w={'80%'} display={'flex'} justifyContent={'end'} mr={4}>
      <AgregarMaterial/>
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

export default Inventario