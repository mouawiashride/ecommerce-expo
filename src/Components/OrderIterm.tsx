import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { Products } from "../data/Products";
import { Colors } from "../color";

export default function OrderIterm() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Products.slice(0, 3)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="cover"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color={Colors.black} bold fontSize={12}>
                  {item.name}
                </Text>
                <Text isTruncated bold color={Colors.lightBlack} mt={2}>
                  ${item.price}
                </Text>
              </VStack>
              <Center>
                <Button _text={{
                    color:Colors.white
                }} bg={Colors.main} _pressed={{ bg: Colors.main }}>
                  5
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
}
