import { Box, HStack, Input, Pressable } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../utils/theme";

function HomeSearch() {
  return (
    <HStack
      safeAreaTop
      w="full"
      px="6"
      py="4"
      bg={colors.main}
      alignItems="center"
    >
      <Input
        type="text"
        placeholder="Nike, Puma, Adidas..."
        bg={colors.white}
        color={colors.black}
        variant="filled"
        w="85%"
        h="12"
        borderWidth="0"
        _focus={{
          bg: colors.white,
        }}
      />

      <Pressable ml="3">
        <FontAwesome5 name="shopping-basket" size={20} color={colors.white} />
        <Box
          rounded="full"
          position="absolute"
          top="-13"
          left="2"
          px="1"
          bg={colors.red}
          _text={{ color: colors.white, fontSize: "11px" }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;
