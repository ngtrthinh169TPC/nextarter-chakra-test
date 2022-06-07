import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={880} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" marginY="4rem">
          {children}
        </Box>
        <Footer />
      </Box>
      <Box pos="absolute" top="0" right="20">
        <ThemeToggle />
      </Box>
    </Box>
  );
};

export default Layout;
