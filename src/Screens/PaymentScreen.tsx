
import {
  Text,
  Box,
  Center,
  ScrollView,
  VStack,
  Ionicons,
  FontAwesome,
  Colors,
  Buttone,
  useNavigation,
  useState,
  HStack,
  Pressable,
} from "../import";


const paymentMethodes = [
  {
    image: require("../../assets/images/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/images/discover.png"),
    alt: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/images/googlepay.png"),
    alt: "googlepay",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/images/stripe.png"),
    alt: "stripe",
    icon: "fontAwesome",
  },
];
export default function PaymentScreen() {
  const navigation = useNavigation<any>();
  const [payment, setpayment] = useState("paypal");

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Selection */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethodes.map((method, index) => (
              <Pressable onPress={() => setpayment(method.alt)} key={index} disabled={method.alt===payment}>
                <HStack
                  alignItems="center"
                  bg={Colors.white}
                  px={3}
                  py={1}
                  rounded={10}
                  justifyContent="space-between"
                >
                  <Box>
                    <Image
                      source={method.image}
                      alt={method.alt}
                      resizeMode="contain"
                      w={60}
                      h={50}
                    />
                  </Box>
                  {method.alt === payment ? (
                    <Ionicons
                      name="checkmark-circle"
                      size={30}
                      color={Colors.main}
                    />
                  ) : (
                    <FontAwesome
                      name="circle-thin"
                      size={30}
                      color={Colors.main}
                    />
                  )}
                </HStack>
              </Pressable>
            ))}

            <Buttone
              onPress={() => navigation.navigate(payment)}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
              Payment method is <Text bold>"Paypal"</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
