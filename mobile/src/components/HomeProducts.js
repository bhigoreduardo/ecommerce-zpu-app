import { Box, Flex, Image, Pressable, ScrollView, Text } from "native-base";
import { useEffect, useState } from "react";

import api from "../lib/axios";
import { colors } from "../utils/theme";

function HomeProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const response = api.get("/products");
    // console.log(response);
    fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView flex={1}>
      <Flex
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        px="6"
      >
        {/* {products?.length > 0 &&
          products.map((item) => (
            <Pressable
              key={item.i}
              w="47%"
              bg={colors.white}
              rounded="sm"
              shadow="2"
              my="3"
              pt="0.3"
              pb="2"
              overflow="hidden"
            >
              <Image
                source={{ uri: item.image }}
                alt={item.name}
                w="full"
                h="24"
                resizeMode="contain"
              />
            </Pressable>
          ))} */}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
