import { FC, MouseEventHandler, useCallback } from "react";
import {
  Container,
  Text,
  VStack,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Disconnected: FC = () => {
  const modalState = useWalletModal();
  const { wallet, connect } = useWallet();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (event.defaultPrevented) return;
      if (!wallet) {
        // if no wallet has been choosen show the modal
        modalState.setVisible(true);
      } else {
        connect().catch(() => {});
      }
    },
    [wallet, connect, modalState]
  );
  return (
    <Container>
      <VStack spacing={20}>
        <Heading
          color="white"
          as="h1"
          size="3xl"
          noOfLines={3}
          textAlign="center"
        >
          Mint you buildoor. Earn $BLD. Level up.
        </Heading>
        <Button
          bgColor="accent"
          color="white"
          maxW="380px"
          onClick={handleClick}
        >
          <HStack>
            <Text>become a Buildoors</Text>

            <ArrowForwardIcon />
          </HStack>
        </Button>
      </VStack>
    </Container>
  );
};

export default Disconnected;
