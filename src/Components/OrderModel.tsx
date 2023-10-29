import { useState } from "react";
import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { Colors } from "../color";
import { useNavigation } from "@react-navigation/native";
const OrdersInfos = [
  { title: "Products", price: 125.46, color: "black" },
  { title: "Shipping", price: 20.46, color: "black" },
  { title: "Tax", price: 30.46, color: "black" },
  { title: "Total Amount", price: 1025.5, color: "main" },
];
export default function OrderModel() {
  const navigation = useNavigation<any>();

  const [showModel, setShowModel] = useState<boolean>(false);
  return (
    <Center>
      <Button
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
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
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={3}
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../assets/images/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h="34"
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
              _pressed={{ bg: Colors.black }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
