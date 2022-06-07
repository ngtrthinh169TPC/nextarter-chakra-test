import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const NavbarItem = (props: { href: string; text: string }) => {
  return (
    <NextLink href={props.href} passHref>
      <Link ml="3rem">{props.text}</Link>
    </NextLink>
  );
};

const Navbar = () => {
  return (
    <Flex justify="space-evenly">
      <NavbarItem href="/" text="Trang chủ" />
      <NavbarItem href="/list" text="Dòng họ" />
      <NavbarItem href="/form" text="Thêm người thân" />
      <NavbarItem href="/personal" text="Cá nhân" />
    </Flex>
  );
};

export default Navbar;
