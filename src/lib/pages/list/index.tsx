import {
  Box,
  Text,
  Heading,
  List,
  ListItem,
  Avatar,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Box position="relative" width="100%" mt="0.5rem" mb="1rem">
      <Input />
      <Box
        position="absolute"
        display="inline-flex"
        right="0.25rem"
        top="50%"
        style={{ zIndex: 2 }}
        transform="translateY(-50%)"
      >
        <IconButton
          aria-label="search"
          icon={<SearchIcon />}
          size="sm"
          width="4rem"
          borderRadius="0.375rem"
          variant="ghost"
        />
      </Box>
    </Box>
  );
};

const PersonListItem = () => {
  const bg = useColorModeValue("#edf1f7", "#111826");
  return (
    <ListItem>
      <Box
        display="flex"
        alignItems="center"
        padding="0.75rem"
        mb="0.75rem"
        bg={bg}
        borderRadius="0.375rem"
      >
        <Avatar />
        <Box ml="1rem">
          <Text fontWeight="bold" fontSize="1.25rem">
            Nguyễn Văn A
          </Text>
          <Text>Anh trai</Text>
        </Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<ChevronDownIcon />}
            size="sm"
            ml="auto"
          />
          <MenuList>
            <MenuItem>Xóa</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </ListItem>
  );
};

export const PersonList = () => {
  return (
    <List>
      <PersonListItem />
      <PersonListItem />
      <PersonListItem />
      <PersonListItem />
      <PersonListItem />
      <PersonListItem />
    </List>
  );
};

const FamilyList = () => {
  return (
    <Box
      display={{ md: "flex" }}
      // alignItems="center"
      minHeight="60vh"
      gap={4}
      mb={8}
      w="full"
      flexDir="column"
    >
      <Heading as="h2">Dòng họ</Heading>
      <SearchBar />
      <PersonList />
    </Box>
  );
};

export default FamilyList;
