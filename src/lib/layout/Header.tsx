import { Flex, Heading, Box } from "@chakra-ui/react";
import Navbar from "lib/components/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" flexDir="column">
      <Heading as="h1" size="md" width="full">
        <Link href="/">Zisan</Link>
      </Heading>
      <Box ml="auto">
        <Navbar />
      </Box>
    </Flex>
  );
};

export default Header;
