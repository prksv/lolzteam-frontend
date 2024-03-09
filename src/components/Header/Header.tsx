import { Box, Button, Flex, Skeleton } from "@chakra-ui/react";
import { AuthButtons } from "./AuthButtons.tsx";
import { UserInfo } from "./UserInfo.tsx";
import { useGetUserQuery } from "../../hooks/redux";
import { Link, Outlet } from "react-router-dom";

export function Header() {
  const { user, isAuthorized, isLoading } = useGetUserQuery();

  return (
    <Flex
      bgColor="gray.50"
      direction="row"
      justifyContent="space-between"
      width="100%"
      py="20px"
      px={{ base: "10px", lg: "50px" }}
      mb="30px"
    >
      <Flex>
        {" "}
        <Link to="/">
          <Button variant="ghost">Главная</Button>{" "}
        </Link>
        {isAuthorized && user?.is_admin && (
          <Link to={import.meta.env.VITE_ADMIN_PANEL}>
            <Button variant="ghost">Админ-панель</Button>
          </Link>
        )}
      </Flex>
      {isLoading ? (
        <Skeleton height="40px" width="100px" />
      ) : isAuthorized ? (
        <UserInfo user={user!} />
      ) : (
        <AuthButtons />
      )}
    </Flex>
  );
}
