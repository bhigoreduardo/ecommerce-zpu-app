import { Box, Button, Center, Image, VStack } from "native-base";

import { colors } from "../utils/theme";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} px="6" pt="20" bg={colors.deepGray} safeAreaTop>
      <Center bg={colors.white} size="xl" rounded="full" mx="auto">
        <Image alt="Logo" source={require("../../assets/logo.png")} size="xl" />
      </Center>

      <VStack space="6" alignItems="center" mt="20">
        <Button
          w="full"
          rounded="full"
          bg={colors.black}
          mt="5"
          h="55"
          _text={{
            fontWeight: "bold",
            color: colors.white,
            textTransform: "uppercase",
          }}
          _pressed={{
            bg: colors.black,
          }}
        >
          Sign up
        </Button>

        <Button
          w="full"
          rounded="full"
          bg={colors.white}
          mt="5"
          h="55"
          _text={{
            fontWeight: "bold",
            color: colors.black,
            textTransform: "uppercase",
          }}
          _pressed={{
            bg: colors.white,
          }}
        >
          Sign up
        </Button>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;
