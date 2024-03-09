import {
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TUser } from "../../features/auth/authSlice.ts";

interface UserInfoProps {
  user: TUser;
}

export function UserInfo({ user }: UserInfoProps) {
  return (
    <Menu>
      <MenuButton>
        <HStack>
          <Text>{user.username}</Text>
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>Выйти</MenuItem>
      </MenuList>
    </Menu>
  );
}
