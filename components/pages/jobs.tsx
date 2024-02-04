import {
  Container,
  Box,
  Flex,
  Text,
  Grid,
  LinkBox,
  LinkOverlay,
  Heading,
  HStack,
  Tag,
  Button,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GpOffer } from "@/components/assets/icons";
import Search from "@/components/search";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TimeAgo } from "@/components/time-ago";
import Image from "next/image";

type JobsPageProps = {
  page: number;
  totalPages: number;
  search: string;
  offers: {
    name: string;
    description: string;
    id: string;
    enterpriseName: string;
    linkOffer: string;
    contractType: string[];
    logo: string;
    createdAt: string;
    source:
      | "business"
      | "poleEmploi"
      | "ouestfrance"
      | "benevolt"
      | "sportyjob";
    location: {
      city: string;
      latitude: number;
      longitude: number;
      country: string;
      state: string;
      formattedAddress: string;
    };
  }[];
};

export default async function JobsPage({
  page,
  totalPages,
  search,
  offers,
}: JobsPageProps) {
  const sources = {
    business: {
      title: "Grimp",
    },
    poleEmploi: {
      title: "France Travail",
    },
    ouestfrance: {
      title: "Ouest France",
    },
    benevolt: {
      title: "Benevolt",
    },
    sportyjob: {
      title: "Sportyjob",
    },
  };

  return (
    <Container as="section" size="ptHeader.pt50">
      <Flex
        minHeight="320px"
        borderRadius="1rem"
        backgroundImage="linear-gradient(rgba(229,245,142,.95),rgba(229,245,142,.95)),url(https://assets-global.website-files.com/64f9cac4736f083ebd607997/64f9cac4736f083ebd6079cb_doodle-bg-black.svg)"
        alignItems="center"
        position="relative"
        justifyContent="center"
      >
        <Box p="10" textAlign="center">
          <Heading as="h1" size="2xl">
            Notre job, vous aider à trouver le vôtre
          </Heading>
        </Box>
        <Box
          position="absolute"
          bottom="0"
          left={{ base: "5%", lg: 0 }}
          right={{ base: "5%", lg: 0 }}
          transform="translateY(50%)"
        >
          <Box maxWidth="3xl" mx="auto">
            <Search searchParams={{ search, location: "" }} />
          </Box>
        </Box>
      </Flex>
      <Grid gridGap="5" mt="32" maxWidth="5xl" mx="auto">
        {offers.map((offer, i) => (
          <LinkBox
            key={i}
            display="grid"
            gridTemplateColumns={{ base: "1fr", lg: "auto 1fr auto" }}
            gridGap={{ base: 5, lg: 10 }}
            p="24px"
            border="1px solid"
            borderColor="rgba(34, 34, 34, 0.1)"
            borderRadius="4px"
            bg="white"
            minH="14rem"
          >
            <Flex alignItems="center">
              {offer.logo ? (
                <Box
                  as="figure"
                  position="relative"
                  minHeight="100px"
                  width="100px"
                  borderRadius="4px"
                  overflow="hidden"
                >
                  <Image
                    src={offer.logo}
                    alt="Grimp banner"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ) : (
                <GpOffer fontSize="100px" />
              )}
            </Flex>
            <Grid gridTemplateRows="1fr auto" gridGap="5">
              <Box>
                <Heading as="h2" size="lg" textTransform="capitalize" mb="2">
                  <LinkOverlay as={NextLink} href={`/jobs/${offer.id}`}>
                    {offer.name}
                  </LinkOverlay>
                </Heading>
                <Text>{offer.enterpriseName}</Text>
              </Box>
              <Grid
                gridTemplateColumns={{ base: "1fr", lg: "auto auto auto 1fr" }}
                gridGap="3"
              >
                <Flex>
                  <Tag
                    variant="outline"
                    color="rgb(29, 30, 28)"
                    borderColor="rgba(34, 34, 34, 0.1)"
                  >
                    {offer.contractType[0]}
                  </Tag>
                </Flex>
                <Flex>
                  {offer.location && (
                    <Tag
                      variant="outline"
                      color="rgb(29, 30, 28)"
                      borderColor="rgba(34, 34, 34, 0.1)"
                    >
                      {offer.location.formattedAddress}
                    </Tag>
                  )}
                </Flex>
                <Flex>
                  <Tag
                    variant="outline"
                    color="rgb(29, 30, 28)"
                    borderColor="rgba(34, 34, 34, 0.1)"
                  >
                    {sources[offer.source]?.title}
                  </Tag>
                </Flex>
              </Grid>
            </Grid>
            <Flex alignItems="flex-end">
              <Text fontSize="xs">
                <TimeAgo date={new Date(offer.createdAt)} />
              </Text>
            </Flex>
          </LinkBox>
        ))}
      </Grid>
      <Box maxW="2xl" mx="auto" mt="10">
        <Grid gridTemplateColumns="auto 1fr auto">
          <Flex>
            {page === 1 ? (
              <Button
                isDisabled
                variant="link"
                colorScheme="monochrome"
                leftIcon={<FiChevronLeft />}
              >
                Précédent
              </Button>
            ) : (
              <Button
                as={NextLink}
                href={{
                  pathname: "/jobs",
                  query: {
                    ...(search && { search }),
                    page: page - 1,
                  },
                }}
                role="button"
                variant="link"
                colorScheme="monochrome"
                leftIcon={<FiChevronLeft />}
              >
                Précédent
              </Button>
            )}
          </Flex>
          <Flex justifyContent="center">
            <Text fontWeight="bold" fontSize="md">
              {`${page} sur ${totalPages}`}
            </Text>
          </Flex>
          <Flex>
            {page === totalPages ? (
              <Button
                isDisabled
                variant="link"
                colorScheme="monochrome"
                rightIcon={<FiChevronRight />}
              >
                Suivant
              </Button>
            ) : (
              <Button
                as={NextLink}
                href={{
                  pathname: "/jobs",
                  query: {
                    ...(search && { search }),
                    page: page + 1,
                  },
                }}
                role="button"
                variant="link"
                colorScheme="monochrome"
                rightIcon={<FiChevronRight />}
              >
                Suivant
              </Button>
            )}
          </Flex>
        </Grid>
      </Box>
    </Container>
  );
}
