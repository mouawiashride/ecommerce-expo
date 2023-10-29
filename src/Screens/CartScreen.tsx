import { Text,
  Box,
  Center,
  HStack,
  Button,
  Colors,
  CartEmpty,
  CartItems,
  Buttone,
  useNavigation,
  useContext,
  EcommerceContext,
  useQuery,
  CART,
  Loading,
  LineItem,
} from "../import";

export default function CartScreen() {
  const { setTotlaItems, cartId, totalItems } = useContext(EcommerceContext);

  const navigation = useNavigation<any>();
  const { data: CartData, isLoading } = useQuery({
    queryKey: ["GetCartDetails", cartId],
    queryFn: () => CART.GetCart({ cart_id: cartId }),
    onSuccess: (data: {
      data: {
        total_items: number;
        subtotal: { formatted_with_symbol: string };
        line_items: LineItem[];
      };
    }) => {
      setTotlaItems(data?.data?.total_items);
    },
  });

  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          {" "}
          Cart
        </Text>
      </Center>

      {/* IF CART IS EMPTY */}
      {isLoading ? (
        <Loading />
      ) : (CartData?.data?.total_items as number) > 0 ? (
        <CartItems
          cart_id={cartId}
          products={CartData?.data.line_items as LineItem[]}
        />
      ) : (
        <CartEmpty />
      )}

      {/* CART ITEMS */}

      {/* Total */}
      <Center mt={5}>
        <HStack
          rounded={50}
          justifyContent="space-between"
          bg={Colors.white}
          shadow={2}
          w="90%"
          pl={5}
          h={45}
          alignItems="center"
        >
          <Text>Total</Text>
          <Button
            px={10}
            h={45}
            bg={Colors.main}
            rounded={50}
            _text={{
              color: Colors.white,
              fontWeight: "semibold",
            }}
            _pressed={{
              bg: Colors.main,
            }}
          >
            {CartData?.data?.subtotal.formatted_with_symbol}
          </Button>
        </HStack>
      </Center>

      {/* Checkout */}
      <Center px={5}>
        <Buttone
          disabled={CartData?.data?.total_items ? false : true}
          onPress={() => navigation.navigate("Shipping")}
          bg={Colors.black}
          color={Colors.white}
          mt={10}
        >
          CHECKOUT
        </Buttone>
      </Center>
    </Box>
  );
}
