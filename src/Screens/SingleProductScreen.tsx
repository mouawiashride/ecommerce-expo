import {
  Box,ToastAndroid,
  ScrollView,
  Image,
  Heading,
  HStack,
  Spacer,
  useState,
  Colors,
  CART,
  RenderHTML,
  NumericInput,
  Buttone,
  Review,
  useQuery,
  useWindowDimensions,
  useContext,
  EcommerceContext,
  useMutation,
  Errors,
  HandleError,
  PRODUCT,
  Error,
  Loading,queryClient
} from "../import";

export default function SingleProductScreen({
  route,
  navigation,
}: {
  route: { params: { productId: string } };
  navigation: any;
}) {
  const { width } = useWindowDimensions();
  const [value, setValue] = useState<number>(0);
  const { productId }: { productId: string } = route.params;
  const { setTotlaItems, cartId, totalItems } = useContext(EcommerceContext);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => PRODUCT.GetProductById(productId),
  });

  const { mutate: AddToCart } = useMutation(
    ["AddToCart"],
    (data: { cart_id: string; id: string; quantity: number }) =>
      CART.AddToCart(data),
    {
      onError(error: Errors) {
        HandleError(error);
      },
      onSuccess() {
        navigation.navigate("Cart");
        ToastAndroid.show("Added done", 2000);
   
        queryClient.refetchQueries({queryKey:['GetCartDetails']});
      },
    }
  );
  const { refetch } = useQuery({
    queryKey: ["GetCart"],
    queryFn:()=> CART.GetCart({cart_id:cartId}),
    onSuccess: (data: { data: { total_items: number } }) => {
      if (cartId) {
        setTotlaItems(data?.data?.total_items);
      }
    },
    refetchOnWindowFocus: false,
    enabled: false, // disable this query from automatically running
  });

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message="Please Try Again Later there is a Problem" />
      ) : (
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <Image
            source={{ uri: data?.data.image.url }}
            alt="image"
            w="full"
            h={300}
            resizeMode="contain"
          />
          <Heading bold fontSize={15} mb={2} lineHeight={22}>
            {data?.data?.name}
          </Heading>
          {/* <Rating value={product.rating} text={`${product.numReviews} reviews`} /> */}
          <HStack space={2} alignItems="center" my={5}>
            {data?.data?.inventory.available > 0 ? (
              <NumericInput
                value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={data?.data?.inventory.available}
                minValue={0}
                borderColor={Colors.deepGray}
                rounded
                onChange={(value) => setValue(value)}
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
            ) : (
              <Heading bold color={Colors.red} italic fontSize={12}>
                Out of stock
              </Heading>
            )}

            <Spacer />
            <Heading bold color={Colors.black} fontSize={19}>
              {data?.data?.price.formatted_with_symbol}
            </Heading>
          </HStack>

          <RenderHTML
            contentWidth={width}
            source={{ html: data?.data?.description }}
            enableExperimentalMarginCollapsing={true}
          />
          {data?.data?.inventory.available ? (
            <Buttone
              onPress={() => {
                AddToCart({ cart_id: cartId, id: productId, quantity: value });
                
              }}
              bg={Colors.main}
              color={Colors.white}
              mt={10}
            >
              ADD TO CART
            </Buttone>
          ) : (
            ""
          )}

          {/* REVIEW */}
          <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
            <Review />
          </Box>
        </ScrollView>
      )}
    </Box>
  );
}
