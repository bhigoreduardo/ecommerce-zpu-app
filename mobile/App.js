import { Box, NativeBaseProvider } from "native-base";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      {/* paddingTop={StatusBar.currentHeight} */}
      <Box flex={1}>
        <HomeScreen />
      </Box>
    </NativeBaseProvider>
  );
}
