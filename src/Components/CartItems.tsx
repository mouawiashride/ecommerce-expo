import {
  Box,
  HStack,
  Text,
  Pressable,
  Center,
  Image,
  VStack,
  Button,
  
  SwipeListView,
  FontAwesome,
  Colors,
  LineItem,
  useMutation,
  Errors,
  ToastAndroid,
  HandleError,
  CART,
  queryClient,
  Animated,
  Layout,
  FadeInUp,
  FadeOutDown
} from "../import";


function CartItems({ products,cart_id }: { products: LineItem[],cart_id:string }) {

  const { mutate: RemoveItemFromCart } = useMutation(
    ["RemoveItemFromCart"],
    (data: { line_item_id: string; cart_id: string; }) =>
      CART.RemoveItemFromCart(data),
    {
      onError(error: Errors) {
        HandleError(error);
      },
      onSuccess() {
        ToastAndroid.show("Remove Product Done", 2000);
        queryClient.refetchQueries({queryKey:['GetCartDetails']})
      },
    }
  );
  
  const Swiper = () => (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={products}
      renderHiddenItem={renderHiddenItems}
      renderItem={renderItems}
      showsVerticalScrollIndicator={false}
    />
  );

  const renderItems = (data: any) => {
    return (
      <Animated.View  layout={Layout.duration(300).delay(200)}
      entering={FadeInUp}
      exiting={FadeOutDown.damping(5).mass(30).duration(300)}   >
      <Pressable>
        <Box ml={6} mb={3}>
          <HStack
            alignItems="center"
            bg={Colors.white}
            shadow={1}
            rounded={10}
            overflow="hidden"
          >
            <Center w="25%" bg={Colors.gray}>
              <Image
                source={{ uri: data.item.image.url }}
                alt={data.item.name}
                w="full"
                h={24}
                resizeMode="contain"
              />
            </Center>
            <VStack w="60%" px={2} space={2}>
              <Text isTruncated color={Colors.black} bold fontSize={10}>
                {data.item.product_name}
              </Text>
              <Text color={Colors.lightBlack} bold>
                {data.item.price.formatted_with_symbol}
              </Text>
            </VStack>
            <Center>
              <Button
                bg={Colors.main}
                _pressed={{ bg: Colors.main }}
                _text={{
                  color: Colors.white,
                }}
              >
                {data.item.quantity}
              </Button>
            </Center>
          </HStack>
        </Box>
      </Pressable>
  </Animated.View>
    );
  };
  //   Hidden Items

  const renderHiddenItems = (data: any) => {
    return (
      <Pressable
        w={50}
        roundedTopRight={10}
        onPress={()=>{
          RemoveItemFromCart({cart_id,line_item_id:data.item.id});
        }}
        roundedBottomRight={10}
        h="88%"
        ml="auto"
        justifyContent="center"
        bg={Colors.red}
       
      >
        <Center alignItems="center">
          <FontAwesome name="trash" size={24} color={Colors.white} />
        </Center>
      </Pressable>
    );
  };
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
}

CartItems.propTypes = {};

export default CartItems;
