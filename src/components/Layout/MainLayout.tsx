import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <Box display="block" px={{ base: "20px", lg: "50px" }}>
        <Outlet />
      </Box>
    </>
  );
}
