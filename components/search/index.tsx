"use client";
import {
  Flex,
  Grid,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SearchProps = {
  searchParams: {
    search: string;
    location: string;
  };
};

export default function Search({ searchParams }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const router = useRouter();

  function onSubmit() {
    router.push(`/jobs?search=${searchValue}`);
  }

  return (
    <Grid
      bg="white"
      border="1px solid"
      borderColor="rgba(34, 34, 34, 0.1)"
      borderRadius="1rem"
    >
      <Flex py="26px" px="1.5rem">
        <FormControl>
          <FormLabel htmlFor="search">Quoi ?</FormLabel>
          <Input
            type="text"
            name="search"
            defaultValue={searchParams.search}
            variant="unstyled"
            placeholder="Métier, entreprise, compétence..."
            _placeholder={{ color: "gray.400" }}
            borderRadius="none"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSubmit();
              }
            }}
          />
        </FormControl>
      </Flex>
      {/* <Flex py="26px" px="1.5rem">
        <FormControl>
          <FormLabel htmlFor="location">Ou ?</FormLabel>
          <Input
            type="text"
            name="location"
            variant="unstyled"
            placeholder="Ville, département, code postal..."
            _placeholder={{ color: "gray.400" }}
            borderRadius="none"
            onChange={(e) => setLocationValue(e.target.value)}
          />
        </FormControl>
      </Flex> */}
    </Grid>
  );
}
