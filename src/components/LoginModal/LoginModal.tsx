import {
  Button,
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
import { closeModal } from "../../features/modal/modalSlice.ts";
import {
  fetchUser,
  LoginData,
  loginUser,
} from "../../features/auth/authActions.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import { Modal } from "../Modal";
import { useForm } from "react-hook-form";
export function LoginModal() {
  const id = "login";

  const dispatch = useAppDispatch();

  const { handleSubmit, register } = useForm<LoginData>();

  const onSubmit = (values: LoginData) => {
    dispatch(loginUser(values)).then(() => {
      dispatch(fetchUser());
      dispatch(closeModal(id));
    });
  };

  return (
    <Modal id={id}>
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Вход</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <FormControl isRequired>
                <FormLabel>Почта</FormLabel>
                <Input {...register("email")} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Пароль</FormLabel>
                <Input type="password" {...register("password")} />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button w="full" type="submit">
              Войти
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
