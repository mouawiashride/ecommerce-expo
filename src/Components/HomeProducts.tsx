import {
  Alert,
  Box,
  CloseIcon,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  Stack,
  Text,
  VStack,
  View,
} from "../import";
import PropTypes, { InferProps } from "prop-types";
import { Product, Products } from "../data/Products";
import { Colors } from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { PRODUCT } from "../services/products";
import Animated, { Easing, FadeInUp, FadeOutDown, FadeOutLeft, Layout, Transition } from "react-native-reanimated";
import { FadeIn, FadeOut } from "react-native-reanimated";

function HomeProducts(props: InferProps<typeof HomeProducts.propTypes>) {
  const navigation = useNavigation<any>();
  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) => PRODUCT.GetAllProducts(pageParam),
    getNextPageParam: (lastPage: any) => {
      return lastPage?.data?.data?.meta?.pagination?.current_page <
        lastPage?.data?.data?.meta?.pagination?.total_pages
        ? lastPage?.data?.data?.meta?.pagination?.current_page + 1
        : undefined;
    },
    keepPreviousData: true,
  });
  return (
    <>
      {isError && (
        <Stack space={3} w="100%" maxW="400">
          <Alert w="100%" status={"error"}>
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    {"Please Try Again Later"}
                  </Text>
                </HStack>
                <IconButton
                  variant="unstyled"
                  _focus={{
                    borderWidth: 0,
                  }}
                  icon={<CloseIcon size="3" />}
                  _icon={{
                    color: "coolGray.600",
                  }}
                />
              </HStack>
            </VStack>
          </Alert>
        </Stack>
      )}
      {data?.pages && (
        <ScrollView
          onScrollEndDrag={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          flex={1}
          showsVerticalScrollIndicator={false}
        >
          <Flex
            flexWrap="wrap"
            direction="row"
            justifyContent="space-between"
            px={6}
          >
            {data?.pages?.map((page) => {
              return page?.data?.data?.data?.map(
                (product: {
                  name: string;
                  id: Key | null | undefined;
                  image: { url: any };
                  price: {
                    formatted: string | number | boolean | null | undefined;
                  };
                }) => {
                  const Result = product?.name
                    ?.toLowerCase()
                    ?.includes(props?.Search?.toLowerCase());

                  return !Result ? null : (
                    <Animated.View   style={{
                      width:"47%",
                    }}   layout={Layout.duration(300).delay(200)}
                    entering={FadeInUp}
                    exiting={FadeOutDown.damping(5).mass(30).duration(300)}   >
                    
                      <Pressable
                        onPress={() =>
                          navigation.navigate("Single", {
                            productId: product.id,
                          })
                        }
                        key={product.id}
                        w="100%"
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        pt={0.3}
                        my={3}
                        pb={2}
                        overflow="hidden"
                      >
                        <Image
                          source={{ uri: product.image.url }}
                          alt="image product"
                          w="full"
                          h={24}
                          resizeMode="contain"
                        />
                        <Box px={4} pt={1}>
                          <Heading size="sm" bold>
                            ${product.price.formatted}
                          </Heading>
                          <Text fontSize={10} mt={1} isTruncated w="full">
                            {product.name}
                          </Text>
                        </Box>
                      </Pressable>
                    </Animated.View>
                  );
                }
              );
            })}
          </Flex>
        </ScrollView>
      )}
      {(isLoading || isFetchingNextPage) && (
        <HStack space={8} justifyContent="center" alignItems="center">
          <Spinner size="lg" />
        </HStack>
      )}
    </>
  );
}

HomeProducts.propTypes = {
  Search: PropTypes.string.isRequired,
};

export default HomeProducts;
