import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/app/store.ts";
import { closeModal } from "../../src/features/modals/modalsSlice.ts";
import {FieldValues, useForm} from "react-hook-form";
import {registerUser} from "../../src/features/auth/authSlice.ts";

export function RegisterModal() {
  const modal = useSelector((state: RootState) => state.modals["register"]);

  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm();

  const onSubmit = (values: FieldValues) => {
    dispatch(registerUser(values));
  };

  return (
    <Modal
      isOpen={modal.isOpen}
      onClose={() => dispatch(closeModal("register"))}
    >
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Регистрация</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <FormControl isRequired>
                <FormLabel>Имя пользователя</FormLabel>
                <Input {...register("username")} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Пароль</FormLabel>
                <Input {...register("password")} />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" w="full" type="submit">
              Зарегистрироваться
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
