import { Box, Button, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react"
import React from "react"
import SimpleSidebar from "../component/SimpleSidebar"


const FormProveedor = () => {
  return(
    <Box w={'100%'} mt={1} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
       <HStack backgroundColor={'white'} display={'flex'} m={4} padding={8} borderRadius={'5px'} flexDirection={'column'}>
            <FormControl>
                <FormLabel>Nombres</FormLabel>
                <Input w={'auto'} />
            </FormControl>

            <FormControl>
                <FormLabel>Telefono</FormLabel>
                <Input w={'auto'} />
            </FormControl>

            <FormControl>
                <FormLabel>articulos</FormLabel>
                <Input w={'auto'} />
            </FormControl> 

       </HStack>
      <Button w={'20%'} mt={4} colorScheme='cyan' color={'white'} variant='solid'>Guardar</Button>
    </Box>
  ) 
}

export default FormProveedor