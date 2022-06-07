import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Container,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const [fullname, setFullname] = useState("");

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFullname(e.target.value);

  return (
    <Box
      display={{ md: "flex" }}
      minHeight="60vh"
      gap={8}
      mb={8}
      w="full"
      flexDir="column"
    >
      <Heading as="h2">Thêm người thân</Heading>
      <Container display="flex" flexDir="column" gap={8}>
        <FormControl>
          <FormLabel htmlFor="fullname">Họ và tên</FormLabel>
          <Input
            id="fullname"
            type="text"
            value={fullname}
            onChange={handleFullnameChange}
          />
        </FormControl>
        {/* <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl> */}
        <FormControl>
          <FormLabel htmlFor="phone">Số điện thoại</FormLabel>
          <Input id="phone" type="number" />
        </FormControl>
        {/* <FormControl>
          <FormLabel htmlFor="gender">Giới tính</FormLabel>
          <Input id="gender" type="text" />
        </FormControl> */}
        <FormControl>
          <FormLabel htmlFor="relationship">Quan hệ với người tạo</FormLabel>
          <Input id="relationship" type="text" />
        </FormControl>
        {/* <FormControl>
          <FormLabel htmlFor="hometown">Quê quán</FormLabel>
          <Input id="hometown" type="text" />
        </FormControl> */}
        <FormControl>
          <FormLabel htmlFor="dateofbirth">Ngày sinh</FormLabel>
          <Input id="dateofbirth" type="date" />
        </FormControl>
        <ButtonGroup width="100%">
          <Button width="50%">Hủy bỏ</Button>
          <Button width="50%" colorScheme="green">
            Thêm
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default Form;
