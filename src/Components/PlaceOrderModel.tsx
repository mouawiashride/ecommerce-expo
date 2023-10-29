
import {useState,
  Button, Center, HStack, Modal, Text, VStack,
  Colors,
  useNavigation} from "../import";
const OrdersInfos = [
  { title: "Products", price: 125.46, color: "black" },
  { title: "Shipping", price: 20.46, color: "black" },
  { title: "Tax", price: 30.46, color: "black" },
  { title: "Total Amount", price: 1025.5, color: "main" },
];
export default function PlaceOrderModel() {
  const navigation = useNavigation<any>();

  const [showModel, setShowModel] = useState<boolean>(false);
  return (
    <Center>
      <Button
        onPress={() => setShowModel(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        SHOW TOTAL
      </Button>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((orderinfo, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium"> {orderinfo.title}</Text>
                  <Text
                    color={
                      orderinfo.color === "main" ? Colors.main : Colors.black
                    }
                    bold
                  >
                    ${orderinfo.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() =>{ 
                navigation.navigate("Order");
                setShowModel(false);}}
              _pressed={{ bg: Colors.main }}
            >
Place An Order
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
