import { FC } from "react";
import {
  Container,
  Text,
  VStack,
  HStack,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import Head from "next/head";

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading color={"white"} as="h1" noOfLines={1} textAlign="center">
            Welcom Buildoor
          </Heading>

          <Text color="bodyText" fontSize={"xl"} textAlign="center">
            Each buildoor is randomly generated and can be staked to receive
            <Text as="b">$BLD</Text>. Use your <Text as="b"> $BLD</Text> to
            upgrade your buildoor and receive perks within the commuity!
          </Text>
        </VStack>
      </Container>

      <HStack spacing={10}>
        <Image src="avatar1.png" alt="" />
        <Image src="avatar2.png" alt="" />
        <Image src="avatar3.png" alt="" />
        <Image src="avatar4.png" alt="" />
        <Image src="avatar5.png" alt="" />
      </HStack>

      <Button bgColor={"accent"} color="white" maxW="380px">
        <Text>mint buildoor</Text>
      </Button>
    </VStack>
  );
};

export default Connected;
