
import {ScrollView,
  Box, Heading,
  OrderInfo,Colors,
  FontAwesome5,
  Ionicons,
  OrderIterm,
  OrderModel} from "../import";
export default function OrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
    <Box>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      
        <OrderInfo
          title="Shipping INFO"
          subTitle="Shipping: Syria"
          text="Pay Method: Paypal"
          success
          icon={
            <FontAwesome5
              name="shipping-fast"
              size={30}
              color={Colors.white}
            />
          }
        />
        <OrderInfo
        
          title="DELIVER INFO"
          subTitle="Address:"
          danger
          text="29 may , mojtahed, p.0"
          icon={
            <Ionicons name="location-sharp" size={30} color={Colors.white} />
          }
        />
      </ScrollView>
    </Box>
    {/* Order Iterm */}
    <Box px={6} flex={1} pb={3}>
      <Heading bold fontSize={15} isTruncated my={4}>
        PRODUCTS
      </Heading>
      <OrderIterm />
      {/* Total */}
      <OrderModel />
    </Box>
  </Box>
  );
}
