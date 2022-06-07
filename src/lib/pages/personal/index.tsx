import { Avatar, Box, Heading, Text, List } from "@chakra-ui/react";
import { PersonList } from "../list";

const Personal = () => {
  return (
    <Box
      display={{ md: "flex" }}
      minHeight="60vh"
      gap={12}
      mb={8}
      w="full"
      flexDir="column"
    >
      <Box display="flex" flexDir="row" alignItems="center">
        <Avatar size="2xl" />
        <Text ml="2.5rem" fontSize="2.5rem" fontWeight="bold">
          Trần Thị T
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize="1.25rem" marginY="1.5rem">
          Thông tin cá nhân
        </Text>
        <Box display="flex" marginY="1rem">
          <Text minWidth="12rem">Email:</Text>
          <Text>12345678@gmail.com</Text>
        </Box>
        <Box display="flex" marginY="1rem">
          <Text minWidth="12rem">Giới tính:</Text>
          <Text>Nữ</Text>
        </Box>
        <Box display="flex" marginY="1rem">
          <Text minWidth="12rem">Ngày sinh:</Text>
          <Text>01/01/1970</Text>
        </Box>
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize="1.25rem" marginY="1.5rem">
          Dòng họ
        </Text>
        <PersonList />
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize="1.25rem" marginY="1.5rem">
          Kỷ niệm
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize="1.25rem" marginY="1.5rem">
          Cài đặt tài khoản
        </Text>
      </Box>
    </Box>
  );
};

export default Personal;
