import { Box } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "../components/ui/color-mode";
function Card(props) {
  const { variant, children, ...rest } = props;
  const styles = useColorModeValue("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card;