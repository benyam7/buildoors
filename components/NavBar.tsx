import { FC } from "react";
import { HStack, Spacer, Button } from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styles from "../styles/Home.module.css";

const NavBar: FC = () => {
  console.log("styles", styles["wallet-adapter-button-trigger"]);
  return (
    <HStack width="full" padding={4}>
      <Spacer />
      <WalletMultiButton className={styles["wallet-adapter-button-trigger"]} />
    </HStack>
  );
};

export default NavBar;
