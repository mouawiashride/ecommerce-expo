import React,{useContext} from "react";
import PropTypes,{InferProps} from "prop-types";
import { Box, HStack, Input, Pressable } from "native-base";
import { Colors } from "../color";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {CART, useQuery } from "../import";
import { EcommerceContext } from "../context/Ecommerce";
import {VStack,Icon,Ionicons} from "../import";
function HomeSearch({
  setSearch,
  Search,
}: InferProps<typeof HomeSearch.propTypes>) {
  const { setCartId, cartId, totalItems } = useContext(EcommerceContext);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["createcart"],
    queryFn: CART.CreateCart,
    onSuccess: (data: { data: { id: string } }) => {
      if (!cartId) {
        setCartId(data.data.id);
      }
    },
  });
  const navigation = useNavigation();
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      {/* <Input
        placeholder="Adidas, Nike ..."
        w="85%"
        bg={Colors.white}
        type="text"
        variant="filled"
        h="12"
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
      /> */}
      <VStack
        my="4"
        space={5}
        w="100%"
        maxW="300px"
        divider={<Box px="2"></Box>}
      >
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Search"
            value={Search as string}
            h={12}
            _focus={{
              bg: Colors.white,
            }}
            color={Colors.main}
            borderWidth={0}
            onChangeText={(value) =>{
                setSearch(value);
            }}
            variant="filled"
            width="100%"
            borderRadius="10"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color={Colors.main}
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </VStack>
      </VStack>

      <Pressable ml={3} onPress={() => navigation.navigate("Cart" as never)}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          color={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          {totalItems}
        </Box>
      </Pressable>
    </HStack>
  );
}

HomeSearch.propTypes = {
  Search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default HomeSearch;
