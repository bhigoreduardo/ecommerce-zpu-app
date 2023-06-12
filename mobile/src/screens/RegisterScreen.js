import {
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
  Text,
} from "native-base";
import { MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";

import { colors } from "../utils/theme";

const RegisterScreen = () => {
  return (
    <Box flex={1} bg={colors.main}>
      <Image
        flex={1}
        alt="Background"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/splash.png")}
        blurRadius={10}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        px="6"
        pt="20"
        justifyContent="center"
      >
        <Heading color={colors.black} textTransform="uppercase">
          Sign up
        </Heading>
        <VStack pt="6" space="8">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={colors.white} />
            }
            w="100%"
            borderBottomColor={colors.black}
            variant="underlined"
            color={colors.black}
            placeholder="John Doe"
            placeholderTextColor={colors.black}
            pl="2"
          />

          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={colors.white} />
            }
            w="100%"
            borderBottomColor={colors.black}
            variant="underlined"
            color={colors.black}
            placeholder="user@email.com"
            placeholderTextColor={colors.black}
            pl="2"
          />

          <Input
            InputLeftElement={
              <Entypo name="lock-open" size={20} color={colors.white} />
            }
            type="password"
            w="100%"
            borderBottomColor={colors.black}
            variant="underlined"
            color={colors.black}
            placeholder="********"
            placeholderTextColor={colors.black}
            pl="2"
          />
        </VStack>

        <Button
          _pressed={{
            bg: colors.black,
            borderColor: colors.white,
          }}
          my="30"
          bg={colors.black}
          borderColor={colors.black}
          borderWidth="2"
          rounded="50"
        >
          Sing up
        </Button>

        <Pressable mt="4" p="1" bg={colors.deepGray} rounded="50">
          <Text
            textTransform="uppercase"
            color={colors.black}
            textAlign="center"
          >
            Login
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
