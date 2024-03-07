import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { openModal } from "../../src/features/modals/modalsSlice.ts";

export function Header() {
  const dispatch = useDispatch();

  const buttonVariant = "ghost";
  const buttonColorScheme = "blue";

  return (
    <Flex direction="row" justifyContent="space-between" width="100%" py="20px">
      <Button variant={buttonVariant} colorScheme={buttonColorScheme}>
        Главная
      </Button>
      <ButtonGroup>
        <Button variant="ghost" colorScheme={buttonColorScheme}>
          Войти
        </Button>
        <Button
          variant="solid"
          colorScheme={buttonColorScheme}
          onClick={() => dispatch(openModal("register"))}
        >
          Зарегистрироваться
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
