import { Box } from "native-base";

import HomeSearch from "../components/HomeSearch";
import HomeProducts from "../components/HomeProducts";

const HomeScreen = () => {
  return (
    <Box>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
};

export default HomeScreen;
