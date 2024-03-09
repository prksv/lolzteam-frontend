import { closeModal } from "../../features/modal/modalSlice.ts";
import { useForm } from "react-hook-form";
import { RegisterData, registerUser } from "../../features/auth/authActions.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import { Modal } from "../Modal";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  useToast,
} from "@chakra-ui/react";

export function RegisterModal() {
  const id = "register";

  const dispatch = useAppDispatch();
  const toast = useToast();

  const { handleSubmit, register } = useForm<RegisterData>();

  const onSubmit = (values: RegisterData) => {
    dispatch(registerUser(values))
      .unwrap()
      .then(() => {
        dispatch(closeModal(id));
      })
      .catch((err) => {
        toast({
          title: "Oops...",
          description: err.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Modal id={id}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Регистрация</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <FormControl isRequired>
                <FormLabel>Почта</FormLabel>
                <Input {...register("email")} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Имя пользователя</FormLabel>
                <Input {...register("username")} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Пароль</FormLabel>
                <Input type="password" {...register("password")} />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button w="full" type="submit">
              Зарегистрироваться
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
