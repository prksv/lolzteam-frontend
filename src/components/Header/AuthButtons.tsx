import { Button, ButtonGroup } from "@chakra-ui/react";
import { openModal } from "../../features/modal/modalSlice.ts";
import { useAppDispatch } from "../../hooks/redux.ts";

export function AuthButtons() {
  const dispatch = useAppDispatch();

  return (
    <ButtonGroup>
      <Button variant="ghost" onClick={() => dispatch(openModal("login"))}>
        Войти
      </Button>
      <Button variant="solid" onClick={() => dispatch(openModal("register"))}>
        Зарегистрироваться
      </Button>
    </ButtonGroup>
  );
}
