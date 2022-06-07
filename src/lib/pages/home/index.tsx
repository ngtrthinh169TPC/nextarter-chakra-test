import { Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="60vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Heading as="h2">Trang chủ</Heading>
    </Box>
  );
};

export default Home;
