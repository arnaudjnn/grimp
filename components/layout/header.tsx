import { Flex, Grid } from "@chakra-ui/react";
import { GrimpLogotype } from "@/components/assets/logos";
import NextLink from "next/link";

export default function Header() {
  return (
    <Flex
      position="fixed"
      width="100%"
      zIndex="sticky"
      mt="1.5rem"
      px="5%"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        as="header"
        height="72px"
        mx="auto"
        maxWidth="80rem"
        gridTemplateColumns="auto 1fr"
        gridGap="5"
        bg="#1d1e1c"
        width="100%"
        px="8"
        borderRadius="1rem"
      >
        <Flex alignItems="center">
          <NextLink href="/jobs">
            <GrimpLogotype height="30px" width="auto" />
          </NextLink>
        </Flex>
      </Grid>
    </Flex>
  );
}
