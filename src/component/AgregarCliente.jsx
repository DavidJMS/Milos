import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export default function AgregarMaterial() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen}>Agregar Cliente</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl>
                <FormLabel>Nombres</FormLabel>
                <Input  />
            </FormControl>
            <FormControl>
                <FormLabel>Apellidos</FormLabel>
                <Input  />
            </FormControl> <FormControl>
                <FormLabel>Cedula</FormLabel>
                <Input  />
            </FormControl> <FormControl>
                <FormLabel>Telefono</FormLabel>
                <Input  />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}