import {
  Container,
  Box,
  Heading,
  Grid,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

type JobPageProps = {
  name: string;
  description: string;
  id: string;
  enterpriseName: string;
  linkOffer: string;
  contractType: string[];
  logo: string;
  createdAt: string;
  source: string;
  location: {
    city: string;
    latitude: number;
    longitude: number;
    country: string;
    state: string;
    formattedAddress: string;
  };
};

export default function JobPage({
  name,
  description,
  enterpriseName,
  linkOffer,
}: JobPageProps) {
  return (
    <Container as="section" size="ptHeader.pt50" overflow="visible">
      <Box
        as="figure"
        position="relative"
        minHeight="320px"
        borderRadius="1rem"
        backgroundImage="linear-gradient(rgba(229,245,142,.95),rgba(229,245,142,.95)),url(https://assets-global.website-files.com/64f9cac4736f083ebd607997/64f9cac4736f083ebd6079cb_doodle-bg-black.svg)"
      />
      <Box mt="10" maxWidth="5xl" mx="auto">
        <Grid gridTemplateColumns={{ base: "1fr", lg: "2fr 1fr" }} gridGap="10">
          <Box>
            <Box mb="10">
              <Heading as="h1" textTransform="capitalize" mb="1">
                {name}
              </Heading>
              <Text>{enterpriseName}</Text>
            </Box>
            <Heading as="h2" size="lg" mb="5">
              Description
            </Heading>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Box>
          <Flex alignItems="flex-start">
            <Box
              border="1px solid"
              borderColor={{ base: "transparent", lg: "rgba(34, 34, 34, 0.1)" }}
              borderRadius="4px"
              px="5"
              py={{ base: 0, lg: 6 }}
              bg={{ base: "transparent", lg: "white" }}
              position={{ base: "fixed", lg: "sticky" }}
              top={{ base: "auto", lg: "120px" }}
              bottom={{ base: "24px", lg: "auto" }}
              left={{ base: 0, lg: "auto" }}
              right={{ base: 0, lg: "auto" }}
            >
              <Box mb="10" display={{ base: "none", lg: "block" }}>
                <Heading as="p" textTransform="capitalize" size="md" mb="2">
                  {name}
                </Heading>
                <Text>{enterpriseName}</Text>
              </Box>
              <Button
                width="100%"
                as="a"
                role="button"
                href={linkOffer || "https://www.grimp.io/connect"}
                target="_blank"
              >
                Postuler
              </Button>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </Container>
  );
}
